import React, {useEffect} from "react";
import styles from '../../styles/pages/accessibility/AccessibilityOverview.module.scss';
import Prism from 'prismjs';

function AccessibilityOverview() {
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
        Prism.highlightAll();
    }, []);

    return (
        <>
            <h2 className="mu-page-title">웹접근성 개요</h2>
            <section className="mu-page-section">
                <h3 id="overview-definition" className="mu-page-section-title">웹접근성 정의</h3>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">웹 접근성에 대한 W3C의 정의</h4>
                    <ul className="mu-unordered">
                        <li>
                            <blockquote>
                                <p className={styles[`mu-blockquote`]}>Web accessibility means that people with disabilities can use the Web.</p>
                                <p>웹 접근성은 장애를 지닌 사람이 웹을 이용할 수 있는것을 의미한다.</p>
                            </blockquote>
                        </li>
                        <li>
                            <blockquote>
                                <p className={styles[`mu-blockquote`]}>More specifically, Web accessibility means that people with disabilities can perceive, understand, navigate, and interact with the Web, and that they can contribute to the Web. Web accessibility also benefits others, including older people with changing abilities due to aging.</p>
                                <p>특히, 웹 접근성은 장애를 지닌 사람이 인지하고, 이해하고, 항해하고 웹과 상호작용 하는것을 의미한다. 그리고 그들은 웹에 기여 할 수 있다. 또한 웹 접근성은 나이를 먹는동안 능력이 변하는 노인을 포함하여 다른 이들에게도 이득이다.</p>
                            </blockquote>
                        </li>
                    </ul>
                    <cite className="mu-cite">
                        출처: <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noreferrer noopener" className="mu-link">WAI &#62; Introduction to Web Accessibility</a>
                    </cite>
                </section>
                <section className="mu-page-section-sub">
                    <h4 className="mu-page-section-sub-title">정보 접근성: 모든 사용자를 위한 더 편리한 서비스</h4>
                    <ul className="mu-unordered">
                        <li>
                            <p>정보 접근성은 모든 사용자가 특정 환경이나 신체적 장애에 상관없이 웹 사이트나 애플리케이션에서 제공하는 모든 정보에 동등하게 접근하고 이용할 수 있도록 보장해 주는 것이다. 장애인뿐만 아니라 고령자, 비장애인도 접근성의 대상이 되며 4가지 핵심원리는 다음과 같다.</p>
                            <ul className={`mu-alt ${styles[`mu-list-style`]}`}>
                                <li className="mu-alt-item">
                                    <strong>인식의 용이성</strong>
                                    <p className={styles[`mu-item-text`]}>모든 콘텐츠는 사용자가 인식할 수 있어야 한다.</p>
                                </li>
                                <li className="mu-alt-item">
                                    <strong>운용의 용이성</strong>
                                    <p className={styles[`mu-item-text`]}>사용자 인터페이스 구성 요소는 조작 가능하고 내비게이션할 수 있어야 한다.</p>
                                </li>
                                <li className="mu-alt-item">
                                    <strong>이해의 용이성</strong>
                                    <p className={styles[`mu-item-text`]}>콘텐츠는 장애유무에 관계없이 이해할 수 있게 구성되어야 한다.</p>
                                </li>
                                <li className="mu-alt-item">
                                    <strong>견고성</strong>
                                    <p className={styles[`mu-item-text`]}>웹 콘텐츠는 미래의 기술로도 접근할 수 있도록 견고하게 만들어야 한다.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <cite className="mu-cite">
                        출처: <a href="https://accessibility.naver.com/accessibility" target="_blank" rel="noreferrer noopener" className="mu-link">네이버 접근성 페이지 : Accessibility Guide</a>
                    </cite>
                </section>
            </section>
            <section className="mu-page-section">
                <h3 id="overview-type" className="mu-page-section-title">웹접근성 이용자 유형</h3>
                <ul className="mu-unordered mu-alt">
                    <li className="mu-alt-item">
                        <strong>전맹 사용자</strong>
                        <p className={styles[`mu-item-text`]}>시각을 통해 화면 정보를 인식하기 어렵기 때문에 화면의 텍스트를 음성으로 읽어주는 화면 낭독 프로그램(스크린 리더)를 이용한다.</p>
                    </li>
                    <li className="mu-alt-item">
                        <strong>색각이상 사용자</strong>
                        <p className={styles[`mu-item-text`]}>특정한 색 또는 색상 구별 자체가 어려워 색으로만 구분자를 표시할 경우 인지하기 어렵다.</p>
                    </li>
                    <li className="mu-alt-item">
                        <strong>고령자와 약시자</strong>
                        <p className={styles[`mu-item-text`]}>통상적인 크기의 폰트는 인식하기 어려워 폰트 확대 기능 또는 프로그램이 필요하다.</p>
                    </li>
                    <li className="mu-alt-item">
                        <strong>청각장애 사용자</strong>
                        <p className={styles[`mu-item-text`]}>동영상의 음성, 오디오, 알람과 같은 청각 콘텐츠는 인식할 수 없다.</p>
                    </li>
                    <li className="mu-alt-item">
                        <strong>뇌병변 장애 및 지체장애 사용자</strong>
                        <p className={styles[`mu-item-text`]}>마우스와 같은 포인팅 장치를 이용하지 않는 사용자는 키보드만으로도 모든 정보의 접근 및 조작이 가능해야 한다.</p>
                    </li>
                    <li className="mu-alt-item">
                        <strong>일시적 장애를 겪고 있는 사용자</strong>
                        <p className={styles[`mu-item-text`]}>사고로 인해 일시적으로 신체의 일부를 활용하지 못하거나 갑자기 극심한 불안감을 느껴 발작을 일으키는 사용자도 고려해야 한다.</p>
                    </li>
                </ul>
                <cite className="mu-cite">
                    출처: <a href="https://accessibility.naver.com/accessibility" target="_blank" rel="noreferrer noopener" className="mu-link">네이버 접근성 페이지 : Accessibility Guide</a>
                </cite>
            </section>
            <section className="mu-page-section">
                <h3 id="overview-site" className="mu-page-section-title">웹접근성 관련 사이트</h3>
                <ul className="mu-unordered mu-alt">
                    <li className="mu-alt-item">웹접근성 연구소 <a href="https://www.wah.or.kr:444/index.asp" target="_blank" rel="noreferrer noopener" className={`mu-link ${styles[`mu-space-left`]}`}>바로가기</a></li>
                    <li className="mu-alt-item">NAVER Accessibility <a href="https://accessibility.naver.com" target="_blank" rel="noreferrer noopener" className={`mu-link ${styles[`mu-space-left`]}`}>바로가기</a></li>
                    <li className="mu-alt-item">한국시각장애인연합회 <a href="http://www.kbuwel.or.kr" target="_blank" rel="noreferrer noopener" className={`mu-link ${styles[`mu-space-left`]}`}>바로가기</a></li>
                    <li className="mu-alt-item">WebWatch <a href="http://www.webwatch.or.kr" target="_blank" rel="noreferrer noopener" className={`mu-link ${styles[`mu-space-left`]}`}>바로가기</a></li>
                    <li className="mu-alt-item">웹 접근성 점검 매뉴얼 <a href="https://www.wah.or.kr:444/board/boardView.asp?page=3&brd_sn=4&brd_idx=518" target="_blank" rel="noreferrer noopener" className={`mu-link ${styles[`mu-space-left`]}`}>바로가기</a></li>
                </ul>
            </section>
            <section className="mu-page-section">
                <h3 id="overview-type" className="mu-page-section-title">웹접근성 가이드라인</h3>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">의미를 전달하고 있는 이미지에 대체 텍스트를 제공한다.</h4>
                    <ul className="mu-unordered">
                        <li>대체 텍스트는 이미지의 시각적 의도와 동등한 내용을 전달한다.</li>
                        <li>대체 텍스트는 중복으로 제공하지 않는다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`<!-- X -->
<img src="Markup.png">
<img src="Markup.png" alt>
<img src="Markup.png" alt="">
<img src="Markup.png" title="MJAEDOT">
<img src="Markup.png" alt="MJAEDOT" title="MJAEDOT">

<!-- O -->
<img src="Markup.png" alt="MJAEDOT">`}
                            </code>
                        </pre>
                    </div>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`<!-- X -->
<a href="/">
    <img src="Markup.png" alt="MJAEDOT"> MJAEDOT
</a>

<!-- O -->
<a href="/">
    <img src="Markup.png" alt> MJAEDOT
</a>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">전경 콘텐츠와 배경은 4.5:1 이상의 명도 대비를 유지한다.</h4>
                    <ul className="mu-unordered">
                        <li>전경 콘텐츠는 정보를 전달하고 있는 '문자, 아이콘, 콘트롤(a, button, input, select, textarea)'의 선과 면을 의미한다.</li>
                        <li>문자 크기가 bold 19px 이상 또는 normal 24px 이상인 경우 3:1 이상의 명도 대비를 유지한다.</li>
                        <li>아이콘, 콘트롤 등 시각 정보가 3px 이상 두꺼운 경우 3:1 이상의 명도 대비를 유지한다.</li>
                    </ul>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">화면을 400%까지 확대할 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>너비 1,280 픽셀 해상도 모니터에서 400%까지 확대할 수 있다. 모바일 단말에서는 테스트하지 않는다.</li>
                        <li>화면을 400% 확대한 상태에서 내용과 기능에 손실이 없어야 하고, 2차원 스크롤이 발생하지 않아야 한다.</li>
                    </ul>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">키보드만으로 조작할 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>구현된 키보드 접근 순서는 논리적으로 설명할 수 있어야 한다.</li>
                        <li>초점을 받은 요소는 시각적 단서를 제공해야 한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-css`}>
{`/* X */
a:hover {
    color: #000;
}

/* O */
a:hover,
a:focus {
    color: #000;
}`}
                            </code>
                        </pre>
                    </div>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-javascript`}>
{`// X
$(document).on("mouseover", ".gnb a", function() { ... });

