import { Button } from './Button';

export default {
    title: 'Component/Button',
    component: Button,
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: false,
        size: 'medium',
        label: 'Basic',
    },
};

export const small = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: false,
        size: 'small',
        label: 'small',
    },
};

export const large = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: false,
        size: 'large',
        label: 'large',
    },
};

export const IconLeft = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: false,
        size: 'medium',
        icon: 'upload',
        iconPosition: 'left',
        label: 'IconLeft',
    },
};

export const IconRight = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: false,
        size: 'medium',
        icon: 'download',
        iconPosition: 'right',
        label: 'IconRight',
    },
};

export const Disabled = {
    args: {
        type: 'button',
        disabled: true,
        primary: false,
        block: false,
        size: 'medium',
        label: 'Disabled',
    },
};


export const Primary = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: false,
        size: 'medium',
        label: 'Primary',
    },
};

export const PrimarySmall = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: false,
        size: 'small',
        label: 'PrimarySmall',
    },
};

export const PrimaryLarge = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: false,
        size: 'large',
        label: 'PrimaryLarge',
    },
};


export const PrimaryIconLeft = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: false,
        size: 'medium',
        icon: 'upload',
        iconPosition: 'left',
        label: 'PrimaryIconLeft',
    },
};

export const PrimaryIconRight = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: false,
        size: 'medium',
        icon: 'download',
        iconPosition: 'right',
        label: 'PrimaryIconRight',
    },
};

export const PrimaryDisabled = {
    args: {
        type: 'button',
        disabled: true,
        primary: true,
        block: false,
        size: 'medium',
        label: 'PrimaryDisabled',
    },
};

export const Block = {
    args: {
        type: 'button',
        disabled: false,
        primary: false,
        block: true,
        size: 'medium',
        label: 'Block',
    },
};

export const PrimaryBlock = {
    args: {
        type: 'button',
        disabled: false,
        primary: true,
        block: true,
        size: 'medium',
        label: 'PrimaryBlock',
    },
};