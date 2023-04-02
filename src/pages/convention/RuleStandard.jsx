import React, { useEffect } from "react";
import Prism from 'prismjs';

function RuleStandard() {
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
            <h2 className="mu-page-title">표준 규칙</h2>
            <section className="mu-page-section">
                <h3 id="rule-basic" className="mu-page-section-title">기본문서</h3>
<div className="mu-code">
      <pre>
        <code className={`language-markup`}>
{`<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge;Chromeframe=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="keywords" content="">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="generator" content="">
        <meta name="robots" content="ALL">
        <meta property="og:type" content="">
        <meta property="og:title" content="">
        <meta property="og:description" content="">
        <meta property="og:image" content="">
        <meta property="og:url" content="">
        <title>페이지명 | 사이트명</title>
        <link rel="shortcut icon" type="image/x-icon" href="" />
        <link rel="stylesheet" type="text/css" href="">
        <script src=""></script>
    </head>
    <body>
    </body>
</html>`}
        </code>
      </pre>
    </div>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-semantic" className="mu-page-section-title">Semantic Markup</h3>
                <div className="mu-table-wrap">
                    <table className="mu-table vertical">
                        <colgroup>
                            <col style={{ width: "20%"}} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;article&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;aside&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;details&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 <span className="mu-code-label">&lt;summary&gt;</span> 요소를 통해 제공할 수 있습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;figcaption&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        부모 <span className="mu-code-label">&lt;figure&gt;</span> 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타냅니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;figure&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        독립적인 콘텐츠를 표현합니다. <span className="mu-code-label">&lt;figcaption&gt;</span> 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;footer&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;header&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;main&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        문서 <span className="mu-code-label">&lt;body&gt;</span>의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;mark&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;nav&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;section&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 <span className="mu-code-label">&lt;section&gt;</span>은 제목을 포함하지만, 항상 그런 것은 아닙니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;summary&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        <span className="mu-code-label">&lt;details&gt;</span> 요소의 공개 상자에 대한 요약, 캡션 또는 범례를 지정합니다. <span className="mu-code-label">&lt;summary&gt;</span> 요소를 클릭하면 상위 <span className="mu-code-label">&lt;details&gt;</span> 요소의 상태가 열리고 닫힙니다.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="mu-code-font">
                                    <div className="mu-table-cell">
                                        &lt;time&gt;
                                    </div>
                                </th>
                                <td>
                                    <div className="mu-table-cell">
                                        시간의 특정 지점 또는 구간을 나타냅니다. datetime 특성의 값을 지정해 보다 적절한 검색 결과나, 알림 같은 특정 기능을 구현할 때 사용할 수 있습니다.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="mu-page-section">
                <h3 id="rule-symbol" className="mu-page-section-title">특수기호 Entity name</h3>
                <ul className="mu-unordered">
                    <li>특수기호는 <a href="https://unicode-table.com/kr/html-entities/" target="_blank" rel="noreferrer noopener" className="mu-link">Entity name</a>을 사용하여 entity 코드로 변환한다.</li>
                </ul>
            </section>
        </>
    );
}

export default RuleStandard;