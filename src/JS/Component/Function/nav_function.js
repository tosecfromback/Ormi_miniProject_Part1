import { chng_lib_list } from "./chng_to_lib_list.js";
import { main_srch_and_rlst } from "../mainArea.js";

export function page_chng() {
    const $body = document.querySelector("#main_Area");
    const $chng_page = document.querySelector("#lib_list");
    $chng_page.addEventListener( "click", (e) => chng_lib_list($body));

    const $back_main = document.querySelector("#back_main");
    $back_main.addEventListener("click", (e) => main_srch_and_rlst($body));
}