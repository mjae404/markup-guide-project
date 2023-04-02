import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from 'prismjs';
import { scrollToHash } from "../../common/common";

function RuleCode() {
    useEffect(() => {
        scrollToHash();
        window.history.pushState("", document.title, window.location.pathname);
        Prism.highlightAll();
      }, []);

    return (
        <>
            <h2 className="mu-page-title">코드 규칙</h2>
            <section className="mu-page-section">
                <h3 id="rule-html" className="mu-page-section-title">HTML 규칙</h3>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">적절한 태그 및 속성 사용</h4>
                    <ul className="mu-unordered">
                        <li>클릭했을 때 이벤트가 발생하는 경우 <code className="mu-code-label">button</code> 태그를 사용한다.</li>
                        <li>클릭했을 때 다른 페이지로 넘어가는 경우 <code className="mu-code-label">a</code> 태그를 사용한다.</li>
                        <li><code className="mu-code-label">a</code> 태그 안에 <code className="mu-code-label">button</code> 태그를 넣는 등 인터랙티브 요소에 인터랙티브 요소를 넣지 않도록 한다.</li>
                        <li>단락이 아닌 경우, 단순히 block 속성을 사용하기 위해서 <code className="mu-code-label">p</code> 태그를 사용하지 않는다.</li>
                        <li><code className="mu-code-label">heading</code> 태그는 레벨 순서를 지켜 작성한다.</li>
                        <li><code className="mu-code-label">button</code> 태그에는 <span className="mu-code-label">type</span>을 명시한다.</li>
                        <li>레이아웃을 표현하기 위하여 표를 사용하지 않는다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">웹접근성</h4>
                    <ul className="mu-unordered">
                        <li><code className="mu-code-label">img</code> 요소의 <span className="mu-code-label">alt</span> 속성은 반드시 제공되어야 하며, 의미없는 이미지에 한하여 빈 값을 허용한다.</li>
                        <li><code className="mu-code-label">input</code> 요소는 <code className="mu-code-label">label</code>과 연결하거나 <code className="mu-code-label">title</code> 값을 지정하여야 한다.</li>
                        <li>분리된 입력폼은 각각 <code className="mu-code-label">title</code> 값을 지정하여야 한다.</li>
                        <li>적절한 <code className="mu-code-label">label</code> 텍스트 또는 <code className="mu-code-label">title</code>를 사용하여야 한다.</li>
                        <li>적절한 태그로 작성이 어려울 경우 <Link to="/accessibility/wai-aria" className="mu-link">wai-aria</Link>를 활용하여 웹접근성을 강화할 수 있다.</li>
                        <li><code className="mu-code-label">body</code> 상단에 본문 바로가기 링크를 제공하여야 한다.</li>
                        <li>키보드 탭키 이동으로 접근이 불가능한 내용이 없어야 한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">ID와 클래스</h4>
                    <ul className="mu-unordered">
                        <li>ID는 개발을 위해서만 사용하고, 퍼블리싱 작업시에는 클래스를 활용한다.</li>
                        <li>불가피한 경우를 제외하고 클래스명은 직관적으로 짓는다.</li>
                        <li>체인 선택자의 개수는 3개까지 권장한다.</li>
                        <li>클래스명에 넘버링은 최대한 지양한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">들여쓰기</h4>
                    <ul className="mu-unordered">
                        <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 4칸으로 설정한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">주석</h4>
                    <ul className="mu-unordered">
                        <li>시작과 끝의 구분이 필요한 경우 <span className="mu-code-label">&lt;!-- 내용 --&gt;</span>와 <span className="mu-code-label">&lt;!-- // 내용 --&gt;</span>으로 구분한다.</li>
                    </ul>
                </section>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-css" className="mu-page-section-title">CSS 규칙</h3>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">속성</h4>
                    <ul className="mu-unordered">
                        <li>모든 속성은 영문 소문자로만 작성한다.</li>
                        <li>약식으로 사용할 수 있는 경우 약식으로 작성한다.</li>
                        <li>기본 요소에 <code className="mu-code-label">box-sizing</code> 속성값을 지정하지 않는다.</li>
                        <li>컬러값은 단축 가능하다면 단축한 값으로 기재한다. (ex. <code className="mu-code-label">#fff</code>)</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`.class-name {
    background: #fff url("../images/image.jpg") no-repeat 50% / cover;
}`}
                            </code>
                        </pre>
                    </div>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`/* X */
* {
    box-sizing: border-box;
}

/* O */
.class-name {
    box-sizing: border-box;
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">선택자 및 우선순위</h4>
                    <ul className="mu-unordered">
                        <li>공통 선택자(<code className="mu-code-label">*</code>)는 웹페이지의 성능 저하를 가져오므로 사용하지 않는다.</li>
                        <li>태그는 언제든지 다른 태그로 변경될 수 있으므로 태그 선택자로 스타일을 작성하지 않는다.</li>
                        <li><code className="mu-code-label">!important</code>는 불가피한 상황을 제외하고는 사용하지 않는다.</li>
                        <li>인라인 스타일의 우선 순위가 높으므로 인라인 스타일의 사용은 최소한으로 한다.</li>
                        <li>선택자를 다수 작성할수록 우선 순위가 높아지므로 선택자는 가능하다면 최소 단위 / 루트 단위로 진행한다.</li>
                        <li>클래스명이 자주 쓰이는 명칭일 경우 선택자를 하나, 두 개 정도 추가 작성한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">세미콜론</h4>
                    <ul className="mu-unordered">
                        <li>마지막 선언된 속성에도 세미콜론(<span className="mu-code-label">;</span>)을 사용한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">들여쓰기</h4>
                    <ul className="mu-unordered">
                        <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 4칸으로 설정한다.</li>
                    </ul>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">작은 따옴표 사용 범위</h4>
                    <ul className="mu-unordered">
                        <li>작은 따옴표는 가상 선택자의 <code className="mu-code-label">content</code>에만 사용하며, 그 외에는 큰 따옴표를 사용한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`.class-name::before {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #000;
    content: '';
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">공백의 사용</h4>
                    <ul className="mu-unordered">
                        <li>선택자 간, 중괄호간 한칸의 공백을 사용한다.</li>
                        <li>속성 선언시 콜론 (<span className="mu-code-label">:</span>) 뒤에 한칸의 공백을 사용한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`.class-name {
    color: red;
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">줄바꿈</h4>
                    <ul className="mu-unordered">
                        <li>CSS 코드 작성시 중괄호 &#40;<span className="mu-code-label">&#123;</span>, <span className="mu-code-label">&#125;</span>&#41; 사이를 줄바꿈한다.</li>
                        <li>각각의 속성 작성시 줄바꿈 처리한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`.title {
    font-size: 24px;
    font-weight: bold;
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">주석 빈줄</h4>
                    <ul className="mu-unordered">
                        <li>종료 주석은 작성하지 않는다.</li>
                        <li>코드 그룹 간 1줄의 빈 줄을 허용한다. 단, 1줄을 초과하지 않는다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`/* title */
.title {
    font-size: 24px;
}

/* description */
.desc {
    font-size: 16px;
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">숨김 텍스트</h4>
                    <ul className="mu-unordered">
                        <li>숨김 텍스트 처리할 시에 <span className="mu-code-label">text-indent: -9999px</span>, <span className="mu-code-label">top: -9999px</span>, <span className="mu-code-label">font-size: 0</span>, <span className="mu-code-label">display: none</span> 등으로 처리하지 않는다. 해당 스타일은 스크린 리더기에서 읽히지 않거나, 초점 이슈가 존재할 수 있다.</li>
                        <li>숨김 텍스트 활용이 필요한 경우, 다음 코드를 사용한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`position: absolute;
clip: rect(0 0 0 0);
width: 1px;
height: 1px;
margin: -1px;
overflow: hidden;`}
                            </code>
                        </pre>
                    </div>
                </section>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-scss" className="mu-page-section-title">SCSS 규칙</h3>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">파일 구조</h4>
                    <ul className="mu-unordered">
                        <li>파일 구조는 가능하다면 컴포넌트 형식으로 파일을 나누어 작업한다.</li>
                        <li>컴포넌트 형식으로 파일을 나눈 후, 하나의 스타일시트에 임포트하는 방식으로 진행한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-scss`}>
{`_button.scss
_checkbox.scss
_input.scss
_mixin.scss
_popup.scss
_radio.scss
_select.scss
_table.scss
_variables.scss
...`}
                            </code>
                        </pre>
                    </div>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`@import "include/variable";
@import "include/mixin";
@import "include/reset";
@import "include/common";
@import "include/layout";
...`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">주석</h4>
                    <ul className="mu-unordered">
                        <li>중첩을 활용하여 스타일을 작성할 경우 해당 클래스를 검색했을 때 찾기 용이하도록 주석으로 클래스 이름을 전체로 작성한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`.header {
    &-menu {
        ...
    } // .header-menu
}`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">반복</h4>
                    <ul className="mu-unordered">
                        <li>반복적으로 사용되는 스타일의 경우 <code className="mu-code-label">mixin</code>이나 scss의 함수를 활용할 수 있다.</li>
                        <li>반복적으로 사용되는 값(컬러 색상, 값…)의 경우 변수를 선언하여 활용할 수 있다.</li>
                    </ul>
                </section>
            </section>
        </>
    );
}

export default RuleCode;