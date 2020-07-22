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
      ) : change === "deux" ? (
        <div className={styles.pages}>
          <div className={styles.leftPage1}>
            <h1 className={styles.titleProject}>
              {projects[0] && projects[0].label}
            </h1>
            <h2 className={styles.h2}>
              {projects[0] && projects[0].description} using{" "}
              {projects[0] && projects[0].tools}
            </h2>
            <a href={projects[0] && projects[0].url} target="_blank">
              <img
                className={styles.screenshot1}
                src={projects[0] && projects[0].screenshot1}
                alt="screenshot1"
              />
            </a>
          </div>
          <div className={styles.rightPage}>
            <h1 className={styles.titleProject}>
              {projects[1] && projects[1].label}
            </h1>
            <h2 className={styles.h2}>
              {projects[1] && projects[1].description} using{" "}
              {projects[1] && projects[1].tools}
            </h2>
            <a href={projects[1] && projects[1].url} target="_blank">
              <img
                className={styles.screenshot1}
                src={projects[1] && projects[1].screenshot1}
                alt="screenshot1"
              />
            </a>
          </div>
          <img
            className={styles.arrowright}
            src="https://image.flaticon.com/icons/svg/709/709586.svg"
            alt="arrowleft"
            onClick={() => setChange("trois")}
          />
        </div>
      ) : change === "trois" ? (
        <div className={styles.pages}>
          <img
            onClick={() => setChange("deux")}
            className={styles.arrowleft}
            src="https://image.flaticon.com/icons/svg/860/860790.svg"
            alt="arrowright"
          />
          <div className={styles.leftPage}>
            <h1 className={styles.titleProject}>
              {projects[2] && projects[2].label}
            </h1>
            <h2 className={styles.h2}>
              {projects[2] && projects[2].description} using{" "}
              {projects[2] && projects[2].tools}
            </h2>
            <a href={projects[2] && projects[2].url} target="_blank">
              <img
                className={styles.screenshot1}
                src={projects[2] && projects[2].screenshot2}
                alt="screenshot1"
              />
            </a>
          </div>
          <div className={styles.rightPage}>
            <h1 className={styles.titleProject}>
              {projects[3] && projects[3].label}
            </h1>
            <h2 className={styles.h2}>
              {projects[3] && projects[3].description} using{" "}
              {projects[3] && projects[3].tools}
            </h2>
            <a href={projects[3] && projects[3].url} target="_blank">
              <img
                className={styles.screenshot1}
                src={projects[3] && projects[3].screenshot1}
                alt="screenshot1"
              />
            </a>
          </div>
          <img
            className={styles.arrowright}
            src="https://image.flaticon.com/icons/svg/709/709586.svg"
            alt="arrowleft"
            onClick={() => setChange("quatre")}
          />
        </div>
      ) : (
        <div className={styles.pages}>
          <img
            onClick={() => setChange("trois")}
            className={styles.arrowleft}
            src="https://image.flaticon.com/icons/svg/860/860790.svg"
            alt="arrowright"
          />
          <div className={styles.leftPage}>
            <h1 className={styles.titleProject}>
              {projects[4] && projects[4].label}
            </h1>
            <h2 className={styles.h2}>
              {projects[4] && projects[4].description} using{" "}
              {projects[4] && projects[4].tools}
            </h2>
            <a href={projects[4] && projects[4].url} target="_blank">
              <img
                className={styles.screenshot1}
                src={projects[4] && projects[4].screenshot1}
                alt="screenshot1"
              />
            </a>
          </div>
          <div className={styles.rightPage}>
            <h1 className={styles.continued}>To be continued....</h1>
          </div>
        </div>
      )}
    </Row>
  );
}

export default Projects;
