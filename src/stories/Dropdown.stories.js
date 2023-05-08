import { Dropdown } from './Dropdown';
const myDropdownData = ['항목 1', '항목 2', '항목 3'];

export default {
    title: 'Component/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        dropdownData: myDropdownData
    },
};