import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from '../../styles/components/layout/MarkupHeader.module.scss';

function MarkupHeader(props) {
    const { menuItem } = props;
    const [ headerMenu, setHeaderMenu ] = useState(false);
    const [ activeIndex, setActiveIndex ] = useState(null);
    const location = useLocation();

    useEffect(() => {
      setHeaderMenu(false);
      document.body.style.overflow = 'auto';
    }, [location]);

    const handleShowMobileMenu = () => {
        setHeaderMenu(true);
        document.body.style.overflow = 'hidden';
    };
      
    const handleHideMobileMenu = () => {
        setHeaderMenu(false);
        document.body.style.overflow = 'auto';
    };

    const handleShowMobileSubMenu = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <header className={styles['mu-header']}>
            <div className={styles['mu-header-inner']}>
                <div className={styles['mu-header-title-wrap']}>
                    <h1>
                        <NavLink to="/" className={styles['mu-header-title']}><strong>프로젝트</strong> 웹퍼블리싱 가이드</NavLink>
                    </h1>
                </div>
                <nav className={`${styles['mu-header-nav']} ${styles['mu-header-nav-pc']}`}>
                    <ul className={styles['mu-header-nav-list']}>
                    {
                        menuItem.map((menuItem, index) => {
                            return (
                                <li className={styles['mu-header-nav-item']} key={index}>
                                    <NavLink to={menuItem.titleHref} className={({ isActive }) => (isActive ? `${styles['mu-header-nav-link']} ${styles['active']}` : `${styles['mu-header-nav-link']}`)}>{menuItem.title}</NavLink>
                                </li>
                            )
                        })
                    }
                    </ul>
                </nav>
                <nav className={`${styles['mu-header-nav']} ${styles['mu-header-nav-mobile']}`}>
                    <button type="button" className={styles['mu-header-nav-button']} onClick={handleShowMobileMenu}>
                        <span className="blind">메뉴</span>
                    </button>
                    <div className={`${styles["mu-header-nav-mobile-list-container"]} ${headerMenu ? styles.active : ''}`}>
                            <ul className={styles['mu-header-nav-mobile-list']}>
                            {
                                menuItem.map((menuItem, index) => {
                                    return (
                                        <li className={styles['mu-header-nav-mobile-item']} key={index}>
                                            <button type="button"
                                                className={`${styles['mu-header-nav-mobile-button']} ${activeIndex === index ? styles.active : ''}`}
                                                onClick={() => handleShowMobileSubMenu(index)}
                                            >
                                                {menuItem.title}
                                            </button>
                                            <ul className={`${styles['mu-header-nav-mobile-sub-list']} ${activeIndex === index ? styles.active : ''}`}>
                                                {
                                                    menuItem.children.map((childMenuItem, index) => {
                                                        return (
                                                            <li className={styles['mu-header-nav-mobile-sub-item']} key={index}>
                                                                <Link to={childMenuItem.href} className={styles['mu-header-nav-mobile-sub-link']}>{childMenuItem.title}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                            <button type="button" className={styles['mu-header-nav-button-close']} onClick={handleHideMobileMenu}>
                                <span className="blind">메뉴 닫기</span>
                            </button>
                        </div>
                </nav>
            </div>
        </header>
    );
}

export default MarkupHeader;