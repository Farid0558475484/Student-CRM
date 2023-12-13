import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./../../components/Sidebar/Sidebar";
import HeaderDashboard from "./../../components/HeaderDashboard/HeaderDashboard";
import AddEmployer from "./../../components/Employer/AddEmployer/AddEmployer";
import ListEmployer from "./../../components/Employer/ListEmployer/ListEmployer";
import CreateTable from "./../../components/Employer/CreateTable/CreateTable";
import { Route, Routes } from "react-router-dom";
import s from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <main>
        <section>
          <Container fluid>
            <Row>
              <Col className={s.col} md={2}>
                <Sidebar />
              </Col>
              <Col md={10}>
                <Routes>
                  <Route path="/add-employer" element={<AddEmployer />} />
                  <Route path="/list-employer" element={<ListEmployer />} />
                  <Route path="/create-table" element={<CreateTable />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
