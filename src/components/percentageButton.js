import React, { useState } from "react";
import styles from "../styles/percentageButton.module.css";

const PercentageButton = (props) => (
  <div onClick={props.onClick} value={props.value} className={styles.percentageButton}>{props.textValue}</div>
);

export default PercentageButton;
