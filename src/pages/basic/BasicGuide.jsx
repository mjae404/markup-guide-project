import React, { useEffect } from "react";
import '../../styles/style.scss';

function BasicGuide() {
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
    },[]);

    return (
        <>
            <h2 className="mu-page-title">기본 정책</h2>
            <section className="mu-page-section">
                <h3 id="basic-environment" className="mu-page-section-title">프로젝트 환경</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table horizontal">
                        <colgroup>
                            <col style={{ width: "25%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>문서 및 버전</th>
                            <td>
                                <div className="mu-table-cell">
                                    HTML5, CSS3, JavaScript, React
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>인코딩</th>
                            <td>
                                <div className="mu-table-cell">
                                    UTF-8
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>웹 유형</th>
                            <td>
                                <div className="mu-table-cell">
                                    PC, Mobile, Responsive
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>크로스 브라우징</th>
                            <td>
                                <div className="mu-table-cell">
                                    ie, chrome, firefox, safari
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>해상도 기준 / 디자인 너비</th>
                            <td>
                                <div className="mu-table-cell">
                                    1920px / 1200px
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="basic-file-rule" className="mu-page-section-title">파일 / 폴더 규칙</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{ width: "10%"}} />
                            <col style={{ width: "10%"}} />
                            <col style={{ width: "30%"}} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>분류 폴더</th>
                                <th>서브 폴더</th>
                                <th>파일 이름</th>
                                <th>파일 설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">
                                        폰트
                                    </div>
                                </td>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">font.css</li>
                                            <li className="mu-alt-item">_font.scss</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">웹폰트 - 가져오기</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">
                                        CSS
                                    </div>
                                </td>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">
                                        styles
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        style.css
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">스타일 - 가져오기</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">
                                        SCSS
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        scss/include
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">style.scss</li>
                                            <li className="mu-alt-item">_variable.scss</li>
                                            <li className="mu-alt-item">_mixin.scss</li>
                                            <li className="mu-alt-item">_reset.scss</li>
                                            <li className="mu-alt-item">_common.scss</li>
                                            <li className="mu-alt-item">_layout.scss</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">스타일 - 가져오기</li>
                                            <li className="mu-alt-item">스타일 - 변수</li>
                                            <li className="mu-alt-item">스타일 - 믹스인</li>
                                            <li className="mu-alt-item">스타일 - 초기화</li>
                                            <li className="mu-alt-item">스타일 - 공통 영역</li>
                                            <li className="mu-alt-item">스타일 - 레이아웃</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        JS
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        script
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">script.js</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">스크립트 - 가져오기</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        img
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        assets
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">images</li>
                                            <li className="mu-alt-item">icons</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">이미지</li>
                                            <li className="mu-alt-item">아이콘</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        레이아웃
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell mu-align-center">
                                        layout/include
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <li className="mu-alt-item">_header.html</li>
                                            <li className="mu-alt-item">_aside.html</li>
                                            <li className="mu-alt-item">_contents.html</li>
                                            <li className="mu-alt-item">_footer.html</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <ul className="mu-alt">
                                            <ul className="mu-alt">
                                                <li className="mu-alt-item">레이아웃 - 헤더</li>
                                                <li className="mu-alt-item">레이아웃 - 사이드</li>
                                                <li className="mu-alt-item">레이아웃 - 컨텐츠</li>
                                                <li className="mu-alt-item">레이아웃 - 푸터</li>
                                            </ul>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="basic-process" className="mu-page-section-title">프로젝트 진행 프로세스</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{ width: "20%"}} />
                            <col style={{ width: "40%"}} />
                            <col style={{ width: "40%"}} />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>작업 단계</th>
                            <th>기술 구현 항목</th>
                            <th>구현 항목별 코멘트</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className="mu-align-center">
                                <div className="mu-table-cell">
                                    스토리보드 검토
                                </div>
                            </th>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">UI/UX 기술 구현 가능 여부 검토</li>
                                        <li className="mu-alt-item">UI/UX 접근성 제고 여부 검토</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">구현 어려울 시 대체 기술 기획자 협의</li>
                                        <li className="mu-alt-item">
                                            <ul>
                                                <li>웹 컨텐츠 접근성 지침 2.1 을 기준으로 함</li>
                                                <li>접근성 미제고시 UI/UX 접근성 제고 요청</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="mu-align-center">
                                <div className="mu-table-cell">
                                    웹 리소스 구조화
                                </div>
                            </th>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">리소스 폴더 구조 설계 및 생성</li>
                                        <li className="mu-alt-item">파일 네이밍 가이드 수립</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">개발자 협의</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="mu-align-center">
                                <div className="mu-table-cell">
                                    시안 검토
                                </div>
                            </th>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">컨텐츠 분석 및 정보의 논리적 선형화</li>
                                        <li className="mu-alt-item">디자인에 따라 구역 분할</li>
                                        <li className="mu-alt-item">논리구조에 따른 HTML 문서 구조화</li>
                                        <li className="mu-alt-item">디자인에 따라 구역 분할</li>
                                        <li className="mu-alt-item">공통 CSS, JS 가이드 작성</li>
                                        <li className="mu-alt-item">디자인적 접근성 제고 여부 검토</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">웹 컨텐츠 접근성 지침 2.1 을 기준으로 함</li>
                                        <li className="mu-alt-item">접근성 미제고시 시안 수정 요청</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="mu-align-center">
                                <div className="mu-table-cell">
                                    퍼블리싱
                                </div>
                            </th>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">CSS 가이드 수립, 문서내 ID / Class 구조화 및 정리</li>
                                        <li className="mu-alt-item">웹 표준, 웹접근성 지침을 기준으로 JavaScript 사용불가 환경 마크업 진행</li>
                                        <li className="mu-alt-item">마크업 유효성 검사</li>
                                        <li className="mu-alt-item">CSS 작성</li>
                                        <li className="mu-alt-item">브라우저 렌더링 화면과 시안 비교</li>
                                        <li className="mu-alt-item">JavaScript 오류 테스트</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">W3C Markup Validator 이용</li>
                                        <li className="mu-alt-item">IE 11, Chrome, FireFox, Safari 등 Major 웹 브라우저 동작 테스트</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="mu-align-center">
                                <div className="mu-table-cell">
                                    산출물 최종 확인
                                </div>
                            </th>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">브라우저 테스트</li>
                                        <li className="mu-alt-item">웹 표준 검사</li>
                                        <li className="mu-alt-item">문서의 논리적/의미론적 구조 수동 검사</li>
                                        <li className="mu-alt-item">웹 접근성 최종 검토</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className="mu-table-cell">
                                    <ul className="mu-alt">
                                        <li className="mu-alt-item">Major 웹 브라우저 렌더링 및 동작 테스트</li>
                                        <li className="mu-alt-item">W3C Markup Validator 이용</li>
                                        <li className="mu-alt-item">정량 / 정성 평가 진행</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default BasicGuide;