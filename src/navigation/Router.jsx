import { Route, Routes } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import Login from "./../pages/Login/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StudentTable />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
