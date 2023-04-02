import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.scss';
import styles from '../styles/pages/index.module.scss';

function Index(props) {
  const { menuItem } = props;
  
  return (
        <>
            <h2 className="mu-page-title">목차</h2>
            <div className={styles['mu-index-list-container']}>
                {
                    menuItem.map((menuItem, index) => {
                        return (
                            <div className={styles['mu-index-list-wrap']} key={index}>
                                <div className={styles['mu-index-title']}>
                                    {menuItem.title}
                                </div>
                                <ul className={styles['mu-index-list']}>
                                    {
                                        menuItem.children.map((childMenuItem, index) => {
                                            return (
                                                <li className={styles['mu-index-item']} key={index}>
                                                    <Link to={childMenuItem.href} className={styles['mu-index-link']}>{childMenuItem.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Index;
