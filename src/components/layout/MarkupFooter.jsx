import React from "react";
import styles from '../../styles/components/layout/MarkupFooter.module.scss'

function MarkupFooter() {
    return (
        <footer className={styles['mu-footer']}>
            <div className={styles['mu-footer-inner']}>
                <p className={styles['mu-footer-text']}>담당자 : 김민지</p>
            </div>
        </footer>
    );
}

export default MarkupFooter;