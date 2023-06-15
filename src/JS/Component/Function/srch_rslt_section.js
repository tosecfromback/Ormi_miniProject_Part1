import { Srch_and_Rslt } from "./main_function.js"

export function Srch_rslt(){
    const $body = document.querySelector("#main_Area");
    $body.innerHTML = "";

    const $srch_section = document.createElement("section");
    const $rslt_section = document.createElement("section");
    
    const kwd_tag = document.createElement("p");
    const kwd_input = document.createElement("input");
    const ttl_tag = document.createElement("p");
    const ttl_input = document.createElement("input");
    const ath_tag = document.createElement("p");
    const ath_input = document.createElement("input");
    const pbl_tag = document.createElement("p");
    const pbl_input = document.createElement("input");
    const temp_comment = document.createElement("p");
    
    const test_submit = document.createElement("button");
    const test_url = document.createElement("button");
    const test_request = document.createElement("button");
    const test_result = document.createElement("button");

    const submit_btn = document.createElement("button");
    
    $srch_section.setAttribute("id", "search_section");
    $srch_section.setAttribute("class", "grid bg-white rounded");
    
    kwd_tag.textContent = "키워드";
    ttl_tag.textContent = "서명";
    ath_tag.textContent = "저자";
    pbl_tag.textContent = "출판사";
    
    kwd_input.setAttribute("id", "keyword_text");
    kwd_input.setAttribute("placeholder", "키워드");
    kwd_input.setAttribute("value", "코딩 인터뷰");
    ttl_input.setAttribute("id", "title_text");
    ttl_input.setAttribute("placeholder", "서명");
    ttl_input.setAttribute("value", "완전 분석");
    ath_input.setAttribute("id", "author_text");
    ath_input.setAttribute("placeholder", "저자");
    ath_input.setAttribute("value", "게일 라크만");
    pbl_input.setAttribute("id", "publisher_text");
    pbl_input.setAttribute("placeholder", "출판사");
    pbl_input.setAttribute("value", "인사이트");
    
    test_submit.setAttribute("type", "button");
    test_submit.setAttribute("id", "kwd_to_text");
    test_submit.textContent = "1.제출테스트(통합에서 가능)";
    test_url.setAttribute("type", "button");
    test_url.setAttribute("id", "url_test");
    test_url.textContent = "2.url테스트(통합에서 가능)";
    test_request.setAttribute("type", "button");
    test_request.setAttribute("id", "request_test");
    test_request.textContent = "3.요청테스트(통합에서 구현중)";
    test_result.setAttribute("type", "button");
    test_result.setAttribute("id", "result_test");
    test_result.textContent = "4.결과출력테스트";

    submit_btn.setAttribute("type", "button");
    submit_btn.setAttribute("id", "get_result");
    submit_btn.textContent = "제출버튼 통합 테스트 중"
    
    $srch_section.appendChild(kwd_tag);
    $srch_section.appendChild(kwd_input);
    $srch_section.appendChild(test_submit);
    $srch_section.appendChild(ttl_tag);
    $srch_section.appendChild(ttl_input);
    $srch_section.appendChild(test_url);
    $srch_section.appendChild(ath_tag);
    $srch_section.appendChild(ath_input);
    $srch_section.appendChild(test_request);
    $srch_section.appendChild(pbl_tag);
    $srch_section.appendChild(pbl_input);
    $srch_section.appendChild(test_result);

    $srch_section.appendChild(submit_btn);
    
    $rslt_section.setAttribute("id", "result_section");
    
    temp_comment.textContent = "결과출력 시 해당 멘트가 지워지고 해당 section에 article로 결과 출력";
    
    $rslt_section.appendChild(temp_comment);
    
    $body.appendChild($srch_section);
    $body.appendChild($rslt_section);

    Srch_and_Rslt();
}
