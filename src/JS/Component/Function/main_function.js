import * as tt from "./temp_test.js"
import { in_to_array } from "./text_to_array.js";
import { url_change } from "./url_change.js";
import call_Api  from "./call_result.js"
import { setReslut } from "./set_result.js";


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
    
    // 결과 출력
    const $result_section = document.querySelector("#result_section");

    $get_result.addEventListener("click", (e) => {
        in_to_array(text_ready);
        console.log(text_ready)
        tt.temp_result_list(text_ready);

        requestData = url_change(text_ready, requestData);
        console.log(requestData)
        tt.temp_test_url_ready(requestData);

        call_Api(requestData)
        .then(res => {
            searchResult = res;
            console.log(searchResult)

            setReslut($result_section,searchResult)
        })

    })
}