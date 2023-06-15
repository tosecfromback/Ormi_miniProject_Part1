import * as tt from "./temp_test.js"
import { in_to_array } from "./text_to_array.js";
import { url_change } from "./url_change.js";
import call_Api  from "./call_result.js"


export function Srch_and_Rslt() {

    const $ready_to_text = document.querySelector("#kwd_to_text");
    const $url_maker = document.querySelector("#url_test");
    const $requestBtn = document.querySelector("#request_test");
    const $resultBtn = document.querySelector("#result_test");

    const $get_result = document.querySelector("#get_result");
    
    // 도서검색 값 준비
    let text_ready = {
        kwd : '',
        title : '',
        author : '',
        publisher : '',
    };

    
    // 도서검색 url 준비
    let requestData = "https://www.nl.go.kr/NL/search/openApi/search.do?key=f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e&kwd=";

    // 도서검색 결과 창 출력
    let searchResult = {};
    
    $get_result.addEventListener("click", (e) => {
        in_to_array(text_ready);
        console.log(text_ready)
        tt.temp_result_list(text_ready);

        requestData = url_change(text_ready, requestData);
        console.log(requestData)
        tt.temp_test_url_ready(requestData);

    })


    $ready_to_text.addEventListener("click", (e) => {
        in_to_array(text_ready);
        tt.temp_result_list(text_ready);
    })

    $url_maker.addEventListener("click", (e) => {
        requestData = url_change(text_ready, requestData);
        tt.temp_test_url_ready(requestData);
    })


    $requestBtn.addEventListener("click", (e) => {
        call_Api(searchResult,requestData);
    });

    

    // 결과 출력
    const $result_page = document.querySelector("#result_section");

    $resultBtn.addEventListener("click", (e) => {
        
        console.log(searchResult);
        $result_page.innerHTML = "";
        let result_count = 0;
        const kwd_article = document.createElement("article");
        kwd_article.setAttribute("id", "srch_kwd")
        $result_page.appendChild(kwd_article)

        const result_ment_frt = document.createElement("p");
        // result_ment.setAttribute("id", "rslt_ment_front")
        result_ment_frt.textContent = "요청하신 검색의 키워드는 "
        const result_ment_kwd = document.createElement("p");
        result_ment_kwd.setAttribute("id", "kwd")
        result_ment_kwd.textContent = searchResult.kwd
        const result_ment_end = document.createElement("p");
        // result_ment.setAttribute("id", "rslt_ment_end")
        result_ment_end.textContent = "입니다"
        kwd_article.appendChild(result_ment_frt)
        kwd_article.appendChild(result_ment_kwd)
        kwd_article.appendChild(result_ment_end)

        for (const item of searchResult.result) {
            result_count += 1;
            const rslt_article = document.createElement("article");
            // rslt_article.setAttribute("id", "rslt"+result_count)
            $result_page.appendChild(rslt_article);

            const rslt_num = document.createElement("h2");
            rslt_num.setAttribute("class", "sr-only");
            rslt_num.textContent = result_count;
            rslt_article.appendChild(rslt_num);

            const tbl_base = document.createElement("table");
            rslt_article.appendChild(tbl_base);

            const tr_title = document.createElement("tr");
            const tr_author = document.createElement("tr");
            const tr_publisher = document.createElement("tr");
            const tr_callNo = document.createElement("tr");
            const tr_menu = document.createElement("tr");
            
            tbl_base.appendChild(tr_title);
            tbl_base.appendChild(tr_author);
            tbl_base.appendChild(tr_publisher);
            tbl_base.appendChild(tr_callNo);
            tbl_base.appendChild(tr_menu);
            
            const td_title = document.createElement("td");
            td_title.setAttribute("id", "td_tag")
            td_title.textContent = "서명";
            tr_title.appendChild(td_title);
            const td_author = document.createElement("td");
            td_author.setAttribute("id", "td_tag")
            td_author.textContent = "저자";
            tr_author.appendChild(td_author);
            const td_publisher = document.createElement("td");
            td_publisher.setAttribute("id", "td_tag")
            td_publisher.textContent = "출판사";
            tr_publisher.appendChild(td_publisher);
            const td_callNo = document.createElement("td");
            td_callNo.setAttribute("id", "td_tag")
            td_callNo.textContent = "분류번호";
            tr_callNo.appendChild(td_callNo);
            const td_menu = document.createElement("td");
            td_menu.setAttribute("id", "td_tag")
            td_menu.textContent = "온/오프";
            tr_menu.appendChild(td_menu);
            
            const rslt_title = document.createElement("td");
            const rslt_author = document.createElement("td");
            const rslt_publisher = document.createElement("td");
            const rslt_callNo = document.createElement("td");
            const rslt_menu = document.createElement("td");
            
            rslt_title.innerHTML = item.titleInfo;
            rslt_author.innerHTML = item.authorInfo;
            rslt_publisher.innerHTML = item.pubInfo;
            rslt_callNo.textContent = item.callNo;
            rslt_menu.textContent = item.menuName;
            
            tr_title.appendChild(rslt_title);
            tr_author.appendChild(rslt_author);
            tr_publisher.appendChild(rslt_publisher);
            tr_callNo.appendChild(rslt_callNo);
            tr_menu.appendChild(rslt_menu);

        }

    })

}