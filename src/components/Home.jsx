import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import { Row } from "reactstrap";
import NavBar from "./NavBar";

import styles from "./Home.module.css";

import tache from "./images/encre.png";
import { useHistory } from "react-router";

function Home() {
  const [change, setChange] = useState(true);
  const history = useHistory();

  const handleAbout = () => {
    history.push("/about");
  };

  useEffect(() => {
    setTimeout(() => setChange("true"), 2000);
  }, []);

  return (
    <>
      <NavBar />
      <Row className="ml-0 mr-0">
        {change === true ? (
          <div className={styles.couv}>
            <h1 className={styles.h1}>Welcome to my portfolio !</h1>
          </div>
        ) : (
          <div className={styles.pages}>
            <div className={styles.leftPage}>
              <Typing>
                <h1 className={styles.h1left}>Hello, I'm Anaïs.</h1>
              </Typing>
              <Typing startDelay="2000">
                <img src={tache} alt="tache" className={styles.encre} />
              </Typing>
            </div>
            <div className={styles.rightPage}>
              <Typing startDelay="2500">
                <h1 className={styles.h1right}>
                  And I'm web developper Junior.
                </h1>
              </Typing>
            </div>
            <img
              className={styles.arrowright}
              src="https://image.flaticon.com/icons/svg/709/709586.svg"
              alt="arrowleft"
              onClick={handleAbout}
            />
          </div>
        )}
      </Row>
    </>
  );
}

export default Home;
