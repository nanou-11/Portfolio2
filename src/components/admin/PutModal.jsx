import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";

import styles from "./PutModal.module.css";
import Axios from "axios";

const host = process.env.REACT_APP_HOST;

function PutModal({
  id,
  urll,
  labell,
  descriptionn,
  toolss,
  datee,
  screenshot11,
  screenshot22,
  screenshot33,
  getProjects,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [label, setLabel] = useState(labell);
  const [url, setUrl] = useState(urll);
  const [description, setDescription] = useState(descriptionn);
  const [screenshot1, setScreenshot1] = useState(screenshot11);
  const [screenshot2, setScreenshot2] = useState(screenshot22);
  const [screenshot3, setScreenshot3] = useState(screenshot33);
  const [date, setDate] = useState(datee);
  const [tools, setTools] = useState(toolss);
  const [error, setError] = useState(false);

  const handleOne = (e) => {
    setScreenshot1(e.target.files[0]);
  };
  const handleTwo = (e) => {
    setScreenshot2(e.target.files[0]);
  };
  const handleThree = (e) => {
    setScreenshot3(e.target.files[0]);
  };
  const postOne = (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", screenshot1, {
      headers: {
        Authorization: "Client-ID 38a2ddeb9886ee5",
      },
    })
      .then((res) => setScreenshot1(res.data.data.link))
      .catch((err) => {
        setError(err);
      });
  };
  const postTwo = (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", screenshot2, {
      headers: {
        Authorization: "Client-ID 38a2ddeb9886ee5",
      },
    })
      .then((res) => setScreenshot2(res.data.data.link))
      .catch((err) => {
        setError(err);
      });
  };
  const postThree = (e) => {
    e.preventDefault();
    Axios.post("https://api.imgur.com/3/image", screenshot3, {
      headers: {
        Authorization: "Client-ID 38a2ddeb9886ee5",
      },
    })
      .then((res) => setScreenshot3(res.data.data.link))
      .catch((err) => {
        setError(err);
      });
  };

  const putWork = async () => {
    try {
      await Axios.put(`${host}/works/${id}`, {
        label,
        url,
        description,
        tools,
        screenshot1,
        screenshot2,
        screenshot3,
        date,
      });
      setModal(!modal);
      getProjects();
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putWork();
  };

  const deleteWork = async () => {
    try {
      await Axios.delete(`${host}/works/${id}`);
      setModal(!modal);
      getProjects();
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <Button className={styles.button} onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{label}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Input
              className={styles.input}
              type="text"
              onChange={(e) => setLabel(e.target.value)}
              value={label}
              placeholder="Nom du projet"
            />
            <Input
              className={styles.input}
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="Url du projet"
            />
            <Input
              className={styles.input}
              type="textarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description du projet"
            />
            <Input
              className={styles.input}
              type="textarea"
              onChange={(e) => setTools(e.target.value)}
              value={tools}
              placeholder="Outils et technologies utilisés"
            />
            <Input
              className={styles.input}
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              placeholder="Date de réalisation 01/01/2020"
            />
            <Label className={styles.input} for="exampleFile1">
              <u>1er screenshot</u>
            </Label>
            <Row>
              <Col xs="8">
                <Input
                  type="file"
                  name="file"
                  id="exampleFile1"
                  files={screenshot1}
                  onChange={handleOne}
                />
              </Col>
              <Col>
                <Button className={styles.button} onClick={postOne}>
                  Télécharger
                </Button>
              </Col>
            </Row>
            <Label className={styles.input} for="exampleFile2">
              <u>2nd screenshot</u>
            </Label>
            <Row>
              <Col xs="8">
                <Input
                  type="file"
                  name="file2"
                  id="exampleFile2"
                  files={screenshot2}
                  onChange={handleTwo}
                />
              </Col>
              <Col>
                <Button className={styles.button} onClick={postTwo}>
                  Télécharger
                </Button>
              </Col>
            </Row>

            <Label className={styles.input} for="exampleFile3">
              <u>3eme screenshot</u>
            </Label>
            <Row>
              <Col xs="8">
                <Input
                  type="file"
                  name="file3"
                  id="exampleFile3"
                  files={screenshot3}
                  onChange={handleThree}
                />
              </Col>
              <Col>
                <Button className={styles.button} onClick={postThree}>
                  Télécharger
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <Button className={styles.buttonSubmit} onClick={deleteWork}>
                  Supprimer
                </Button>
              </Col>
              <Col xs={{ size: 2, offset: 6 }}>
                <Button className={styles.buttonSubmit} type="submit">
                  Modifier
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PutModal;