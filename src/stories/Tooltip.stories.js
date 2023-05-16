import { Tooltip } from './Tooltip';

export default {
    title: 'Component/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        label: '도움말',
        position: 'top',
        tooltipText: '툴팁 도움말입니다.'
    },
};

export const Right = {
    args: {
        label: '도움말',
        position: 'right',
        tooltipText: '툴팁 도움말입니다.'
    },
};

export const Bottom = {
    args: {
        label: '도움말',
        position: 'bottom',
        tooltipText: '툴팁 도움말입니다.'
    },
};

export const Left = {
    args: {
        label: '도움말',
        position: 'left',
        tooltipText: '툴팁 도움말입니다.'
    },
};