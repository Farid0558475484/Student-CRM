import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import Login from "./pages/Login/Login";
import StudentTable from "./pages/StudentTable/StudentTable";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFoundPage from "./components/NotFoudPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
