// 링크를 통해서 Github에 업로드 해 놓은 Json파일을 불러와 전국의대표도서관링크표시
let lib_json = new XMLHttpRequest();
let lib_list_data = {};
lib_json.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/resource/Json/lib_link.json', true);
lib_json.send();

// JSON으로 불러온 값을 Parse
lib_json.onload = function(){
    if (lib_json.status === 200){
        console.log(lib_json.status)// 정상적으로 값을 불러오는 것을 확인하기 위한 check
        lib_list_data = JSON.parse(lib_json.responseText);
    }
    else {
        console.log("현재 참조파일을 불러 올 수 없습니다.")
    }
}

let change_page = document.querySelector("#chng_page");
change_page.addEventListener("click", (e) => {
    body.innerHTML= '<section id="lib_listset"><ul id="korea_lib_list"></ul></section>';
    for (const item of lib_list_data) {

        let lib_li = document.createElement("li");
        lib_li.innerText = item.lib_local;
        let lib_name = document.createElement("span");
        lib_name.innerText = item.lib_name;
        let lib_adrs = document.createElement("span");
        lib_adrs.innerText = item.lib_adrs;
        let lib_link = document.createElement("span");
        lib_link.innerText = item.lib_link;
        
        lib_li.appendChild(lib_name);
        lib_li.appendChild(lib_adrs);
        lib_li.appendChild(lib_link);

        body.appendChild(lib_li)
    }

})