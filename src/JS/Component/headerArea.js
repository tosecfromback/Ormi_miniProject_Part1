export function header() {
    const $header = document.createElement("header");
    $header.setAttribute("id", "header_Area");
    $header.setAttribute("class", "bg-white rounded");
    
    $header.textContent = "CSS 작업 후 로고로 변경, 우측에 nav를 넣을 예정";
    
    // 임시 테스트 결과 출력용 article
    const $article = document.createElement("article");
    $article.setAttribute("id", "tempTestResult");
    const $p_tag = document.createElement("p");
    $p_tag.textContent = "테스트 결과 임시 출력 공간으로 활용";
    
    $header.appendChild($article);
    $article.appendChild($p_tag);

    // 작업시 logo 삽입예정
    return $header;
}
