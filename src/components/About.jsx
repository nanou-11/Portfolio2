import React, { useState, useEffect } from "react";
import Axios from "axios";

import styles from "./About.module.css";
import NavBar from "./NavBar";

const host = process.env.REACT_APP_HOST;

function About() {
  const [about, setAbout] = useState([]);
  const [error, setError] = useState("");

  const getAbout = async () => {
    try {
      const res = await Axios.get(`${host}/about`);
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
      <NavBar />
      <div className={styles.pages}>
        <div className={styles.leftPage}>
          <h1 className={styles.titleAbout}>About me</h1>
        </div>
        <div className={styles.rightPage}>
          <p className={styles.aboutText}>{about[0] && about[0].about}</p>
        </div>
      </div>
    </>
  );
}

export default About;
