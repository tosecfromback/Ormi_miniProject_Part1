import { header_maker } from "./Component/headerArea.js";
import { nav_maker } from "./Component/navArea.js";
import { footer_maker } from "./Component/footerArea.js";
import { main_srch_and_rlst } from "./Component/mainArea.js";
import { page_chng } from "./Component/Function/nav_function.js";


const $div = document.querySelector("#theme_Area");
const $header = document.createElement("header");
const $nav = document.createElement("nav");
const $main = document.createElement("main");
const $footer = document.createElement("footer");

$div.setAttribute("class", "bg-red-200");
$div.innerHTML = "";

$header.setAttribute("id", "header_Area");
$header.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$div.appendChild($header);
header_maker();

$nav.setAttribute("id", "nav_Area");
$nav.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$div.appendChild($nav);
nav_maker();

$main.setAttribute("id", "main_Area");
$main.setAttribute("class", "grid");
$div.appendChild($main);
main_srch_and_rlst($main);

$footer.setAttribute("id", "footer_Area");
$footer.setAttribute("class", "h-300 m-5 mb-3 rounded");
$div.appendChild($footer);
footer_maker();

page_chng();