import { Input } from './Input';

export default {
    title: 'Component/Input',
    component: Input,
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        id: 'inputBasic',
        type: 'text',
        label: 'Basic',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'null',
    },
};

export const Required = {
    args: {
        id: 'inputRequired',
        type: 'text',
        label: 'Required',
        placeholder: '텍스트를 입력해주세요.',
        required: true,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'null',
    },
};

export const Disabled = {
    args: {
        id: 'inputRequired',
        type: 'text',
        label: 'Disabled',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: true,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'null',
    },
};

export const Readonly = {
    args: {
        id: 'inputReadonly',
        type: 'text',
        label: 'Readonly',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: true,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'null',
    },
};

export const NoLabel = {
    args: {
        id: 'inputNoLabel',
        type: 'text',
        label: 'NoLabel',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: false,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'null',
    },
};

export const ButtonSearch = {
    args: {
        id: 'inputButtonSearch',
        type: 'text',
        label: 'ButtonSearch',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'null',
        textDesc: null,
        buttonType: 'search',
        buttonText: '검색'
    },
};


export const Small = {
    args: {
        id: 'inputSmall',
        type: 'text',
        label: 'Small',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        textDescShow: 'null',
        textDesc: null,
        inputSize: 'small',
        buttonType: 'null',
    },
};

export const Large = {
    args: {
        id: 'inputLarge',
        type: 'text',
        label: 'Large',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'large',
        buttonType: 'null',
    },
};

export const TextBasic = {
    args: {
        id: 'inputBasic',
        type: 'text',
        label: 'TextBasic',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'basic',
        textDesc: '일반 설명입니다.',
        buttonType: 'null',
    },
};

export const TextSuccess = {
    args: {
        id: 'inputBasic',
        type: 'text',
        label: 'TextSuccess',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'success',
        textDesc: '성공했을 시 설명입니다.',
        buttonType: 'null',
    },
};


export const TextFail = {
    args: {
        id: 'inputBasic',
        type: 'text',
        label: 'TextFail',
        placeholder: '텍스트를 입력해주세요.',
        required: false,
        disabled: false,
        readonly: false,
        labelShow: true,
        inputSize: 'medium',
        textDescShow: 'fail',
        textDesc: '실패했을 시 설명입니다.',
        buttonType: 'null',
    },
};