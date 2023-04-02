import React from "react";
import {Link} from "react-router-dom";

function AccessibilityIndex() {
    return (
        <>
            <h2 className="mu-page-title">목차</h2>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">웹접근성 개요</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/accessibility/overview#overview-definition">웹접근성 정의</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/overview#overview-type">웹접근성 이용자 유형</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/overview#overview-site">웹접근성 관련 사이트</Link>
                    </li>
                </ol>
            </nav>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">WAI-ARIA</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/accessibility/wai-aria#wai-aria-roles">Aria Roles</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/wai-aria#wai-aria-properties">Aria Properties</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/wai-aria#wai-aria-states">Aria States</Link>
                    </li>
                </ol>
            </nav>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">역할별 체크리스트</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/accessibility/checklist#checklist-planner">기획자</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/checklist#checklist-designer">디자이너</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/checklist#checklist-markup">퍼블리셔</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/accessibility/checklist#checklist-developer">개발자</Link>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default AccessibilityIndex;