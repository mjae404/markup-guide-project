import { Radio } from './Radio';

export default {
    title: 'Component/Radio',
    component: Radio,
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        id: 'radio',
        reverse: false,
        disabled: false,
        size: 'medium',
        label: 'Basic',
    },
};

export const Reverse = {
    args: {
        id: 'Reverse',
        reverse: true,
        disabled: false,
        size: 'medium',
        label: 'Reverse',
    },
};
export const Disabled = {
    args: {
        id: 'Disabled',
        reverse: false,
        disabled: true,
        size: 'medium',
        label: 'Disabled',
    },
};

export const Small = {
    args: {
        id: 'Small',
        reverse: false,
        disabled: false,
        size: 'small',
        label: 'Small',
    },
};

export const Large = {
    args: {
        id: 'Large',
        reverse: false,
        disabled: false,
        size: 'large',
        label: 'Large',
    },
};