import React from 'react';
import PropTypes from 'prop-types';
import { Table } from './Table';

const tableData = [
    { columnWidths: "33.33%", name: "John", age: 28, email: "john@example.com" },
    { columnWidths: "33.33%", name: "Jane", age: 32, email: "jane@example.com" },
    { columnWidths: "33.33%", name: "Bob", age: 45, email: "bob@example.com" },
];

export default {
    title: 'Component/Table',
    component: Table,
    tags: ['autodocs'],
};
export const Basic = ({ data, border }) => {
    return <Table data={data} border={border} />;
};

Basic.propTypes = {
    data: PropTypes.array.isRequired,
    border: PropTypes.bool.isRequired,
};

Basic.args = {
    data: tableData,
    border: false,
};

export const BorderTable = ({ data, border }) => {
    return <Table data={data} border={border} />;
};

BorderTable.propTypes = {
    data: PropTypes.array.isRequired,
    border: PropTypes.bool.isRequired,
};

BorderTable.args = {
    data: tableData,
    border: true,
};

