import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Select.module.scss';

export const Select = ({ id, label, size, disabled, options, labelShow, ...props }) => {
    return (
        <div
            className={`${styles['select-wrap']} ${size ? styles[size] : ''} ${disabled ? styles['disabled'] : ''}`}
        >
            <label className={`${styles['select-label']} ${labelShow ? '' : styles['blind']}`} htmlFor={id}>{label}</label>
            <select className={styles['select']} name={id} id={id} disabled={disabled}>
                {options.map(option => (
                    <option className={styles['select-option']} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};



Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    labelShow: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Select.defaultProps = {
    id: 'radio',
    reverse: false,
    disabled: false,
    labelShow: true,
    label: '체크박스',
    size: 'medium',
    onClick: undefined,
};
