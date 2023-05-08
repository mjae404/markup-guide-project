import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Table.module.scss';

export const Table = ({ data, border, ...props }) => {
    const columns = Object.keys(data[0]);
    const columnWidths = data.map((item) => item.columnWidths);
    const datas = data.map(({ columnWidths, ...rest }) => rest);

    return (
        <div className={`${styles['table-wrap']} ${border ? styles['border'] : ''}`}>
            <table className={styles['table']}>
                <colgroup>
                    {columnWidths.map((width, index) => (
                        <col key={index} style={{ width }} />
                    ))}
                </colgroup>
                <thead>
                <tr>
                    {columns.slice(1).map((column, index) => (
                        <th key={index} className={styles['table-th']}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {datas.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index} className={styles['table-td']}>{value}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
    border: PropTypes.bool,
    onClick: PropTypes.func,
};

Table.defaultProps = {
    data: [],
    border: false,
    onClick: undefined,
};
