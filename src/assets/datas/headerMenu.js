const basicMenu = {
    title: '기본 정책',
    titleHref: '/basic',
    children: [
        {
            title: '기본 정책',
            href: '/basic/guide'
        }
    ]
}    


const conventionMenu = {
    title: '규칙 가이드',
    titleHref: '/convention',
    children: [
        {
            title: '표준 규칙',
            href: '/convention/rule-standard'
        },
        {
            title: '코드 규칙',
            href: '/convention/rule-code'
        },
        {
            title: '네임 규칙',
            href: '/convention/rule-name'
        }
    ]
}

const libraryMenu = {
    title: '라이브러리',
    titleHref: '/library',
    children: [
        {
            title: '라이브러리',
            href: '/library'
        }
    ]
}


const accessibilityMenu = {
    title: '웹접근성',
    titleHref: '/accessibility',
    children: [
        {
            title: '웹접근성 개요',
            href: '/accessibility/overview'
        },
        {
            title: 'WAI-ARIA',
            href: '/accessibility/wai-aria'
        },
        {
            title: '역할별 체크리스트',
            href: '/accessibility/checklist'
        }
    ]
}


export {
    basicMenu, conventionMenu, libraryMenu, accessibilityMenu
}