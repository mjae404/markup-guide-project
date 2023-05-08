import React from 'react';
import { Select } from './Select';

export default {
    title: 'Component/Select',
    component: Select,
    tags: ['autodocs'],
};

const Template = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    id: 'select',
    disabled: false,
    size: 'medium',
    labelShow: true,
    label: 'Basic',
    options: [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ],
};

export const noLabel = Template.bind({});
noLabel.args = {
    id: 'noLabel',
    disabled: false,
    size: 'medium',
    labelShow: false,
    label: 'noLabel',
    options: [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ],
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: 'Disabled',
    disabled: true,
    size: 'medium',
    labelShow: true,
    label: 'Disabled',
    options: [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ],
};

export const Small = Template.bind({});
Small.args = {
    id: 'Small',
    disabled: false,
    size: 'small',
    labelShow: true,
    label: 'Small',
    options: [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ],
};

export const Large = Template.bind({});
Large.args = {
    id: 'Large',
    disabled: false,
    size: 'large',
    labelShow: true,
    label: 'Large',
    options: [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
    ],
};