import React, { useState, useEffect } from "react";
import { Modal, ModalBody, NavItem } from "reactstrap";
import Axios from "axios";

import styles from "./CV.module.css";

const host = process.env.REACT_APP_HOST;

function CV() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [about, setAbout] = useState();
  const [error, setError] = useState(false);

  const getAbout = async () => {
    try {
      const res = await Axios.get(`${host}/about`);
      setAbout(res.data[0]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div>
      <NavItem color="danger" onClick={toggle} className={styles.navItem}>
        CV
      </NavItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          {error ? <h1>Impossible de récupérer le cv</h1> : ""}
          <img src={about && about.cv} alt="cv" className={styles.cv} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CV;
