import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Button.module.scss';

export const Button = ({ id, label, primary, type, disabled, readonly, size, block, icon, iconPosition, ...props }) => {
    return (
        <button
            type={type}
            className={`${styles['button']}
                ${size !== 'medium' ? styles[size] : ''}
                ${primary ? styles['primary'] : ''}
                ${block ? styles['block'] : ''}
                ${icon ? styles['icon'] : ''}
                ${icon ? styles[icon] : ''}
                ${iconPosition ? styles[iconPosition] : ''}
            `}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    primary: PropTypes.bool,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['null', 'write', 'upload', 'download', 'send', 'required']),
    iconPosition: PropTypes.oneOf(['null', 'left', 'right']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    primary: false,
    block: false,
    size: 'medium',
    label: '버튼',
    icon: 'null',
    iconPosition: 'null',
    onClick: undefined,
};
