import React, { useState } from "react";
import styles from "../styles/calculatorContainer.module.css";
import OutputScreen from "./outputScreen";
import InputScreen from "./inputScreen";

const CalculatorContainer = (props) => (
  <div className={styles.container}>
    <InputScreen onPeopleChange={props.onPeopleChange} onBillChange={props.onBillChange} onClick={props.onTipClick} bill={props.bill} tip={props.tip} people={props.people}></InputScreen>
    <OutputScreen onResetClick={props.onResetClick} totalPer={props.totalPer} tipTotalPer={props.tipTotalPer}></OutputScreen>
  </div>
);

export default CalculatorContainer;
