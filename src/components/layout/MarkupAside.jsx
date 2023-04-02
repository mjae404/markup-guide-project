import React from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/layout/MarkupAside.module.scss';

function MarkupAside(props) {
  const menuItems = Object.values(props.menuItem);

  return (
    <aside className={`${styles['mu-aside']}`}>
      <nav className={styles['mu-aside-nav']}>
          <ul className={styles['mu-aside-nav-list']}>
            {menuItems[0].children.map((menuItem, index) => (
              <li className={styles['mu-aside-nav-item']} key={`child_${index}`}>
                <NavLink to={menuItem.href} className={({ isActive }) => (isActive ? `${styles['mu-aside-nav-link']} ${styles['active']}` : `${styles['mu-aside-nav-link']}`)}>{menuItem.title}</NavLink>
              </li>
            ))}
          </ul>
      </nav>
    </aside>
  );
}

MarkupAside.defaultProps = {
  menuItem: {
    children: []
  }
};

export default MarkupAside;
