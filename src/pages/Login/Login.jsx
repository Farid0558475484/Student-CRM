import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "./../../api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "./../../redux/features/auth/authSlice";

function Login() {
  const [loginUser] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Локальные состояния для отслеживания введенных значений логина и пароля
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Вызов loginUser с передачей логина и пароля
      const response = await loginUser({ username, password });

      // Извлечение данных из ответа
      const { Token, UserName, Role } = response.data;

      // Сохранение токена в sessionStorage
      sessionStorage.setItem("token", Token);

      // Отправка действия для установки состояния аутентификации
      dispatch(
        setAuth({ isAuthenticated: true, userName: UserName, role: Role })
      );
      // Перенаправление на панель приборов
      navigate("/dashboard");
    } catch (error) {
      alert("Login ve ya parol sehfdi");
    }
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Войти</button>
    </section>
  );
}

export default Login;
