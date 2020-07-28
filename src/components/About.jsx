import React, { useState, useEffect } from "react";
import Axios from "axios";

import styles from "./About.module.css";
import NavBar from "./NavBar";
import { useHistory } from "react-router";

const host = process.env.REACT_APP_HOST;

function About() {
  const [about, setAbout] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleProjects = () => {
    history.push("/projects");
  };

  const getAbout = async () => {
    try {
      const res = await Axios.get(`${host}about`);
      setAbout(res.data);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    getAbout();
  }, []);
  return (
    <>
      {error ? "" : ""}
      <NavBar />
      <div className={styles.pages}>
        <img
          onClick={handleHome}
          className={styles.arrowleft}
          src="https://image.flaticon.com/icons/svg/860/860790.svg"
          alt="arrowright"
        />
        <div className={styles.leftPage}>
          <h1 className={styles.titleAbout}>About me</h1>
        </div>
        <div className={styles.rightPage}>
          <p className={styles.aboutText}>{about[0] && about[0].about}</p>
        </div>
        <img
          className={styles.arrowright}
          src="https://image.flaticon.com/icons/svg/709/709586.svg"
          alt="arrowleft"
          onClick={handleProjects}
        />
      </div>
    </>
  );
}

export default About;
