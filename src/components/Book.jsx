import React from "react";
import styles from "./Book.module.css";

function Book() {
  return (
    <div className={styles.pages}>
      <div className={styles.leftPage}></div>
      <div className={styles.rightPage}></div>
    </div>
  );
}

export default Book;
