// import header_maker() from header_page.js
// import nav_page.js

const $div = document.querySelector("#theme_page");
const $header = document.createElement("header");
const $nav = document.createElement("nav");
const $main = document.createElement("main");
const $footer = document.createElement("footer");

$div.setAttribute("class", "bg-red-200");
$div.innerHTML = ""

$header.setAttribute("id", "header_page");
$header.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$header.textContent = "headerArea"

$nav.setAttribute("id", "nav_page");
$nav.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$nav.textContent = "navArea"

$main.setAttribute("id", "main_page");
// $main.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$main.textContent = "mainArea"

$footer.setAttribute("id", "footer_page");
$footer.setAttribute("class", "h-300 bg-white m-5 mb-3 rounded");
$footer.textContent = "footerArea"


$div.appendChild($header);
$div.appendChild($nav);
$div.appendChild($main);
$div.appendChild($footer);
