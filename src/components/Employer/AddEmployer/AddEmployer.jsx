import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./AddEmployer.module.scss";

function AddEmployer() {
  const [selectesDate, setSelectedDate] = useState(new Date());
  return (
    <section>
      <div className={s.AddEmployer}>
        <Container>
          <Row>
            <h1>Add Employer</h1>
            <Col md={4}>
              <div className={s.login}>
                <label htmlFor="">
                  <input type="text" placeholder="Login" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.password}>
                <label htmlFor="">
                  <input type="text" placeholder="Password" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.name}>
                <label htmlFor="">
                  <input type="text" placeholder="Name" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.lastName}>
                <label htmlFor="">
                  <input type="text" placeholder="Last Name" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.fatherName}>
                <label htmlFor="">
                  <input type="text" placeholder="Father Name" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.birthDate}>
                <DatePicker
                  selected={selectesDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  showYearDropdown
                />
              </div>
            </Col>
            <Col md={4}>
              <div className={s.email}>
                <label htmlFor="">
                  <input type="text" placeholder="Email" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.mobile1}>
                <label htmlFor="">
                  <input type="text" placeholder="Phone Number 1 " />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.mobile2}>
                <label htmlFor="">
                  <input type="text" placeholder="Phone Numbe 2" />
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.gender}>
                <label htmlFor="">
                  <select name="" id="">
                    <option>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.departament}>
                <label htmlFor="">
                  <select name="" id="">
                    <option>Departament</option>
                    <option value="1">IT</option>
                    <option value="2">Merketing</option>
                    <option value="2">Morooq</option>
                    <option value="2">Language</option>
                  </select>
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.position}>
                <label htmlFor="">
                  <select name="" id="">
                    <option>Position</option>
                    <option value="1">Frontend</option>
                    <option value="2">Backend</option>
                    <option value="2">Ios Developer</option>
                  </select>
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className={s.button}>
                <button>Create</button>
              </div>
            </Col>
        
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default AddEmployer;
