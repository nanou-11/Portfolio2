import React, { useState } from "react";
import { Form, Input, Row, Col, Button, Label } from "reactstrap";

import Dashboard from "./Dashboard";

import styles from "./Login.module.css";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${host}/auth/login`, {
        email,
        password,
      });
      setChange(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {change === false ? (
        <Row className="ml-0 mr-0">
          <div className={styles.couv}>
            <h1 className={styles.titleLogin}>Login</h1>
            <Form onSubmit={handleSubmit} className={styles.form}>
              <Label id="email" className={styles.label}>
                Email
              </Label>
              <Input
                className={styles.input1}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label id="password" className={styles.label}>
                Password
              </Label>
              <Input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeHolder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error ? (
                <p className={styles.label}>Email ou mot de passe incorrect</p>
              ) : (
                ""
              )}
              <Row className="mt-4">
                <Col xs="6">
                  <Button type="submit" className={styles.button}>
                    Valider
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Row>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default Login;
