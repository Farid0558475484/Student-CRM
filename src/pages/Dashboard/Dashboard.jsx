import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <>
      <header>
        <Container fluid>
          <Row>
            <div className="imgLogo">
              <img
                src="https://barattson.feridhacizade.com/back/dist/img/logo-favicon/1697923827_53375_larablog_logo.png"
                alt="logo"
              />
            </div>
          </Row>
        </Container>
      </header>
      <main>
        <section>
          <Container fluid>
            <Row>
              <Col className={s.col} md={2}>
                <div className={s.slider}>
                  <Link href="./AddEmployer/AddEmployer">Add User</Link>
                  <p>List User</p>
                  <p>Cedvel yaratmaq</p>
                  <p>lorem</p>
                  <p>lorem</p>
                  <p>lorem</p>
                </div>
              </Col>

              <Col md={10}>
                1. Name , Last name, Father name,
                <br />
                Birth date(calendar), Gender(dropdown), Personal ID,
                <br />
                Email, Mobile, Phone number,
                <br />
                Department , User Role
                <br />
                <br />
                2. siyahi(ad soyad , sistemde ona verilmish rol deyishdirilmes
                edit Role(dropdown) (View - ok and Editor - no)(link info))
                <br />
                <br />
                3. hesabatlar, bolmeler(hesabatlari olacag)
                <br />
                <br />
                4.
                <br />
                <br />
                5.
                <br />
                <br />
                6.
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
