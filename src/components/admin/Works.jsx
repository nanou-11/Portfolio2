import React, { useState, useEffect } from "react";
import Axios from "axios";

import AddWork from "./AddWork";
import styles from "./Works.module.css";
import { Col, Row } from "reactstrap";
import PutModal from "./PutModal";

const host = process.env.REACT_APP_HOST;

function Works() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  const getProjects = async () => {
    try {
      const res = await Axios.get(`${host}/works`);
      console.log(res.data);
      setProjects(res.data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>Projets</h1>
      {projects.map((item) => (
        <Row>
          <Col xs="8">
            <h3 className={styles.h3}>{item.label}</h3>
          </Col>
          <Col>
            <PutModal
              id={item.id}
              urll={item.url}
              labell={item.label}
              descriptionn={item.description}
              toolss={item.tools}
              screenshot11={item.screenshot1}
              screenshot22={item.screenshot2}
              screenshot33={item.screenshot3}
              datee={item.date}
              getProjects={getProjects}
            />
          </Col>
        </Row>
      ))}
      <AddWork getProjects={getProjects} />
    </div>
  );
}

export default Works;
