import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";
import Axios from "axios";
import { Col, Row, Button, Tooltip } from "reactstrap";
import Iframe from "react-iframe";
import NavBar from "./NavBar";
import { useHistory } from "react-router";

const host = process.env.REACT_APP_HOST;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [change, setChange] = useState("un");
  const history = useHistory();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);

  const [tooltipOpen4, setTooltipOpen4] = useState(false);
  const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

  const [tooltipOpen5, setTooltipOpen5] = useState(false);
  const toggle5 = () => setTooltipOpen5(!tooltipOpen5);

  const handleContact = () => {
    history.push("/contact");
  };

  const handleAbout = () => {
    history.push("/about");
  };
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
    <>
      <NavBar />
      <Row className="ml-0 mr-0">
        {change === "un" ? (
          <div className={styles.pages}>
            <img
              onClick={handleAbout}
              className={styles.arrowleft}
              src="https://image.flaticon.com/icons/svg/860/860790.svg"
              alt="arrowright"
            />
            <div className={styles.leftPage}>
              <h1 className={styles.h1}>My projects</h1>
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
                  src={projects[1] && projects[1].screenshot3}
                  alt="screenshot1"
                  id="Tooltip2"
                />
              </a>
              <Tooltip
                placement="bottom"
                isOpen={tooltipOpen2}
                target="Tooltip2"
                toggle={toggle2}
              >
                View site
              </Tooltip>
            </div>
            <img
              className={styles.arrowright}
              src="https://image.flaticon.com/icons/svg/709/709586.svg"
              alt="arrowleft"
              onClick={() => setChange("deux")}
            />
          </div>
        ) : change === "deux" ? (
          <div className={styles.pages}>
            <img
              onClick={() => setChange("un")}
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
                  id="Tooltip5"
                />
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen5}
                  target="Tooltip5"
                  toggle={toggle5}
                >
                  View site
                </Tooltip>
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
                  id="Tooltip3"
                />
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen3}
                  target="Tooltip3"
                  toggle={toggle3}
                >
                  View site
                </Tooltip>
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
                  id="Tooltip4"
                />
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen4}
                  target="Tooltip4"
                  toggle={toggle4}
                >
                  View site
                </Tooltip>
              </a>
            </div>
            <div className={styles.rightPage}>
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
                  id="Tooltip1"
                />
                <Tooltip
                  placement="bottom"
                  isOpen={tooltipOpen}
                  target="Tooltip1"
                  toggle={toggle}
                >
                  View site
                </Tooltip>
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
              <h1 className={styles.continued}>To be continued...</h1>
            </div>
            <div className={styles.rightPage}></div>
            <img
              className={styles.arrowright}
              src="https://image.flaticon.com/icons/svg/709/709586.svg"
              alt="arrowleft"
              onClick={handleContact}
            />
          </div>
        )}
      </Row>
    </>
  );
}

export default Projects;
