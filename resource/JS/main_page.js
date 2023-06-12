import { header_maker } from "./header_page.js";
import { nav_maker } from "./nav_page.js";
import { main_srch_and_rlst } from "./main_func_page.js";
import { footer_maker } from "./footer_page.js";
import { main_function } from "./main_function.js";

const $div = document.querySelector("#theme_page");
const $header = document.createElement("header");
const $nav = document.createElement("nav");
const $main = document.createElement("main");
const $footer = document.createElement("footer");

$div.setAttribute("class", "bg-red-200");
$div.innerHTML = "";

$header.setAttribute("id", "header_page");
$header.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$div.appendChild($header);
header_maker();

$nav.setAttribute("id", "nav_page");
$nav.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$div.appendChild($nav);
nav_maker();

$main.setAttribute("id", "main_page");
$main.setAttribute("class", "grid");
$div.appendChild($main);
main_srch_and_rlst();

$footer.setAttribute("id", "footer_page");
$footer.setAttribute("class", "h-300 m-5 mb-3 rounded");
$div.appendChild($footer);
footer_maker();

main_function();


