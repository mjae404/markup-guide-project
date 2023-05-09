import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MarkupHeader from "./components/layout/MarkupHeader";
import MarkupLayout from "./components/layout/MarkupLayout";
import MarkupSideLayout from "./components/layout/MarkupSideLayout";
import MarkupFooter from "./components/layout/MarkupFooter";
import Index from './pages/Index'

import BasicIndex from './pages/basic/BasicIndex';
import BasicGuide from './pages/basic/BasicGuide';

import RuleIndex from './pages/convention/RuleIndex';
import RuleStandard from './pages/convention/RuleStandard';
import RuleCode from './pages/convention/RuleCode';
import RuleName from './pages/convention/RuleName';

import LibraryIndex from './pages/library/LibraryIndex';

import AccessibilityIndex from './pages/accessibility/AccessibilityIndex';
import AccessibilityOverview from './pages/accessibility/AccessibilityOverview';
import AccessibilityWaiAria from './pages/accessibility/AccessibilityWaiAria';
import AccessibilityCheckList from './pages/accessibility/AccessibilityCheckList';

import {basicMenu, conventionMenu, libraryMenu, accessibilityMenu} from './assets/datas/headerMenu.js';

import styles from './styles/components/layout/MarkupLayout.module.scss';

function App() {
    const menuItems = [basicMenu, conventionMenu, libraryMenu, accessibilityMenu];
    
    return (
        <BrowserRouter>
            <MarkupHeader menuItem={menuItems} />
            <main className={styles['mu-main']}>
                <Routes>
                    <Route path="/" element={<MarkupLayout />}>
                        <Route index element={<Index menuItem={menuItems}/>} />
                    </Route>
                    <Route path="basic/*" element={<MarkupSideLayout menuItem={menuItems[0]} />}>
                        <Route index element={<BasicIndex />} />
                        <Route path="guide" element={<BasicGuide />} />
                    </Route>
                    <Route path="convention/*" element={<MarkupSideLayout menuItem={menuItems[1]} />}>
                        <Route index element={<RuleIndex />} />
                        <Route path="rule-standard" element={<RuleStandard />} />
                        <Route path="rule-code" element={<RuleCode />} />
                        <Route path="rule-name" element={<RuleName />} />
                    </Route>
                    <Route path="library/*" element={<MarkupLayout />}>
                        <Route index element={<LibraryIndex />} />
                    </Route>
                    <Route path="accessibility/*" element={<MarkupSideLayout menuItem={menuItems[3]} />}>
                        <Route index element={<AccessibilityIndex />} />
                        <Route path="overview" element={<AccessibilityOverview />} />
                        <Route path="wai-aria" element={<AccessibilityWaiAria />} />
                        <Route path="checklist" element={<AccessibilityCheckList />} />
                    </Route>
                </Routes>
            </main>
            <MarkupFooter />
        </BrowserRouter>
    );
}

export default App;
