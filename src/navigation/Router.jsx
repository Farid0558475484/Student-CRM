import { Route, Routes } from "react-router-dom";
import StudentTable from "../components/StudentTable/StudentTable";
import Login from "./../pages/Login/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StudentTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
