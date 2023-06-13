export function chng_lib_list(main_page){
    // 전국도서관 리스트 페이지 변경
        let lib_json = new XMLHttpRequest();
        let lib_list_data = {};
        lib_json.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/resource/Json/lib_link.json', true);
        lib_json.send();
        
        lib_json.onload = function(){
            if (lib_json.status === 200){
                lib_list_data = JSON.parse(lib_json.responseText);
                main_page.innerHTML= '<section id="lib_listset"><ul id="korea_lib_list"></ul></section>';
                const lib_list = document.querySelector("#korea_lib_list")
                for (const item of lib_list_data) {
            
                    let lib_li = document.createElement("li");
                    lib_li.innerText = item.lib_local;
                    let lib_name = document.createElement("p");
                    lib_name.innerText = item.lib_name;
                    let lib_adrs = document.createElement("p");
                    lib_adrs.innerText = item.lib_adrs;
                    let lib_link = document.createElement("a");
                    lib_link.setAttribute("href", item.lib_url);
                    lib_link.textContent = item.lib_url;
                    
                    lib_li.appendChild(lib_name);
                    lib_li.appendChild(lib_adrs);
                    lib_li.appendChild(lib_link);
            
                    lib_list.appendChild(lib_li)
                }
            }
            else {
                console.log("현재 참조파일을 불러 올 수 없습니다.")
            }
        }

}