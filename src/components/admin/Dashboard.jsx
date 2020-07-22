import React from "react";
import { Row, Col } from "reactstrap";

import styles from "./Dashboard.module.css";
import Works from "./Works";
import Infos from "./Infos";

function Dashboard() {
  return (
    <Row className={styles.pages}>
      <Col xs="4" className={styles.leftPage}>
        <Works />
      </Col>
      <Col xs="4" className={styles.rightPage}>
        <Infos />
      </Col>
    </Row>
  );
}

export default Dashboard;
