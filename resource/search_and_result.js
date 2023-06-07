const $body = document.querySelector("#main");
const $section = document.createElement("section");
const $article = document.createElement("article");

$section.setAttribute("id", "page_search");
$body.appendChild($section);

const $p = document.createElement("p")
const $input = document.createElement("input");

$input.setAttribute("type", "text");
$input.setAttribute("id", "kwd")
$input.setAttribute("placeholder", "키워드")
$p.textContent = "키워드"
$article.appendChild($p);
$article.appendChild($input);

$input.setAttribute("type", "text");
$input.setAttribute("id", "title")
$input.setAttribute("placeholder", "서명")
$p.textContent = "서명"
$article.appendChild($p);
$article.appendChild($input);

$input.setAttribute("type", "text");
$input.setAttribute("id", "author")
$input.setAttribute("placeholder", "저자")
$p.textContent = "저자"
$article.appendChild($p);
$article.appendChild($input);

$input.setAttribute("type", "text");
$input.setAttribute("id", "publisher")
$input.setAttribute("placeholder", "출판사")
$p.textContent = "출판사"
$article.appendChild($p);
$article.appendChild($input);

$section.setAttribute("id", "page_result");
$body.appendChild($section);

const temp_list = [
    {"kwd" : "키워드"},
    {"ahtuor" : "저자"},
    {"title" : "서명"},
    {"publisher" : "출판사"}
]

input