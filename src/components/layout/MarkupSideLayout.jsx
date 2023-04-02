import React from "react";
import { Outlet } from 'react-router-dom'
import styles from '../../styles/components/layout/MarkupLayout.module.scss';
import MarkupAside from "./MarkupAside";

function MarkupSideLayout(props) {
    return (
        <>
            <MarkupAside menuItem={props} />
            <div className={styles['mu-main-inner']}>
                <Outlet />
            </div>
        </>
    );
}

MarkupSideLayout.defaultProps = {
    menuItem: []
};

export default MarkupSideLayout;