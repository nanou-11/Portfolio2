import React, { useState, useEffect } from "react";
import Axios from "axios";
import Login from "./Login";
import { Form, Row, Label, Input, Button, Col } from "reactstrap";

import styles from "./Register.module.css";
import { useHistory } from "react-router";

const host = process.env.REACT_APP_HOST;

function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const history = useHistory();

  const getUser = async () => {
    try {
      const res = await Axios.get(`${host}/user`);
      setUser(res.data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const postUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${host}/auth/register`, {
        lastName,
        firstName,
        email,
        password,
        github,
        linkedin,
      });
      history.push("/dashboard");
    } catch (err) {
      setErrorPost(true);
    }
  };
  return (
    <>
      {error ? "" : ""}
      {user[0] ? (
        <Login />
      ) : (
        <Row className="ml-0 mr-0">
          <div className={styles.couv}>
            <h1 className={styles.titleRegister}>Login</h1>
            <Form className={styles.form} onSubmit={postUser}>
              <Row>
                <Col xs="3">
                  <Label id="lastname" className={styles.label}>
                    Nom
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Nom"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3">
                  <Label id="firstname" className={styles.label}>
                    Prénom
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Prénom"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3">
                  <Label id="email" className={styles.label}>
                    Email
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3">
                  <Label id="password" className={styles.label}>
                    Mot de passe
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs="3">
                  <Label id="Github" className={styles.label}>
                    Github
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="Github"
                    id="Github"
                    placeholder="Github"
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3">
                  <Label id="Linkedin" className={styles.label}>
                    Linkedin
                  </Label>
                </Col>
                <Col>
                  <Input
                    className={styles.input1}
                    type="text"
                    name="Linkedin"
                    id="Linkedin"
                    placeholder="Linkedin"
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </Col>
              </Row>

              <Button type="submit" className={styles.button}>
                Valider
              </Button>
              {errorPost ? <h3>Erreur lors de la création</h3> : ""}
            </Form>
          </div>
        </Row>
      )}
    </>
  );
}

export default Register;
