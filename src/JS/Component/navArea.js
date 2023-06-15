export function nav() {
    const $nav = document.createElement("nav");
    $nav.setAttribute("id", "nav_Area");
    $nav.setAttribute("class", "bg-white rounded");

    
    const $btn_go_main = document.createElement("button");
    const $btn_go_lib_list = document.createElement("button");

    $btn_go_main.setAttribute("id", "back_main");
    $btn_go_main.textContent = "도서검색";

    $btn_go_lib_list.setAttribute("id", "lib_list");
    $btn_go_lib_list.textContent = "전국의 도서관";


    $nav.appendChild($btn_go_main);
    $nav.appendChild($btn_go_lib_list);
    

    return $nav

}