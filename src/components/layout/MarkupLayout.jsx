import React from "react";
import { Outlet } from 'react-router-dom'
import styles from '../../styles/components/layout/MarkupLayout.module.scss';

function MarkupLayout() {
    return (
        <>
        <div className={styles['mu-main-inner']}>
            <Outlet />
        </div>
        </>
    );
}

export default MarkupLayout;