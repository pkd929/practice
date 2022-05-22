
import "./App.css";
import { Card, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import edit from "./assets/edit.png";
import heart from "./assets/heart.png";
import deletes from "./assets/delete.png";
import BasicModel from "./BasicModel";
import telephone from "./assets/telephone.png";
import email from "./assets/email.png";
import globe from "./assets/globe.png"
import CreateModel from "./CreateModel";
import DeletModel from "./DeletModel";


function App() {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <div>
        <CreateModel/>
      </div>
      <div className="row">
        {users.map((e) => {
          return (
            <>

              <Card className="mx-3 mt-3" style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://avatars.dicebear.com/v2/avataaars/${e.username}.svg?options[mood][]=hap`}
                />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>

                  <div>{e.username}</div>
                  <div>
                    <img className="mx-2" src={email} width={15} />
                    {e.email}</div>
                  <div>
                    <img className="rotate me-2" src={telephone} width={15} />
                    {e.phone}
                  </div>
                  <div>
                    <img src={globe} width={20} />
                    {e.website}</div>
                </Card.Body>
                <div className="navbar">
                  <img src={heart} width={20} />
                  <BasicModel />
                  <DeletModel/>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </Container>
  );
}

export default App;