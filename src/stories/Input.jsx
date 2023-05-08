import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Input.module.scss';

export const Input = ({ id, label, labelShow, labelColor, type, placeholder, required, disabled, readonly, inputSize, buttonType, buttonText, textDescShow, textDesc, ...props }) => {
    return (
        <div className={`${styles['input-container']} ${inputSize !== 'medium' ? styles[inputSize] : ''}`} {...props}>
            <label
                htmlFor={id}
                className={`${styles['input-label']}
                ${labelColor ? styles[labelColor] : ''}
                ${labelShow ? '' : styles['blind']}`}
            >
                {label}
                {
                    required &&
                    <span className={styles['input-required-point']}>*</span>
                }
            </label>
            <div className={styles['input-wrap']}>
                <input
                    id={id}
                    className={`${styles['input']} ${buttonType !== 'null' && styles['icon']}`}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    readOnly={readonly}
                />
                {
                    buttonType !== 'null' &&
                    <button type="button" className={`${styles['input-button']} ${styles[buttonType]}`}>
                        <span className={styles['blind']}>{buttonText}</span>
                    </button>
                }
            </div>
            {
                textDescShow !== 'null' &&
                <p className={`${styles['input-text']} ${styles[textDescShow]}`}>
                    {textDesc}
                </p>
            }
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    placeholder: PropTypes.string,
    inputSize: PropTypes.oneOf(['small', 'medium', 'large']),
    buttonType: PropTypes.oneOf(['null', 'search']),
    buttonText: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelShow: PropTypes.bool,
    textDescShow: PropTypes.oneOf(['null', 'basic', 'success', 'fail']),
    textDesc: PropTypes.string,
    onClick: PropTypes.func,
};

Input.defaultProps = {
    id: null,
    required: false,
    disabled: false,
    readonly: false,
    labelShow: true,
    placeholder: null,
    inputSize: 'medium',
    buttonType: null,
    buttonText: null,
    textDescShow: 'null',
    textDesc: '',
    onClick: undefined,
};
