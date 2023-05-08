import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Tooltip.module.scss';

export const Tooltip = ({ label, position, tooltipText, ...props }) => {
    return (
        <>
            <div className={`${styles['tooltip-wrap']} ${styles[position]}`}>
                <span className={styles['tooltip-label']}>{label}</span>
                <p className={styles['tooltip-text']}>{tooltipText}</p>
            </div>
        </>
    );
};

Tooltip.propTypes = {
    label: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    tooltipText: PropTypes.string,
};

Tooltip.defaultProps = {
    label: 'Tooltip',
    position: 'top',
    tooltipText: '툴팁 도움말입니다.'
};
