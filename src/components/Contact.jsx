import React, { useState } from "react";

import styles from "./Contact.module.css";
import { Form, Label, Input, Button, Row, Col } from "reactstrap";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Axios.post(`${host}/sendMail`, { name, email, subject, message });
      setSend(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.pages}>
      <div className={styles.leftPage}>
        <h1 className={styles.titleContact}>Contact</h1>
      </div>
      <div className={styles.rightPage}>
        <p className={styles.contactText}>
          I'm interested in freelance opportunities. However, if you have other
          questions or request, don't hesitate to contact me using below form
          either.
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
          {send ? <p className={styles.contactText}>Votre message a bien été envoyé</p> : ""}
          {error ? (
            <p className={styles.contactText}> Il y a eu une erreur lors de l'envoi de votre message</p>
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
  );
}

export default Contact;
