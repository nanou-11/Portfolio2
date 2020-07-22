import React from "react";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.pages}>
      <div className={styles.leftPage}>
        <h1 className={styles.titleAbout}>About me</h1>
      </div>
      <div className={styles.rightPage}>
        <p className={styles.aboutText}>
          After 10 years in mass distribution, first as an employee and then as
          a team manager, I took on a challenge: to change my life and do
          something that I like and that thrives me on. I learned to code at
          Wild Code School Biarritz. Almost all of my training took place in
          remote, so I am totally comfortable with this mode of work. More
          motivated than ever, I'm ready to leave my own mark in the web world.
        </p>
      </div>
    </div>
  );
}

export default About;
