import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import StudentTable from "./pages/StudentTable/StudentTable";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
