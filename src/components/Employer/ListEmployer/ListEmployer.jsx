import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import s from "./ListEmployer.module.scss";

function ListEmployer() {
  const ListEmployer = [
    {
      id: 0,
      login: "Farid123",
      name: "Ferid",
      surname: "Hajizade",
      fatherName: "Mecid",
      birthDate: "01.01.1999",
      gender: "male",
      email: "salam@gmail.com",
      number: "+994773884242",
      department: "IT",
      position: "Frontend Developer",
      viewer: "Yes",
      editor: "Yes",
    },
    {
      id: 1,
      login: "User2",
      name: "John",
      surname: "Doe",
      fatherName: "Robert",
      birthDate: "15.05.1985",
      gender: "male",
      email: "john.doe@gmail.com",
      number: "+1234567890",
      department: "Marketing",
      position: "Marketing Specialist",
      viewer: "No",
      editor: "Yes",
    },
    {
      id: 2,
      login: "User3",
      name: "Alice",
      surname: "Smith",
      fatherName: "William",
      birthDate: "22.09.1990",
      gender: "female",
      email: "alice.smith@gmail.com",
      number: "+9876543210",
      department: "HR",
      position: "HR Manager",
      viewer: "Yes",
      editor: "No",
    },
    {
      id: 3,
      login: "User4",
      name: "Alex",
      surname: "Johnson",
      fatherName: "Michael",
      birthDate: "10.11.1982",
      gender: "male",
      email: "alex.johnson@gmail.com",
      number: "+1122334455",
      department: "Finance",
      position: "Financial Analyst",
      viewer: "Yes",
      editor: "No",
    },
    {
      id: 4,
      login: "User5",
      name: "Eva",
      surname: "Taylor",
      fatherName: "David",
      birthDate: "03.07.1995",
      gender: "female",
      email: "eva.taylor@gmail.com",
      number: "+9988776655",
      department: "IT",
      position: "Backend Developer",
      viewer: "Yes",
      editor: "Yes",
    },
  ];

  return (
    <Container>
      <Row>
        <Accordion>
          {ListEmployer.map((item, index) => (
            <Accordion.Item
              eventKey={index}
              key={index}
              className={s.accordionItem}
            >
              <Accordion.Header>
                <div className={s.miniInfo}>
                  <div className={s.infoUser}>
                    {item.name} {item.surname} {item.fatherName}
                  </div>
                  <div className={s.nameEmployer}>
                    {item.department} {item.position}
                  </div>
                  <div className={s.role}>
                    Viewer: {item.viewer} Editor: {item.editor}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className={s.listEmployer}>
                  <p>Login: {item.login}</p>
                  <p>Name: {item.name}</p>
                  <p>Surname: {item.surname}</p>
                  <p>Father Name: {item.fatherName}</p>
                  <p>Birth Date: {item.birthDate}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Email: {item.email}</p>
                  <p>Phone number: {item.number}</p>
                  <p>Department: {item.department}</p>
                  <p>Position: {item.position}</p>
                  <Col md={4}>
                    <div className={s.podition1}>
                      <label htmlFor="">
                        <select name="" id="">
                          <option>Viewer</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </label>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={s.podition1}>
                      <label htmlFor="">
                        <select name="" id="">
                          <option>Editor</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </label>
                    </div>
                  </Col>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}

export default ListEmployer;
