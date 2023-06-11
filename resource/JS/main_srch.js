export function main_srch(){
    const $main = document.querySelector("#main_page");

    const $srch_section = document.createElement("section");
        const $rslt_section = document.createElement("section");
        $main.innerHTML = "";
    
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
    
        $srch_section.setAttribute("id", "page_search");
        $srch_section.setAttribute("class", "grid h-1000 bg-white m-5 mb-3 rounded");
    
        kwd_tag.textContent = "키워드";
        ttl_tag.textContent = "서명";
        ath_tag.textContent = "저자";
        pbl_tag.textContent = "출판사";
    
        kwd_input.setAttribute("id", "keyword_text");
        kwd_input.setAttribute("placeholder", "키워드");
        kwd_input.textContent = "코딩 인터뷰";
        ttl_input.setAttribute("id", "title_text");
        ttl_input.setAttribute("placeholder", "서명");
        ttl_input.textContent = "코딩 인터뷰";
        ath_input.setAttribute("id", "author_text");
        ath_input.setAttribute("placeholder", "저자");
        ath_input.textContent = "코딩 인터뷰";
        pbl_input.setAttribute("id", "publisher_text");
        pbl_input.setAttribute("placeholder", "출판사");
        pbl_input.textContent = "코딩 인터뷰";
    
        test_submit.setAttribute("type", "button");
        test_submit.setAttribute("id", "kwd_to_text");
        test_submit.textContent = "제출테스트";
        test_url.setAttribute("type", "button");
        test_url.setAttribute("id", "url_test");
        test_url.textContent = "url테스트";
        test_request.setAttribute("type", "button");
        test_request.setAttribute("id", "request_test");
        test_request.textContent = "요청테스트";
        test_result.setAttribute("type", "button");
        test_result.setAttribute("id", "result_test");
        test_result.textContent = "결과출력테스트";
        
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
        
        $rslt_section.setAttribute("id", "page_result");
        
        temp_comment.textContent = "결과출력 시 해당 멘트가 지워지고 해당 section에 article로 결과 출력";
        
        $rslt_section.appendChild(temp_comment);
    
        $main.appendChild($srch_section);
        $main.appendChild($rslt_section);
}