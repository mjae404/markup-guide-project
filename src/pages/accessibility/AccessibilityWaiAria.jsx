import React, {useEffect} from "react";
function AccessibilityWaiAria() {
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
            <h2 className="mu-page-title">WAI-ARIA</h2>
            <section className="mu-page-section">
                <h3 id="wai-aria-roles" className="mu-page-section-title">Aria Roles</h3>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">TAG Roles</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{width: "15%"}} />
                                <col style={{width: "20%"}} />
                                <col style={{width: "20%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>분류</th>
                                <th>구분</th>
                                <th>이름</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan="8" className="mu-align-center">
                                    <div className="mu-table-cell">양식</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">입력 서식</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="form"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;form&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">자유 형식 입력 텍스트</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="textbox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;input type="text"&gt;</code>, <code className="mu-code-label">&lt;textarea&gt;</code>, <code className="mu-code-label">aria-multiline=""</code> 속성으로 줄바꿈 처리 적용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">일반 형식 입력 텍스트</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="input"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;input type="text"&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">라디오</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="radio"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;input type="radio"&gt;</code>, "라디오그룹"으로 묶어주어야 함.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">체크박스</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="chekbox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;input type="checkbox"&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">선택목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="combobox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;select&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">선택옵션</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="option"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;option&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">슬라이더</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="slider"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;input type="range"&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="6" className="mu-align-center">
                                    <div className="mu-table-cell">표</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">표</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="table"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;table&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">행그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="rowgroup"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;thead&gt;</code>, <code className="mu-code-label">&lt;tbody&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">행</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="row"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;tr&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">제목(열)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="columnheader"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;th scope="col"&gt;</code>, 그리드인 경우 <code className="mu-code-label">aria-colindex=""</code>와 같이 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">제목(행)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="rowheader"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;th scope="row"&gt;</code>, 그리드인 경우 <code className="mu-code-label">aria-rowindex=""</code>와 같이 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">내용</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="cell"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;td&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="5" className="mu-align-center">
                                    <div className="mu-table-cell">HTML5</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">네비게이션</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="navication"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;nav&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">일반 섹션</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="section"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;section&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Article</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="article"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;article&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메인 컨텐츠</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="main"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;main&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">그래픽 문서</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="figure"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;figure&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="4" className="mu-align-center">
                                    <div className="mu-table-cell">기본요소</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">버튼</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="button"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;button&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">이미지</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="img"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;img&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">링크</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="link"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;a&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">선</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="separator"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;hr&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="3" className="mu-align-center">
                                    <div className="mu-table-cell">목록, 정의 요소</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">목록의 그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="list"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;ul&gt;, &lt;ol&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">목록의 단일항목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="listitem"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;li&gt;, &lt;dt&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">데이터리스트</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="listbox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        동일한 HTML 요소 <code className="mu-code-label">&lt;datalist&gt;</code> (사파리 미지원 태그)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="10" className="mu-align-center">
                                    <div className="mu-table-cell">비슷한 HTML 요소</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">주요 제목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="heading"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;h1&gt;</code> ~ <code className="mu-code-label">&lt;h6&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">중요한 섹션</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="region"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;section&gt;</code>, 중요한 내용을 포함하는 인식 가능한 섹션
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">그리드</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="grid"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;table&gt;</code>, <code className="mu-code-label">aria-colcount=""</code>와 같이 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">그리드 내용</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="gridcell"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;td&gt;</code>, 그리드의 경우 <code className="mu-code-label">aria-colindex=""</code>와 같이 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">정의 제목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="term"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;dt&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">정의 내용</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="definition"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;dd&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">슬라이더</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="range"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;input type="range"&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">스핀버튼</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="spinbutton"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;input type="number"&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Contentinfo</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="contentinfo"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;footer&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">보완적인 랜드 마크</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="complementary"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        비슷한 HTML 요소 <code className="mu-code-label">&lt;aside&gt;</code>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="4" className="mu-align-center">
                                    <div className="mu-table-cell">기타</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">라디오 그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="radiogroup"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        "라디오 그룹"으로 역할 정의
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">섹션 제목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="sectionhead"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        추상적인 역할
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">선택 목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="select"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        추상적인 역할
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">텍스트</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="text"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        이미지를 텍스트로만 읽도록 사용, 마크업에 의해 분리된 텍스트를 한번에 읽도록 사용
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">Wiget Roles</h4>
                    <div className="mu-table-wrap">
                        <table className="mu-table vertical">
                            <colgroup>
                                <col style={{width: "15%"}} />
                                <col style={{width: "20%"}} />
                                <col style={{width: "20%"}} />
                                <col />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>분류</th>
                                <th>구분</th>
                                <th>이름</th>
                                <th>설명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan="12" className="mu-align-center">
                                    <div className="mu-table-cell">기능</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">탭 메뉴그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tablist"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">&lt;ul&gt;</code> 그룹 요소에 적용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">탭 메뉴목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="presentation"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">&lt;li&gt;</code> 목록 요소에 적용 (시맨틱 마크업 역할을 무효화함)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">탭 메뉴링크</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tab"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">&lt;a&gt;</code> 이벤트 요소에 적용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">탭 내용</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tabpanel"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">&lt;div&gt;</code> 콘텐츠 활성화 요소에 적용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Dialog</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="dialog"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        대화 상자는 사용자가 정보를 입력하거나 응답하도록하는 데 가장 자주 사용되는 모달입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Tooltip</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tooltip"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        요소에 대한 설명을 표시하는 문맥 팝업
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">트리목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tree"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        축소 및 확장 할 수있는 하위 수준 중첩 그룹을 포함 할 수있는 유형의 목록입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">트리의 옵션 항목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="treeitem"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        트리 항목 요소의 하위 수준 그룹이 포함되어있는 경우 확장되거나 축소 될 수있는 트리 내의 요소입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">트리 그리드</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="treegrid"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        트리와 같은 방법으로 행을 확장 및 축소 할 수있는 그리드입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">진행표시줄</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="progressbar"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        오랜 시간이 걸리는 작업의 진행 상태를 표시하는 요소입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">스위치</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="swich"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        체크 / 체크되지 않은 값과 반대로 <code className="mu-code-label">on</code> / <code className="mu-code-label">off</code> 값을 나타내는 체크 박스 유형
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Toolbar</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="toolbar"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        컴팩트 한 시각적 형태로 표현 된 일반적으로 사용되는 기능 버튼 또는 컨트롤 모음.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="18" className="mu-align-center">
                                    <div className="mu-table-cell">의미</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">메뉴바</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="menubar"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        수평으로 제시되는 메뉴
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="menu"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        선택목록 제공
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="menuitem"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        선택사항의 옵션으로만 사용되므로 선택된 상태는 적용하지 않음
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴선택</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="menuitemradio"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        하나만 선택 할 수 있는 메뉴목록, <code className="mu-code-label">aria-checked</code>와 함께 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴선택</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="menuitemcheckbox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        여러개 선택 할 수 있는 메뉴목록, <code className="mu-code-label">aria-checked</code>와 함께 사용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">스크롤바</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="scrollbar"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        영역 내의 내용 스크롤을 제어하는 ​​그래픽 객체입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">상태표시줄</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="status"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        상태 역할은 경고에 대해 중요하지 않은 권고 정보를 사용자에게 제공하는 데 사용됩니다. <br aria-hidden="true" />
                                        하지만 반드시 이것이 사용자에게 발표된다는 것을 의미하지는 않습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Timer</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="timer"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        시작 지점에서부터의 경과 시간 또는 끝 지점까지 남은 시간을 나타내는 숫자 카운터가 포함된 라이브 영역 유형입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Marquee</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="marquee"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        중요하지 않은 정보가 자주 변경되는 라이브 영역 유형입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">검색</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="search"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        검색 기능
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">검색상자</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="searchbox"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        검색 기준을 지정하기위한 텍스트 상자 유형입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">경고 메세지</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="alert"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        사용자에게 경고하기 위해 메시지를 전달하는 데 사용됩니다. 해당 요소가 활성화 될 때 전달됩니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">경고 대화상자</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="alertdialog"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        경고 메시지가 들어있는 대화 상자 유형으로, 초기 포커스는 대화 상자의 요소로 이동함.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">배너</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="banner"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        페이지 별 콘텐츠가 아닌 사이트 중심 콘텐츠가 대부분 포함 된 배너영역
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">수학 표현식</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="math"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        수학 표현식을 나타내는 내용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">정적 목차</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="directory"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        정적 목차와 같이 그룹 구성원에 대한 참조 목록입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">기사목록</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="feed"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        스크롤을 통해 기사의 목록에 추가되거나 제거 될 수있는 기사의 스크롤 가능한 목록
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">문서</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="document"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        보조 기술 사용자가 읽기 모드로 탐색 할 수있는 콘텐츠가 포함 된 요소입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="12" className="mu-align-center">
                                    <div className="mu-table-cell">기타</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">Landmark</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="tablist"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">&lt;ul&gt;</code> 그룹 요소에 적용
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">명령</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="command"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        조치를 수행하지만 입력 데이터를 수신하지 않는 위젯 형태
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Composite</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="composite"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        탐색 가능한 자손 또는 소유된 자식요소를 포함 할 수있는 위젯
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Log</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="log"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        새 정보가 의미있는 순서로 추가되고 오래된 정보가 사라질 수 있는 라이브 영역 유형입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Roletype</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="roletype"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        인스턴스를 이해하고 작동시키는 데 사용할 수있는 개념
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">어플리케이션</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="application"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">없음</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="none"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">내제된 원시적 역할을 매핑시키지 않음</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">그룹</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="group"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">보조 기술에 의해 페이지 요약이나 목차에 포함되지 않는 사용자 인터페이스 개체 집합입니다.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">노트</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="note"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">내용이 소문자이거나 자원의 주요 내용을 보조하는 부분</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">구조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="structure"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">문서 구조 요소. 구조적 역할 자체가 모두 접근성 API에 매핑되는 것은 아니지만 보조 기술에 대한 컨텐츠 적응을 지원하거나 위젯 역할을 만드는 데 사용됩니다.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">위젯</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="widget"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">그래픽 사용자 인터페이스 (GUI)의 대화 형 구성 요소</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Window</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">role="window"</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">브라우저 또는 응용 프로그램 창.</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
            <section className="mu-page-section">
                <h3 id="wai-aria-properties" className="mu-page-section-title">Aria Properties</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{width: "15%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>분류</th>
                            <th>구분</th>
                            <th>이름</th>
                            <th>설명</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="15" className="mu-align-center">
                                    <div className="mu-table-cell">Global</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">변경 알림</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-atomic</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">true</code> 또는 <code className="mu-code-label">false</code>를 나타내는 값. 기본값은 <code className="mu-code-label">false</code>입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">컨트롤</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-controls</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code> : 제어할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">서술 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-describedby</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">상세 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-details</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">읽기흐름 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-details</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">읽기흐름 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-flowto</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 다중 참조할 요소의 ID 값을 읽어줄 순서대로 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">오류메시지 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-errormessage</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴 또는 대화 상자 존재여부</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-haspopup</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        존재하는 경우 속성과 함께 <code className="mu-code-label">"true"</code> 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">단축키 설명</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-keyshortcuts</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"alt+ArrowRight Delete alt+ctrl+m"</code> : 구현된 단축키를 입력합니다. 다중입력 가능.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">레이블</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-label</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"대체정보"</code> : 문자열 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">레이블 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-labelledby</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code> : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">소유</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-owns</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        현재 개체의 직계 자식이 아닌 요소를 포함하여 자식 개체의 목록을 설정하거나 검색합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">업데이트 요소</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-live</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">""polite"</code> : 현재 작업을 방해하지 않을 때만 사용자에게 업데이트를 알립니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">""off"</code> : 현재 해당 지역에 집중되어 있을 때만 사용자에게 업데이트를 알립니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">""assertive"</code> : 업데이트 즉시 사용자에게 알립니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">관련 설정</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-relevant</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        보조 기술로 어떤 유형의 변경이 관련되어 있으며 발표되어야하는지에 대한 힌트를 제공합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"additions"</code> : 요소 노드는 라이브 영역 내의 액세스 가능성 트리에 추가됩니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"additions text"</code> : 값의 조합 인 "추가 텍스트"와 동일합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"all"</code> : 모든 값의 조합에 해당하는 "추가 제거 텍스트" <br aria-hidden="true" />
                                        <code className="mu-code-label">"removals"</code> : 라이브 영역 내의 텍스트 내용, 대체 텍스트 또는 요소 노드는 액세스 가능성 트리에서 제거됩니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"text"</code> : 텍스트 컨텐츠 또는 대체 텍스트가 액세스 라이브러리의 모든 하위 항목에 추가됩니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">역할설명</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-roledescription</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">""attachment button"</code> : 역할설명을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="16" className="mu-align-center">
                                    <div className="mu-table-cell">Widget</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">자동 완성</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-autocomplete</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"none"</code> : 가장 최근에 사용한 5개의 검색어를 나열하여 제안 된 값을 표시. <br aria-hidden="true" />
                                        <code className="mu-code-label">"inline"</code> : 텍스트 입력 내에서 값 완성 예측을 표시하는 인라인 모델. <br aria-hidden="true" />
                                        <code className="mu-code-label">"list"</code> : a에서 가능한 값 모음을 표시하는 목록 모델. <br aria-hidden="true" />
                                        <code className="mu-code-label">"both"</code> : inline, list 입력이 두 가지 모델을 동시에 제공하는 경우
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">오류메시지 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-errormessage</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">메뉴 또는 대화 상자 존재여부</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-haspopup</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        존재하는 경우 속성과 함께 <code className="mu-code-label">"true"</code> 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">계층 수준 (h1~h6)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-level</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"6"</code> : 목차와 같은 단계를 입력합니다. (<code className="mu-code-label">role="heading"</code> 제공하는 경우 사용됨)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">대화상자 확인</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-modal</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        모달인 경우 속성과 함께 <code className="mu-code-label">"true"</code> 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">멀티라인 (textarea)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-multiline</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        여러줄인 경우 속성과 함께 <code className="mu-code-label">"true"</code> 값을 입력합니다. (<code className="mu-code-label">role="textbox"</code> 제공하는 경우 사용됨)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">다중선택 (multiple)</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-multiselectable</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 다중 선택, <code className="mu-code-label">"false"</code> 하나만 선택 (<code className="mu-code-label">role="combobox"</code> 제공하는 경우 사용됨)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">방향</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-orientation</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 또는 <code className="mu-code-label">"false"</code>를 나타내는 값. 기본값은 <code className="mu-code-label">"false"</code>입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">Plaeholder</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-placeholder</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">placeholder=""</code> 속성과 마찬가지로 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">읽기전용</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-readonly</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        읽기전용인 경우 속성과 함께 <code className="mu-code-label">"true"</code> 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">필수입력</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-required</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        필수입력인 경우 속성과 함께 <code className="mu-code-label">true"</code> 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">정렬</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-sort</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        표 또는 그리드의 항목의 정렬 여부를 나타냅니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"ascending"</code> : 오름차순으로 정렬 <br aria-hidden="true" />
                                        <code className="mu-code-label">"descending"</code> : 내림차순으로 정렬 <br aria-hidden="true" />
                                        <code className="mu-code-label">"none"</code> : 정렬하지 않음 <br aria-hidden="true" />
                                        <code className="mu-code-label">"other"</code> : 다른 정렬방식이 적용됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">최대값</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-valuemax</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"100"</code> : 알려진 최대 값이 있는 경우 최대값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">최소값</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-valuemin</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"-100"</code> : 알려진 최소 값이 있는 경우 최소값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">현재값</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-valuenow</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"0"</code> : 현재값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">텍스트값</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-valuetext</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"Sunday"</code> :  <code className="mu-code-label">ria-valuenow</code>를 읽을 수 있는 텍스트 대안을 정의합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="3" className="mu-align-center">
                                    <div className="mu-table-cell">Live Region</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">변경 알림</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-atomic</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">true</code> 또는 <code className="mu-code-label">false</code>를 나타내는 값. 기본값은 <code className="mu-code-label">false</code>입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">업데이트 요소</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-live</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"polite"</code> : 현재 작업을 방해하지 않을 때만 사용자에게 업데이트를 알립니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"off"</code> : 현재 해당 지역에 집중되어 있을 때만 사용자에게 업데이트를 알립니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"assertive"</code> : 업데이트 즉시 사용자에게 알립니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">관련 설정</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-relevant</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        보조 기술로 어떤 유형의 변경이 관련되어 있으며 발표되어야하는지에 대한 힌트를 제공합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"additions"</code> : 요소 노드는 라이브 영역 내의 액세스 가능성 트리에 추가됩니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"additions text"</code> : 값의 조합 인 "추가 텍스트"와 동일합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"all"</code> : 모든 값의 조합에 해당하는 "추가 제거 텍스트" <br aria-hidden="true" />
                                        <code className="mu-code-label">"removals"</code> : 라이브 영역 내의 텍스트 내용, 대체 텍스트 또는 요소 노드는 액세스 가능성 트리에서 제거됩니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"text"</code> : 텍스트 컨텐츠 또는 대체 텍스트가 액세스 라이브러리의 모든 하위 항목에 추가됩니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="16" className="mu-align-center">
                                    <div className="mu-table-cell">Relationship</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">현재 활성화 된 자손을 식별</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-activedescendant</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 활성화된 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">총 열 개수</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-colcount</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"16"</code> : 총 합계를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">열 위치</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-colindex</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"2"</code> : 열 위치를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">열 병합</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-colspan</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"2"</code> : 병합된 열 수를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">컨트롤</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-controls</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 제어할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">서술 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-describedby</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">상세 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-details</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">읽기흐름 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-flowto</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 다중 참조할 요소의 ID 값을 읽어줄 순서대로 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">오류메시지 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-errormessage</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code>  : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">레이블 참조</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-labelledby</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"idname"</code> : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">소유</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-owns</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        현재 개체의 직계 자식이 아닌 요소를 포함하여 자식 개체의 목록을 설정하거나 검색합니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"idname"</code> : 참조할 요소의 ID 값을 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">번호 및 위치</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-posinset</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        현재 <code className="mu-code-label">listitems</code> 또는 <code className="mu-code-label">treeitem</code>의 집합에서 요소의 번호 또는 위치를 정의 <br aria-hidden="true" />
                                        <code className="mu-code-label">"5"</code> : 순서에 맞는 값을 입력합니다. (순서 목록은 ol li 구조로 사용)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">총 행 수</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-rowcount</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"5"</code> : 총 행 수를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">행 번호 및 위치</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-rowindex</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"5"</code> : 행 번호 및 위치를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">행 병합</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-rowspan</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"2"</code> : 행을 병합한 수를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">총 항목 수</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-setsize</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"10"</code> : listitems또는 treeitem의 전체 항목의 수를 입력합니다.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="wai-aria-states" className="mu-page-section-title">Aria States</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{width: "15%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>분류</th>
                            <th>구분</th>
                            <th>이름</th>
                            <th>설명</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="7" className="mu-align-center">
                                    <div className="mu-table-cell">Widget</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">양식 선택됨</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-checked</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">role="checkbox"</code>, <code className="mu-code-label">role="radio"</code> 를 사용한 경우에 쓰여짐
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">현재항목</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-current</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"page"</code> : 현재 페이지 <br aria-hidden="true" />
                                        <code className="mu-code-label">"step"</code> : 현재 단계 <br aria-hidden="true" />
                                        <code className="mu-code-label">"location"</code> : 현재 위치 <br aria-hidden="true" />
                                        <code className="mu-code-label">"date"</code> : 현재 날짜 <br aria-hidden="true" />
                                        <code className="mu-code-label">"time"</code> : 현재 시간 <br aria-hidden="true" />
                                        <code className="mu-code-label">"true"</code> : 현재 항목 <br aria-hidden="true" />
                                        <code className="mu-code-label">"false"</code> : 형재 항목을 나타내지 않음
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">비활성</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-disabled</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 포커스 가능하나 변경불가상태 <code className="mu-code-label">"false"</code> 요소의 사용 가능
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">확장/축소</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-expanded</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 확장됨 <code className="mu-code-label">"false"</code> 축소됨
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">무효화</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-invalid</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"grammar"</code> : 문법 오류인 경우 <br aria-hidden="true" />
                                        <code className="mu-code-label">"false"</code> : 오류가 없는 경우 <br aria-hidden="true" />
                                        <code className="mu-code-label">"spelling"</code> : 맞춤법 오류인 경우 <br aria-hidden="true" />
                                        <code className="mu-code-label">"true"</code> : 유효성 검사 오류인 경우
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">누른상태</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-pressed</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"false"</code> : 요소가 눌려지지만 현재 눌려지지 않습니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"mixed"</code> : 혼합모드 값을 나타냅니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"true"</code> : 눌릷니다. <br aria-hidden="true" />
                                        <code className="mu-code-label">"undefined"</code> : 눌려지지 않습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">위젯 선택됨</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-selected</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 선택됩니다. <code className="mu-code-label">"false"</code> 선택되지 않았습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mu-align-center">
                                    <div className="mu-table-cell">Live Region</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">업데이트중</div>
                                </td>
                                <td className="mu-code-font">
                                    <div className="mu-table-cell">aria-busy</div>
                                </td>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">"true"</code> 요소가 업데이트 중입니다. <code className="mu-code-label">"false"</code> 요소의 예상 업데이트가 없습니다.
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

export default AccessibilityWaiAria;