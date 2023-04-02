import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/style.scss';

function BasicIndex() {
    return (
        <>
            <h2 className="mu-page-title">목차</h2>
            <nav className="mu-page-section-nav">
                <h3 className="mu-page-section-nav-title">기본 정책</h3>
                <ol className="mu-alt mu-page-section-nav-list">
                    <li className="mu-alt-item">
                        <Link to="/basic/guide#basic-environment">프로젝트 환경</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/basic/guide#basic-file-rule">파일 / 폴더 규칙</Link>
                    </li>
                    <li className="mu-alt-item">
                        <Link to="/basic/guide#basic-process">프로젝트 진행 프로세스</Link>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default BasicIndex;