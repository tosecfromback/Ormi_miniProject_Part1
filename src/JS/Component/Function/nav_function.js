import { lib_list } from "./lib_list_section.js";
import { Srch_rslt } from "./srch_rslt_section.js";


export function page_chng() {
    const $back_main = document.querySelector("#back_main");
    $back_main.addEventListener("click", (e) => {
        Srch_rslt();
    });
    
    const $chng_page = document.querySelector("#lib_list");
    $chng_page.addEventListener( "click", (e) => lib_list());

}