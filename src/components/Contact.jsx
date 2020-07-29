import React, { useState, useEffect } from "react";

import styles from "./Contact.module.css";
import { Form, Label, Input, Button, Row, Col } from "reactstrap";
import Axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router";

const host = process.env.REACT_APP_HOST;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);
  const [user, setUser] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Axios.post(`${host}/sendMail`, { name, email, subject, message });
      setSend(true);
    } catch (err) {
      setError(true);
    }
  };

  const handleProjects = () => {
    history.push("/projects");
  };

  const getUser = async () => {
    try {
      const res = await Axios.get(`${host}/user`);
      setUser(res.data[0]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.pages}>
        <img
          onClick={handleProjects}
          className={styles.arrowleft}
          src="https://image.flaticon.com/icons/svg/860/860790.svg"
          alt="arrowright"
        />
        <div className={styles.leftPage}>
          <h1 className={styles.titleContact}>Contact</h1>
          <h2 className={styles.email}>
            <img
              className={styles.logo}
              src="https://image.flaticon.com/icons/svg/860/860758.svg"
              alt="mail"
            />{" "}
            {user && user.email}
          </h2>
          <h2>
            <img
              className={styles.logo}
              src="https://image.flaticon.com/icons/svg/25/25657.svg"
              alt="Github"
            />{" "}
            {user && user.github}
          </h2>
          <h2>
            <img
              className={styles.logo}
              src="https://image.flaticon.com/icons/svg/1384/1384046.svg"
              alt="Linkedin"
            />
            {user && user.linkedin}
          </h2>
        </div>
        <div className={styles.rightPage}>
          <p className={styles.contactText}>
            I'm interested in freelance opportunities. However, if you have
            other questions or request, don't hesitate to contact me using below
            form either.
          </p>
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Label for="name" />
            <Input
              className={styles.input}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label for="exampleEmail" />
            <Input
              className={styles.input}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label for="subjectl" />
            <Input
              className={styles.input}
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <Label for="message" />
            <Input
              className={styles.input}
              type="textarea"
              name="message"
              id="message"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
            />
            {send ? (
              <p className={styles.contactMessage}>
                Votre message a bien été envoyé
              </p>
            ) : (
              ""
            )}
            {error ? (
              <p className={styles.contactMessage}>
                Il y a eu une erreur lors de l'envoi de votre message
              </p>
            ) : (
              ""
            )}
            <Row className="mt-5">
              <Col xs={{ size: 2, offset: 9 }}>
                <Button className={styles.button} type="submit">
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
