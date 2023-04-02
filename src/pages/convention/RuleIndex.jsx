import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/style.scss';

function RuleIndex() {
    return (
        <>
            <h2 className="mu-page-title">목차</h2>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">표준 규칙</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-standard#rule-basic">기본문서</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-standard#rule-semantic">Semantic Markup</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-standard#rule-symbol">특수기호 Entity name</Link>
                    </li>
                </ol>
            </nav>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">코드 규칙</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-code#rule-html">HTML 규칙</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-code#rule-css">CSS 규칙</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-code#rule-scss">SCSS 규칙</Link>
                    </li>
                </ol>
            </nav>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">네임 규칙</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-name#rule-case">표기법</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-name#rule-id">ID 선택자</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/convention/rule-name#rule-class">class 선택자</Link>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default RuleIndex;