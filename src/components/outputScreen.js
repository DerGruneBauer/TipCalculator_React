import React from 'react';
import styles from '../styles/outputScreen.module.css';

const OutputScreen = (props) => 
    <div className={styles.outputScreen}>
        <div className={styles.totalsContainer}>
            <div className={styles.totals}>
                <div className={styles.totalsText}>
                    Tip Amount<br/><span>/ person</span>
                </div>
                <div className={styles.totalCost} placeholder="0">{isNaN(props.tipTotalPer)?"0":props.tipTotalPer}</div>
            </div>
            <div className={styles.totals}>
                <div className={styles.totalsText}>
                    Total<br/><span>/ person</span>
                </div>
                <div className={styles.totalCost}>{isNaN(props.totalPer)?"0":props.totalPer}</div>
            </div>
        </div>
        <button onClick={props.onResetClick} className={styles.resetButton}>RESET</button>
    </div>

export default OutputScreen;