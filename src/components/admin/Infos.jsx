import React, { useState, useEffect } from "react";

import styles from "./Infos.module.css";
import { Button, Input, Form, Row, Col } from "reactstrap";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;
const imgurToken = process.env.REACT_APP_IMGUR_TOKEN;

function Infos() {
  const [abouts, setAbouts] = useState("");
  const [about, setAbout] = useState(abouts[0] && abouts[0].cv);
  const [errorPutAbout, setErrorPutAbout] = useState(false);
  const [error, setError] = useState(false);
  const [cv, setCV] = useState(abouts[0] && abouts[0].cv);

  const handleCV = (e) => {
    setCV(e.target.files[0]);
    console.log(cv);
  };

  const getAbout = async () => {
    try {
      const res = await Axios.get(`${host}/about`);
      setAbouts(res.data);
    } catch (err) {
      setErrorPutAbout(true);
    }
  };

  const putAbout = async () => {
    try {
      await Axios.put(`${host}/api/v1/activityFields/${abouts[0].id}`, {
        about,
      });
    } catch (err) {
      setErrorPutAbout(true);
    }
  };

  const postNewCV = (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", cv, {
      headers: {
        Authorization: "Client-ID 38a2ddeb9886ee5",
      },
    })
      .then((res) => {
        const { id } = abouts[0];
        console.log(id)
        return Axios.put(`${host}/about/${id}`, {
          cv: res.data.data.link,
        });
      })
      .then(()=> getAbout())
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>A propos</h1>
      <Input
        className={styles.textarea}
        type="textarea"
        onChange={(e) => setAbout(e.target.value)}
        value={abouts[0] && abouts[0].about}
      />
      <Row className=" mt-3">
        <Col xs={{ size: 2, offset: 9 }}>
          <Button className={styles.button} onClick={putAbout}>
            Modifier
          </Button>
        </Col>
      </Row>
      <h1 className={styles.h1}>CV</h1>
      <Form onSubmit={postNewCV}>
        <p className={styles.p}><b>CV actuel :</b> {abouts[0] && abouts[0].cv}</p>
        <Row className={styles.cv}>
          <Col xs="8">
            <Input
              type="file"
              name="file"
              id="exampleFile"
              files={abouts[0] && abouts[0].cv}
              onChange={handleCV}
            />
          </Col>
          <Col>
            <Button className={styles.button} type="submit">
              Valider
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Infos;
