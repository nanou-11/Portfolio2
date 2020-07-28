import React, { useState, useEffect } from "react";

import styles from "./Infos.module.css";
import { Button, Input, Form, Row, Col } from "reactstrap";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;
const imgurToken = process.env.REACT_APP_IMGUR_TOKEN;

function Infos() {
  const [abouts, setAbouts] = useState("");
  const [about, setAbout] = useState("");
  const [errorPutAbout, setErrorPutAbout] = useState(false);
  const [error, setError] = useState(false);
  const [cv, setCV] = useState(abouts[0] && abouts[0].cv);
  const [errorPutCV, setErrorPutCV] = useState(false);
  const [user, setUser] = useState();
  const [modified, setModified] = useState(false);

  const getUser = async () => {
    try {
      const res = await Axios.get(`${host}user`);
      setUser(res.data[0]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleCV = (e) => {
    setCV(e.target.files[0]);
    console.log(cv);
  };

  const getAbout = async () => {
    try {
      const res = await Axios.get(`${host}about`);
      setAbouts(res.data);
      setAbout(res.data[0] && res.data[0].about);
      setCV(res.data[0] && res.data[0].cv);
    } catch (err) {
      setError(true);
    }
  };

  const postAbout = async (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", cv, {
      headers: {
        Authorization: `Client-ID ${imgurToken}`,
      },
    })
      .then((res) => {
        return Axios.post(`${host}about/`, {
          cv: res.data.data.link,
          about,
          UserId: user.id,
        });
      })
      .then(() => getAbout())
      .catch((err) => {
        setErrorPutCV(err);
      });
  };

  const putAbout = async () => {
    const { id } = abouts[0];
    try {
      await Axios.put(`${host}about/${id}`, {
        about,
        UserId: user.id,
      });
      setModified(true);
      setTimeout(() => setModified(false), 1000);
    } catch (err) {
      setErrorPutAbout(true);
      setTimeout(() => setErrorPutAbout(false), 1500);
    }
  };

  const postNewCV = (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", cv, {
      headers: {
        Authorization: `Client-ID ${imgurToken}`,
      },
    })
      .then((res) => {
        const { id } = abouts[0];
        console.log(id);
        return Axios.put(`${host}about/${id}`, {
          cv: res.data.data.link,
        });
      })
      .then(() => getAbout())
      .catch((err) => {
        setErrorPutCV(err);
      });
  };

  useEffect(() => {
    getAbout();
  }, []);
  console.log(abouts);
  return (
    <div>
      {error ? <h3>erreur lors de la récupération des données</h3> : ""}
      <h1 className={styles.h1}>A propos</h1>
      {abouts[0] ? (
        <>
          <Input
            className={styles.textarea}
            type="textarea"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          />
          <Row className=" mt-3">
            <Col xs={{ size: 2, offset: 9 }}>
              <Button className={styles.button} onClick={putAbout}>
                Modifier
              </Button>
            </Col>
          </Row>
          {modified ? <h2>Modification réussie</h2> : ""}
          {errorPutAbout ? <h3>Erreur lors de la modification</h3> : ""}
          <h1 className={styles.h1}>CV</h1>
          <Form onSubmit={postNewCV}>
            <p className={styles.p}>
              <b>CV actuel :</b> {abouts[0] && abouts[0].cv}
            </p>
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
            {errorPutCV ? <h3>Erreur lors de la modification du CV</h3> : ""}
          </Form>
        </>
      ) : (
        <Form onSubmit={postAbout}>
          <h2>Ajouter votre A propos et votre cv</h2>
          <Input
            className={styles.textarea}
            type="textarea"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          />
          <Row className="mt-4">
            <Col>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                // files={abouts[0] && abouts[0].cv}
                onChange={handleCV}
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Button className={styles.button} type="submit">
                Ajouter
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
}

export default Infos;
