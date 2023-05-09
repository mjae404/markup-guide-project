import React, {useEffect} from "react";
function AccessibilityCheckList() {
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
            <h2 className="mu-page-title">역할별 체크리스트</h2>
            <section className="mu-page-section">
                <h3 id="checklist-planner" className="mu-page-section-title">기획자</h3>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">기본점검</caption>
                        <colgroup>
                            <col style={{ width: "5%"}} />
                            <col style={{ width: "10%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th colSpan="2" rowSpan="3">제목</th>
                            <td>
                                <div className="mu-table-cell">
                                    각 페이지별로 고유의 제목을 정의하였는가? (페이지 내용상의 제목과 웹브라우저 타이틀로 제공됨)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    웹브라우저의 제목을 꾸미기 위해 의미없는 특수문자(■, ☆, :: 등)를 사용하고 있지는 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    각 콘텐츠 블록을 구분할 수 있는 제목을 제공하는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2" rowSpan="3">텍스트</th>
                            <td>
                                <div className="mu-table-cell">
                                    의미가 있는 기호 또는 약어의 경우 그것이 의미하는 바를 적절한 단어로 정의하였는가? <br aria-hidden="true" />
                                    예&#41; ↓ : 할인, P : 포인트 적립, ? : 안내
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    모양, 크기, 위치, 방향, 색, 소리 만으로 정보를 전달하고 있는 콘텐츠는 없는가? <br aria-hidden="true" />
                                    예&#41; 빨간색 버튼을 누르시오. ( X ) 왼쪽의 내용을 참조하시오. ( X )
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    링크로 사용된 텍스트가 주변의 맥락과 관계없이 용도나 목적을 이해할 수 있는가? <br aria-hidden="true" />
                                    예&#41;  이동하려면 여기를 클릭하시오. ( X )
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">링크, 버튼</th>
                            <td>
                                <div className="mu-table-cell">
                                    링크 또는 버튼을 마우스 클릭 또는 키보드 포커스 했을 때 발생하는 점선을 없애달라고 요청하고 있지는 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2" rowSpan="3">이미지</th>
                            <td>
                                <div className="mu-table-cell">
                                    이미지에 텍스트는 없지만 의미가 있는 경우(사진, 아이콘, 기호) 대체텍스트를 정의하였는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    구성도, 차트, 다이어그램 이미지를 대체할 수 있는 콘텐츠(요약, 표)를 제공하는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    약도 이미지에 대체텍스트 또는 이어지는 내용으로 찾아가는 방법에 대한 자세한 설명을 제공하는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2" rowSpan="4">멀티미디어</th>
                            <td>
                                <div className="mu-table-cell">
                                    정보전달을 위한 영상 및 음성 정보에 텍스트(자막, 원고) 또는 수화를 제공하는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    음성이 없이 영상만 제공되는 멀티미디어 콘텐츠의 경우 해설을 제공하는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    동영상, 음성이 자동으로 재생되는 것을 요청하고 있지는 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    자동으로 재생되는 음악, 효과음의 경우 3초를 넘지 않는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">움직이는 콘텐츠</th>
                            <td>
                                <div className="mu-table-cell">
                                    1초에 3~50회 주기로 깜박거리는 콘텐츠의 제작을 요청하고 있지는 않은가? (움직이는 GIF 이미지나 플래시 등)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">표</th>
                            <td>
                                <div className="mu-table-cell">
                                    내용이 있는 <code className="mu-code-label">&lt;table&gt;</code>에 제목을 정의하였는가? (<code className="mu-code-label">&lt;caption&gt;</code>으로 제공됨)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">마우스 오버 UX</th>
                            <td>
                                <div className="mu-table-cell">
                                    마우스오버 등의 마우스로 동작하는 기능을 정의한 경우 키보드나 터치디바이스에서의 동작을 고려하고 있는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">자동롤링 콘텐츠</th>
                            <td>
                                <div className="mu-table-cell">
                                    자동 롤링되는 배너 또는 내용에 정지 및 탐색할 수 있는 기능을 정의하였는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">팝업</th>
                            <td>
                                <div className="mu-table-cell">
                                    사용자의 의도와 상관없이 자동으로 팝업을 띄우고 있지 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="7">입력폼</th>
                            <th>일반 입력폼</th>
                            <td>
                                <div className="mu-table-cell">
                                    대응하는 라벨 텍스트가 없는 입력폼의 경우 안내할 문구를 정의하였는가? (<code className="mu-code-label">title</code> 속성으로 제공됨)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2">셀렉트박스</th>
                            <td>
                                <div className="mu-table-cell">
                                    폼값의 전송이 필요한 경우 별도의 전송버튼을 제공하고 있는가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    목록의 정렬, 분류 목적의 셀렉트박스가 사용자의 동의(확인/전송 버튼 클릭) 없이 값을 자동으로 전송하면서 페이지를 이동시키는 기능을 사용하고 있지 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2">분할된 입력폼</th>
                            <td>
                                <div className="mu-table-cell">
                                    분할된 입력폼(전화번호, 카드번호, 주소 등)의 경우 각각의 입력폼에 고유의 명칭을 지정하였는가? <br aria-hidden="true" />
                                    예&#41; [지역 번호] - [국 번호] - [가입자 번호]
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mu-table-cell">
                                    입력폼의 글자수를 체크하여 다음 칸으로 초점이 자동으로 이동되는 것을 요청하고 있지 않은가?
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>입력오류</th>
                            <td>
                                <div className="mu-table-cell">
                                    입력 오류가 발생할 경우 오류내용을 안내하고 이를 정정할 수 있는 방법을 제공하는가?
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">개발후 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>웹브라우저 제목</th>
                                <td>
                                    <div className="mu-table-cell">
                                        웹브라우저의 제목으로 페이지 고유의 제목이 표시되는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>건너뛰기 링크</th>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드로 페이지에 접근하였을 때 반복되는 내용을 건너뛸 수 있는 링크를 사용할 수 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="5">초점의 이동</th>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드만으로 페이지의 모든 내용에 접근이 가능한가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드만으로 셀렉트박스와 라디오버튼, 체크박스의 값을 정상적으로 선택할 수 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        점선, 색상반전 등으로 제공되는 키보드 초점이 사라지거나 의도하지 않은 위치로 이동되는 경우는 없는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드의 초점이 논리적인 순서로 이동하는가?<br aria-hidden="true" />
                                        (좌→우, 상→하, 아이디→비밀번호→로그인버튼, 탭1→내용1→탭2→내용2)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내부에 스크롤바가 있는 내용에 키보드로 초점을 이동할 수 있고 위, 아래 방향키로 스크롤하여 내용을 확인할 수 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2">사용자 요구에 따른 실행</th>
                                <td>
                                    <div className="mu-table-cell">
                                        입력요소에 값을 선택, 입력하거나 변경했을 때 자동적으로 초점이 이동하거나 팝업이 뜨거나 페이지 이동이 되지는 않는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        팝업이 열리는 기능의 링크 또는 버튼에 마우스오버 했을 때 새 창이 열림을 안내하는 툴팁(<code className="mu-code-label">tooltip</code>=말풍선)이 나오는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>라벨 텍스트가 있는 입력폼</th>
                                <td>
                                    <div className="mu-table-cell">
                                        입력폼과 대응하는 라벨 텍스트를 클릭했을때 해당 입력폼에 초점이 이동하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>라벨 텍스트가 없는 입력폼</th>
                                <td>
                                    <div className="mu-table-cell">
                                        입력폼에 마우스오버 했을 때 해당 입력폼을 설명해주는 툴팁(<code className="mu-code-label">tooltip</code>=말풍선)이 나오는가? (<code className="mu-code-label">title</code> 속성)
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">개발후 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이미지 배너</th>
                                <td>
                                    <div className="mu-table-cell">
                                        관리도구로 이미지배너 삽입시 이미지의 모든 텍스트를 대체텍스트 항목에 입력하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>HTML 텍스트</th>
                                <td>
                                    <div className="mu-table-cell">
                                        관리도구에 <code className="mu-code-label">html</code> 코드 입력시 태그의 열고 닫음을 정확히 하여 입력하였는가?
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="checklist-designer" className="mu-page-section-title">디자이너</h3>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">기본 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이미지</th>
                                <td>
                                    <div className="mu-table-cell">
                                        차트, 다이어그램에서 색상 이외의 방법(무늬, 모양, 라벨 등)으로 항목의 구분이 가능한가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>HTML 텍스트</th>
                                <td>
                                    <div className="mu-table-cell">
                                        관리도구에 <code className="mu-code-label">html</code> 코드 입력시 태그의 열고 닫음을 정확히 하여 입력하였는가?
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="checklist-markup" className="mu-page-section-title">퍼블리셔</h3>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">기본 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th rowSpan="8">인식의 용이성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        의미 있는 이미지에 적절한 대체텍스트를 제공하고 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        의미가 있는 배경이미지를 사용한 경우 대체콘텐츠를 제공하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        텍스트가 없지만 의미가 있는 이미지(사진, 아이콘, 버튼)의 경우 대체텍스트를 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        장식 목적의 블릿(•)처럼 의미 없는 이미지에 alt 값을 제공하고 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        차트, 다이어그램 이미지를 대체할 수 있는 콘텐츠(요약, 표)를 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        약도 이미지에 찾아가는 방법을 설명하는 대체텍스트나 부연설명을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        이미지가 없고 스타일이 적용되지 않은 상태에서도 내용을 이해하는데 문제가 없는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        약어, 숫자, 기호 등 텍스트만으로는 의미파악이 어려운 경우 이해를 도울 수 있는 <code className="mu-code-label">title</code> 값을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="12">운용의 용이성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        페이지의 맨 앞에 반복되는 내용을 건너뛸 수 있는 링크를 제공하고 있으며 키보드로 접근이 가능한가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드만으로 모든 내용과 컨트롤의 이용이 가능한가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드 탭 이동시 초점이 사라지거나 초점을 이동할수 없는 컨트롤이 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        마우스로 동작하는 기능에 키보드로 동작하는 기능을 함께 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내부에 스크롤바가 있는 내용에 키보드로 초점을 이동할 수 있고 위,아래 방향키로 내용을 확인할 수 있는가? (<code className="mu-code-label">tabindex="0"</code> 속성을 지정하거나 <code className="mu-code-label">textarea</code> 태그를 사용)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드의 초점이 논리적인 순서로 이동하는가?<br aria-hidden="true" />
                                        (좌→우, 상→하, 아이디→비밀번호→로그인버튼, 탭1→내용1→탭2→내용2)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        키보드로 레이어 열기 후 초점이 레이어 내용으로 바로 이동할 수 있고 레이어 닫기를 하면 열기 버튼을 눌렀던 자리로 초점이 되돌아 가는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        링크나 버튼에 충분한 크기의 클릭 영역을 제공하는가? (최소 10 x 10 px)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        자동으로 갱신되는 콘텐츠에 정지시키는 기능을 제공하는가? (필수: 마우스오버 또는 키보드 포커스가 되면 정지 | 선택: 정지버튼 제공)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        페이지 고유의 제목을 title 로 제공 하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        주요 내용의 제목을 <code className="mu-code-label">h1</code>~<code className="mu-code-label">h6</code>으로 마크업 하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내용을 불러오는 <code className="mu-code-label">iframe</code>에 해당 내용을 의미하는 <code className="mu-code-label">title</code> 값을 지정하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="12">이해의 용이성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        링크가 스크립트를 통해 새창 또는 팝업창으로 열리는 경우 <code className="mu-code-label">title="새창으로 열림"</code> 값을 제공하는가? (<code className="mu-code-label">target="_blank"</code> 를 제공하는 경우 생략 가능)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                    <code className="mu-code-label">table</code>에 <code className="mu-code-label">caption</code> 으로 제목을 제공하고 있는가? (<code className="mu-code-label">table</code> 앞에 명확한 제목요소가 있는 경우는 <code className="mu-code-label">caption</code> 생략 가능)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        가로헤더, 세로헤더가 있는 2차원 표에 <code className="mu-code-label">th</code>에 <code className="mu-code-label">scope</code> 값을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        제목셀이 병합된 경우 <code className="mu-code-label">scope="colgroup"</code> 값을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내용셀이 병합된 경우 headers 속성으로 해당 셀의 제목들을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        콘텐츠가 논리적인 순서로 되어있는가? (탭 기능, 더보기 버튼)
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        HTML 코드에 lang 속성이 선언되어 있는가?
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">이벤트 페이지, 메일 HTML 코딩</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>웹브라우저 제목</th>
                                <td>
                                    <div className="mu-table-cell">
                                        웹브라우저의 제목으로 페이지 고유의 제목이 표시되도록 변수를 입력하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>이미지</th>
                                <td>
                                    <div className="mu-table-cell">
                                        이미지로 된 모든 내용에 대체텍스트 제공하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>링크</th>
                                <td>
                                    <div className="mu-table-cell">
                                        링크의 점선을 없애기 위해 <code className="mu-code-label">onfocus="this.blur()"</code> 등의 스크립트를 사용하지는 않았는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>초점 이동</th>
                                <td>
                                    <div className="mu-table-cell">
                                        이미지맵 링크 사용시 키보드에 의한 초점이 좌에서 우로, 위에서 아래로 순서대로 이동하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>마크업 오류 방지</th>
                                <td>
                                    <div className="mu-table-cell">
                                        태그의 열고 닫음을 정확히 하여 코딩하였는가?
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">개발 후 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이미지</th>
                                <td>
                                    <div className="mu-table-cell">
                                        책표지 이미지, 배너 이미지 등 관리도구로 입력되는 <code className="mu-code-label">alt</code> 값이 정상적으로 지정되었는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>라벨 텍스트가 있는 입력폼</th>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">id</code>와 <code className="mu-code-label">for</code> 값의 연결이 끊기지 않았는가? 입력폼과 대응하는 라벨 텍스트를 클릭했을때 해당 입력폼에 초점이 이동하는가?
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="checklist-developer" className="mu-page-section-title">개발자</h3>
                <div className="mu-table-caption-wrap">
                    <table className="mu-table horizontal">
                        <caption className="mu-table-caption">기본 점검</caption>
                        <colgroup>
                            <col style={{ width: "15%"}} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th rowSpan="3">인식의 용의성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        책표지 이미지, 배너 이미지 등 관리도구로 입력되는 <code className="mu-code-label">alt</code> 값이 정상적으로 지정되었는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        게시물에 대한 링크로 썸네일을 제공하는 경우 이미지의 <code className="mu-code-label">alt</code> 값으로 게시물의 제목을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        관리도구나 에디터로 삽입되는 이미지의 경우 사용자(관리자)가 <code className="mu-code-label">alt</code> 값을 입력할 수 있는 기능을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="4">운용의 용이성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        포커스가 논리적인 순서(상→하, 좌→우, 아이디→비밀번호→로그인버튼)로 이동하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        포커스의 순서를 임의로 조작하는 <code className="mu-code-label">tabindex</code> 속성을 사용하고 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        링크 요소에 포커스가 갈 경우 생기는 점선 테두리를 없애기 위해 <code className="mu-code-label">onclick="this.blur();"</code> 를 사용하고 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        링크, 버튼 외의 요소에 onclick 이벤트를 사용하고 있지는 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="13">이해의 용이성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        링크가 스크립트를 통해 새창 또는 팝업창으로 열리는 경우 <code className="mu-code-label">title="새창으로 열림"</code> 값을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        각 페이지 고유의 제목이 브라우저 제목(<code className="mu-code-label">title</code>)으로 되어 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내용을 불러오는 <code className="mu-code-label">iframe</code>에 해당 내용을 의미하는 <code className="mu-code-label">title</code> 값을 지정하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        내용이 없는 프로그램 용도의 <code className="mu-code-label">iframe</code>에 <code className="mu-code-label">title="빈 프레임"</code> 값을 지정하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        onload시 검색창이나 로그인폼에 자동으로 포커스를 이동시키는 기능을 사용하고 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력요소에 대응하는 텍스트가 있는 경우 해당 텍스트가 <code className="mu-code-label">label</code>로 마크업 되어있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력요소와 이에 대응하는 <code className="mu-code-label">label</code>이 동일한 <code className="mu-code-label">id</code>를 사용하여 정상적으로 연결이 되어 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력요소의 id 값을 변경한 경우 연결된 <code className="mu-code-label">label</code> 의 <code className="mu-code-label">for</code> 값을 같이 변경하였는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력요소에 대응하는 텍스트가 없는 경우 <code className="mu-code-label">title</code> 속성으로 해당 입력요소의 기능을 안내하고 있는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력오류가 발생한 경우 오류내용을 안내하고 이를 수정할 방법을 제공하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        입력오류가 발생한 경우 오류내용을 안내한 후 해당 입력요소로 포커스가 이동하는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        사용자가 의도하지 않은 기능(초점 변화, 서식 전송, 새 창, 팝업, 레이어)이 실행된 곳은 없는가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mu-table-cell">
                                        여러 칸으로 된 입력폼에 일정 글자수가 넘으면 포커스를 자동 이동시키는 기능을 사용하고 있지 않은가?
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>견고성</th>
                                <td>
                                    <div className="mu-table-cell">
                                        <code className="mu-code-label">HTML</code> 문법에 오류가 없는가? (태그의 열고 닫음, 태그의 중첩, 중복 선언된 속성, 특정 태그에 넣을 수 없는 태그)
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

export default AccessibilityCheckList;