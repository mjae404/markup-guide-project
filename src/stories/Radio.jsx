import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Radio.module.scss';

export const Radio = ({ id, label, reverse, size, disabled, ...props }) => {
    return (
        <div
            className={`${styles['radio-wrap']} ${reverse ? styles.reverse : ''}  ${size ? styles[size] : ''}`}
        >
            <input type="radio" className={`${styles['blind']} ${styles['radio-input']}`} id={id} disabled={disabled} />
            <div className={styles['radio']}></div>
            <label className={styles['radio-label']} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

Radio.defaultProps = {
    id: 'radio',
    reverse: false,
    disabled: false,
    label: '체크박스',
    size: 'medium',
    onClick: undefined,
};