// O
$(document).on("mouseover focus", ".gnb a", function() { ... });`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">사용할 수 있는 충분한 시간을 제공한다.</h4>
                    <ul className="mu-unordered">
                        <li>시간 제한이 있는 정보는 시간 제한을 끄거나, 또는 최소 20초 이상 10회까지 연장할 수 있다.</li>
                        <li>자동으로 갱신되는 정보에는 '정지, 이전, 다음' 기능을 제공한다.</li>
                    </ul>
                    <div className="mu-example">
                        <span className="mu-example-comment" aria-hidden="true">&#47;* X *&#47;</span>
                        <strong className="blind">이렇게 작업하면 안됩니다.</strong>
                        <p>10초 후 다음 페이지로 넘어갑니다. [다음 페이지로 즉시 이동]</p>
                        <br aria-hidden="true"/>
                        <span className="mu-example-comment">&#47;* O *&#47;</span>
                        <strong className="blind">이렇게 작업하여야 합니다.</strong>
                        <p>20초 후 다음 페이지로 넘어갑니다. [취소] [다음 페이지로 즉시 이동]</p>
                        <p>20초 후 다음 페이지로 넘어갑니다. [20초 연장] [다음 페이지로 즉시 이동]</p>

                    </div>
                    <div className="mu-example">
                        <span className="mu-example-comment" aria-hidden="true">&#47;* X *&#47;</span>
                        <strong className="blind">이렇게 작업하면 안됩니다.</strong>
                        <p>콘텐츠가 자동으로 슬라이드 되고 있는 상황에서 정지하거나 이전, 다음 콘텐츠를 탐색할 수 없다.</p>
                        <br aria-hidden="true"/>
                        <span className="mu-example-comment">&#47;* O *&#47;</span>
                        <strong className="blind">이렇게 작업하여야 합니다.</strong>
                        <p>콘텐츠가 자동으로 슬라이드 되고 있지만 정지, 이전, 다음 기능을 제공하고 있다.</p>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">발작을 유발하는 콘텐츠를 제공하지 않는다.</h4>
                    <ul className="mu-unordered">
                        <li>1초에 3~50회 사이의 번쩍이는 콘텐츠는 광과민성 발작을 유발할 수 있다.</li>
                        <li>광과민성 발작은 소아 또는 간질 경험이 있는 사람에게 더 위험하다.</li>
                    </ul>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">반복되는 콘텐츠 블록을 건너뛸 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>일반적으로 글로벌 탐색 바와 로컬 탐색 바는 반복되는 콘텐츠 블록이다.</li>
                        <li>반복되는 콘텐츠 블록이 있는 경우 페이지 시작 위치에 '본문으로 건너뛰기' 링크를 제공한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`/* X */
