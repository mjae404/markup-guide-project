import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Dropdown.module.scss';

export const Dropdown = ({ dropdownData, ...props }) => {
    const [selectedItem, setSelectedItem] = useState('선택해주세요.');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsDropdownOpen(false);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className={styles['dropdown-wrap']} ref={dropdownRef}>
                <button type="button" className={styles['dropdown-selected']} onClick={handleDropdownClick}>
                    {selectedItem}
                </button>
                {isDropdownOpen && (
                    <ul className={styles['dropdown-list']}>
                        {dropdownData.map((item, index) => (
                            <li key={index} className={styles['dropdown-item']}>
                                <button type="button" className={styles['dropdown-button']} onClick={() => handleItemClick(item)}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

Dropdown.propTypes = {
    dropdownData: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
