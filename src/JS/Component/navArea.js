export function nav_maker() {
    const $nav_page = document.querySelector("#nav_Area");
    
    const $btn_go_main = document.createElement("button");
    const $btn_go_lib_list = document.createElement("button");

    $btn_go_main.setAttribute("id", "back_main");
    $btn_go_main.textContent = "도서검색";

    $btn_go_lib_list.setAttribute("id", "lib_list");
    $btn_go_lib_list.textContent = "전국의 도서관";


    $nav_page.appendChild($btn_go_main);
    $nav_page.appendChild($btn_go_lib_list);

}