<body>
    <h1>MJAEDOT</h1>
    <nav>...</nav>
    <main>...</main>

<!-- O -->
<body>
    <a href="#main">본문으로 건너뛰기</a>
    <h1>MJAEDOT</h1>
    <nav>...</nav>
    <main id="main">...</main>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">모든 문서의 제목은 고유하고 식별할 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>제목 콘텐츠를 문서마다 다르게 설명함으로써 현재 문서의 용도를 식별할 수 있다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`<!-- X -->
<head>
    <title>MJAEDOT</title>
</head>

<!-- O -->
<head>
    <title>웹퍼블리싱 가이드 - MJAEDOT</title>
</head>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">링크와 버튼 텍스트는 콘텐츠의 목적을 알 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>주변 콘텐츠와 분리하여 독립적으로 접근해도 링크 또는 버튼의 목적을 알 수 있어야 한다.</li>
                        <li>링크 또는 버튼에 독립적으로 접근하여 이해하기 어려운 경우 동일한 단락, 목록, 셀, 연결된 헤더셀(p, li, td, th)에 링크 또는 버튼의 목적을 설명해야 한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`<!-- X -->
<a href="#" download>설치하기</a>
<button type="button">삭제하기</button>

<!-- O -->
<a href="#" download>안드로이드 애플리케이션 설치하기</a>
<p>안드로이드 애플리케이션 <a href="#" download>설치하기</a></p>
<li>안드로이드 애플리케이션 <a href="#" download>설치하기</a></li>
<td>안드로이드 애플리케이션 <a href="#" download>설치하기</a></td>
<tr>
    <th scope="row">안드로이드 애플리케이션</th>
    <td><a href="#" download>설치하기</a></td>
</tr>

<!-- O -->
<button type="button">구매내역 삭제하기</button>
<p>구매내역 <button type="button">삭제하기</button></p>
<li>구매내역 <button type="button">삭제하기</button></li>
<td>구매내역 <button type="button">삭제하기</button></td>
<tr>
    <th scope="row">구매내역</th>
    <td><button type="button">삭제하기</button></td>
</tr>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">섹션에는 의미 있는 마크업과 헤딩이 있다.</h4>
                    <ul className="mu-unordered">
                        <li>섹션 콘텐츠는 의미에 알맞은 article, section, nav, aside 요소로 마크업한다.</li>
                        <li>섹션 콘텐츠에는 문서의 개요 체계에 알맞은 헤딩(h1~h6)을 제공한다.</li>
                        <li>명시적 헤딩 기법을 사용한다. 명시적 헤딩 기법은 하나의 문서에 h1 요소를 한 번 사용한다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
{`<!-- X -->
<div class="article">...</div>
<div class="section">...</div>
<div class="nav">...</div>
<div class="aside">...</div>

