import { useState } from "react";
import s from "./Login.module.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Ваша логика для проверки учетных данных пользователя
    if (username === "yourUsername" && password === "yourPassword") {
      setLoggedIn(true);
    } else {
      alert("Неправильное имя пользователя или пароль");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className={s.loginPage}>
            <div className={s.loginBox}>
              <h2>Вход</h2>
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
            </div>
            {loggedIn && (
              <div className={s.loginSuccess}>
                <button>Вы успешно вошли в систему!</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
