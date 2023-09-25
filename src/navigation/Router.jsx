import { Route, Routes } from "react-router-dom";
import StudentTable from "../components/StudentTable";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentTable />} />
      </Routes>
    </div>
  );
}

export default Router;
