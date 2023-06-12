// import { main_srch_and_rlst } from "./main_func_page.js";
import { chng_lib_list } from "./chng_to_lib_list.js";
import { main_srch_and_rlst } from "./main_func_page.js";
import * as temp from "./temp_test.js"
import {book_input} from "./ready_book_input.js"

export function main_function() {

    const $body = document.querySelector("#main_page");
    const $back_main = document.querySelector("#back_main")
    const $go_list = document.querySelector("#lib_list")
    const $ready_to_text = document.querySelector("#kwd_to_text");
    const $url_maker = document.querySelector("#url_test");
    const $requestTest = document.querySelector("#request_test");
    const $resultTest = document.querySelector("#result_test");

    const $kwd_text = document.querySelector("#keyword_text");
    const $ttl_text = document.querySelector("#title_text");
    const $ath_text = document.querySelector("#author_text");
    const $pbl_text = document.querySelector("#publisher_text");


    $back_main.addEventListener("click", (e) => main_srch_and_rlst());
    $go_list.addEventListener("click", (e) => chng_lib_list($body));

    $ready_to_text.addEventListener("click", (e) => {
        book_input($kwd_text, $ttl_text, $ath_text, $pbl_text)
    // temp.temp_result_list()
    });

    $url_maker.addEventListener("click", (e) => temp.temp_test_url_ready());
    $requestTest.addEventListener("click", (e) => temp.temp_test_complete());
    $resultTest.addEventListener("click", (e) => temp.temp_result_list());
    
    
}
