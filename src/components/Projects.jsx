import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";
import Axios from "axios";
import { Col, Row, Button } from "reactstrap";
import Iframe from "react-iframe";

const host = process.env.REACT_APP_HOST;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [change, setChange] = useState("un");

  const getProjects = async () => {
    try {
      const res = await Axios.get(`${host}/works`);
      setProjects(res.data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getProjects();
    setTimeout(() => setChange("deux"), 2500);
  }, []);

  return (
    <Row>
      {change === "un" ? (
        <div className={styles.couv}>
          <h1 className={styles.h1}>My projects</h1>
        </div>
      ) : (
        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <h1 className={styles.titleProject}>{projects[0] && projects[0].label}</h1>
            <h2 className={styles.h2}>
              {projects[0] && projects[0].description} using {projects[0] && projects[0].tools}
            </h2>
            <img
              className={styles.screenshot1}
              src={projects[0] && projects[0].screenshot1}
              alt="screenshot1"
            />
          </div>
          <div className={styles.rightPage}>
            <h1 className={styles.titleProject}>{projects[1] && projects[1].label}</h1>
            <h2 className={styles.h2}>
              {projects[1] && projects[1].description} using {projects[1] && projects[1].tools}
            </h2>
            <img
              className={styles.screenshot1}
              src={projects[1] && projects[1].screenshot1}
              alt="screenshot1"
            />
          </div>
        </div>
      )}
    </Row>
  );
}

export default Projects;
