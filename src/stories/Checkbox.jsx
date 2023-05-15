import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Checkbox.module.scss';

export const Checkbox = ({ id, label, reverse, size, disabled, ...props }) => {
    return (
        <div
            className={`${styles['checkbox-wrap']} ${reverse ? styles.reverse : ''}  ${size ? styles[size] : ''}`}
        >
            <input
                type="checkbox"
                className={`${styles['blind']} ${styles['checkbox-input']}`}
                id={id}
                disabled={disabled}
            />
            <label className={styles['checkbox-label']} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

Checkbox.defaultProps = {
    id: 'checkbox',
    reverse: false,
    disabled: false,
    label: '체크박스',
    size: 'medium',
    onClick: undefined,
};
