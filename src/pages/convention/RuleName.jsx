import React, { useEffect } from "react";
function RuleName() {
    function scrollToHash() {
        const id = window.location.hash.substr(1);

        if(id) {
            const anchor = document.getElementById(id);

            if(anchor) {
                anchor.scrollIntoView();
            }
        }
    }
    useEffect(() => {
        scrollToHash();
    }, []);

    return (
        <>
            <h2 className="mu-page-title">네임 규칙</h2>
            <section className="mu-page-section">
                <h3 id="rule-case" className="mu-page-section-title">표기법</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col style={{ width: "20%"}} />
                            <col style={{ width: "20%"}} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>종류</th>
                                <th>구분</th>
                                <th>번호</th>
                                <th>예시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">ID Selector</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">스네이크 표기법</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">한 자리수 (생략 가능, 2, 3)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">error_message, control_center, control_center2</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">Class Selector</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">케밥 표기법</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">한 자리수 (생략 가능, 2, 3)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">button-primary, button-outline, button-outline2</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">Image</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">스네이크 표기법</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">두 자리수 (01, 02, 03)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">button_icon01.svg, button_icon02.svg, button_icon03.svg</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">파일 및 폴더</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">스네이크 표기법</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">두 자리수 (01, 02, 03)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">admin_page</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-id" className="mu-page-section-title">ID 선택자</h3>
                <ul className="mu-unordered">
                    <li>ID는 개발을 위해서만 사용하고, 퍼블리싱 작업시에는 앵커 및 label 등의 연결하는 상황 등을 제외하고는 일반적으로 사용하지 않으므로 정리하여 기재하지 않는다.</li>
                </ul>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-class" className="mu-page-section-title">class 선택자</h3>
                <ul className="mu-unordered">
                    <li>대표하는 프로젝트명을 축약하여 프리픽스(prefix)로 사용한다.</li>
                    <li>단어의 경우 직관적으로 알아볼 수 있도록 가능한 축약하지 않는다.</li>
                    <li>체인 선택자의 개수는 3개까지 권장한다.</li>
                    <li>클래스 예약어는 상황에 맞게 선택적으로 참고한다.</li>
                </ul>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">레이아웃</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{ width: "20%"}} />
                                <col style={{ width: "25%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>예약어</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">헤더</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">header-</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">헤더 영역</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">사이드</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aside-</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">사이드 영역</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메인</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">main-</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">메인 영역</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">푸터</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">footer-</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">푸터 영역</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">영역</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{ width: "20%"}} />
                                <col style={{ width: "25%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>예약어</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">전체 영역</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-container</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">컨텐츠의 전체 영역</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">바깥 영역</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-wrap</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">UI 영역 단위로 그룹화</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">안쪽 영역</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-inner</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">내부 영역</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">구조</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{ width: "20%"}} />
                                <col style={{ width: "25%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>예약어</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">머리글 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-header</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 목차 포함</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">본문 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-contents</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 본문</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">바닥글 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-footer</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 바닥글</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">제목 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-title</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 제목</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">본문 텍스트 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-text</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 본문 텍스트</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">본문 텍스트 설명 영역</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-desc</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">전체 영역의 본문 텍스트 설명 영역</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">네비게이션</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-nav</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">탐색 역할을 갖는 범위의 메뉴</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">메뉴</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-menu</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">탐색 역할이 없는 선택목록 메뉴</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">리스트</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-list</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell"><code className="mu-code-label">ul</code>, <code className="mu-code-label">ol</code>에 해당하는 반복되는 목록그룹</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">항목</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-item</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">리스트 항목</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="mu-table-cell">링크</div>
                                    </td>
                                    <td className="mu-code-font">
                                        <div className="mu-table-cell">-link</div>
                                    </td>
                                    <td>
                                        <div className="mu-table-cell">링크 항목</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">크기 단위</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{ width: "20%"}} />
                                <col style={{ width: "25%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>예약어</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">더 크게</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-xl</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">크게</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-lg</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">보통</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-md</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">작게</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-sm</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">더 작게</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-xs</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">꾸미기</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{ width: "20%"}} />
                                <col style={{ width: "25%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>예약어</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">아웃라인</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-outline</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">언더라인</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">-underline</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </>
    );
}

export default RuleName;