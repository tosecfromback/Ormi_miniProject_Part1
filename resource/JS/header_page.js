export function header_maker() {
    const $p_tag = document.createElement("p");
    const $article = document.createElement("article");

    // 임시 테스트 결과 출력용 article
    $article.setAttribute("id", "tempTestResult");
    $p_tag.textContent = "테스트 결과 임시 출력 공간으로 활용";

    const $header_temp = document.querySelector("#header_page");
    $header_temp.textContent = "helloWrold";
    $header_temp.appendChild($article);
    $article.appendChild($p_tag);

    // 작업시 logo 삽입예정
}