<!-- O -->
<article>
    <h2>...</h2>
    ...
</article>
<section>
    <h2>...</h2>
    ...
</section>
<nav>
    <h2>...</h2>
    ...
</nav>
<aside>
    <h2>...</h2>
    ...
</aside>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">문서의 휴먼 랭귀지 속성을 제공한다.</h4>
                    <ul className="mu-unordered">
                        <li>html 요소에 lang 속성을 제공한다.</li>
                        <li>한글, 영문, 일문, 중문에는 이를 식별하기 위한 ISO-639-1 코드값 ko, en, ja, zh가 있다.</li>
                    </ul>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">문맥 변경은 예측할 수 있다.</h4>
                    <ul className="mu-unordered">
                        <li>사용자가 실행하기 전까지는 문서를 갱신(이동, 추가, 삭제, 재배치)하거나, 팝업(새 창, 레이어)을 띄우거나, 초점을 다른 곳으로 옮기지 않는다.</li>
                        <li>사용자가 초점을 넣거나 마우스를 올리는 것은 기능을 실행하기 위한 의도로 보지 않기 때문에 문맥을 변경하면 안 된다.</li>
                        <li>'대한민국' 선택의 결과로 대한민국의 '시/군/구'를 선택하는 항목이 등장했다면 이것은 문맥의 변화가 아니다.</li>
                    </ul>
                    <div className="mu-example">
                        <span className="mu-example-comment" aria-hidden="true">&#47;* X *&#47;</span>
                        <strong className="blind">이렇게 작업하면 안됩니다.</strong>
                        <p>초점을 넣었을 뿐인데 자동으로 페이지 갱신 또는 이동.</p>
                        <p>페이지 로드 시 자동 팝업.</p>
                        <p>초점 자동 이동.</p>
                        <br aria-hidden="true"/>
                        <span className="mu-example-comment">&#47;* O *&#47;</span>
                        <strong className="blind">이렇게 작업하여야 합니다.</strong>
                        <p>클릭 또는 리턴(엔터) 키를 통해 페이지 갱신 또는 이동.</p>
                        <p>클릭 또는 리턴(엔터) 키를 통해 팝업 생성.</p>
                        <p>초점을 자동으로 옮기지 않음.</p>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">폼 콘트롤 요소에 설명을 제공한다.</h4>
                    <ul className="mu-unordered">
                        <li>모든 input, textarea, select 요소에는 콘트롤을 설명하는 label 요소를 맵핑하거나 또는 title 속성을 제공한다.</li>
                    </ul>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">실수를 예방하고 정정하는 것을 돕는다.</h4>
                    <ul className="mu-unordered">
                        <li>입력 오류를 자동으로 감지할 수 있는 경우에만 이 지침을 적용한다. 예를 들면 이름을 잘못 입력하는 경우 정정 의견을 제시할 수 없다.</li>
                        <li>오류 항목이 무엇인지 식별할 수 있도록 문자로 알리고 정정 의견을 제시한다. 예를 들면 "생년월일 양식에 오류가 있습니다. 입력 형식은 yyyy-mm-dd 입니다."</li>
                        <li>정정 의견은 보안을 유지하는 수준에서 제시한다. 예를 들면 "아이디 또는 비밀번호 입력 오류."</li>
                        <li>입력 내용을 전송하기 전 검토 후 교정할 수 있다. 또는 제출한 내용을 되돌릴 수 있다.</li>
                    </ul>
                    <div className="mu-example">
                        <span className="mu-example-comment" aria-hidden="true">&#47;* X *&#47;</span>
                        <strong className="blind">이렇게 작업하면 안됩니다.</strong>
                        <p className="mu-example-desc">오류 입력 양식에 붉은 색 보더 처리. <br aria-hidden="true"/>&#47;&#47; 시각에 의존하고 있다. 문자로 알려야 한다.</p>
                        <p className="mu-example-desc">"입력 양식에 오류가 있습니다." <br aria-hidden="true"/>&#47;&#47; 오류 식별 불가.</p>
                        <p className="mu-example-desc">"로그인 오류. 비밀번호는 특수문자, 숫자, 알파벳을 하나 이상 포함해야 합니다." <br aria-hidden="true"/>&#47;&#47; 정정 의견이 보안을 해치고 있음.</p>
                        <p className="mu-example-desc">여러 단계(여러 페이지)에 걸쳐 작성한 내용 중 이전 단계의 내용을 검토할 수 없고 제출 후 수정할 수 없음. <br aria-hidden="true"/>&#47;&#47; 제출 전 또는 제출 후 수정할 수 있어야 한다.</p>
                        <br aria-hidden="true"/>
                        <span className="mu-example-comment">&#47;* O *&#47;</span>
                        <strong className="blind">이렇게 작업하여야 합니다.</strong>
                        <p className="mu-example-desc">"생년월일 양식에 오류가 있습니다. 입력 형식은 yyyy-mm-dd 입니다." <br aria-hidden="true"/>&#47;&#47; 오류 식별 가능. 정정 의견 제시.</p>
                        <p className="mu-example-desc">"아이디 또는 비밀번호 입력 오류. 5회 이상 오류 발생 시 계정잠금 상태로 전환합니다." <br aria-hidden="true"/>&#47;&#47; 오류 식별 가능. 정정 의견 제시. 보안을 해치지 않음.</p>
                        <p className="mu-example-desc">여러 단계(여러 페이지)에 걸쳐 작성한 내용 중 이전 단계의 내용을 검토 후 수정할 수 있음. 또는 이전 단계의 내용을 수정할 수 없지만 제출 후 수정할 수 있음.</p>
                    </div>
                </section>
                <section className={`mu-page-section-sub ${styles[`mu-separate-section`]}`}>
                    <h4 className="mu-page-section-sub-title">HTML 문법을 준수한다.</h4>
                    <ul className="mu-unordered">
                        <li>시작 태그에서 닫는(self-closing) 요소를 제외하고 시작 태그, 종료 태그, 따옴표를 생략하지 않는다.</li>
                        <li>명세에 따라 중첩한다.</li>
                        <li>속성을 중복 선언하지 않는다.</li>
                        <li>모든 id 속성의 값은 하나의 문서 안에서 중복 없이 유일하다.</li>
                    </ul>
                    <div className="mu-code">
                        <pre>
                            <code className={`language-markup`}>
                    {`<!-- X -->
<div><span>...</div> // span 종료 태그 생략 오류.
<span><a><div>...</div></a></span> // span 요소가 div를 감싼 것은 오류.
<div class="aaa" class="bbb">...</div> // 속성은 한 번만 선언해야 한다.
<div id="xyz">...</div><div id="xyz">...</div> // xyz 값은 페이지에서 유일해야 한다.

<!-- O -->
<div><span>...</span></div>
<div><a><div>...</div></a></div>
<div class="aaa bbb">...</div>
<div id="abc">...</div><div id="xyz">...</div>`}
                            </code>
                        </pre>
                    </div>
                </section>
                <cite className="mu-cite">
                    출처: <a href="https://github.com/lezhin/accessibility" target="_blank" rel="noreferrer noopener" className="mu-link">레진 웹접근성 가이드라인</a>
                </cite>
            </section>
        </>
    );
}

export default AccessibilityOverview;