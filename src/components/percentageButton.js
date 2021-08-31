import React from "react";
import styles from "../styles/percentageButton.module.css";

const PercentageButton = (props) => {

  const setActiveStyling = props.isActive ? `${styles.activeButton}` : `${styles.unactiveButton}`;

  return (
  <div
    onClick={(e) => {props.onClick(e); props.onClickTip(props.id); }}
    value={props.value}
    className={`${setActiveStyling} ${styles.percentageButton}`}
  >
    <div>{props.textValue}</div>
  </div>
);
  }

export default PercentageButton;
