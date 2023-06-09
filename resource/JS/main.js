// 임시결과 출력용
const $ttr = document.querySelector("#tempTestResult");
const tempUltag = document.createElement("ul");

// 제출테스트용
$ttr.appendChild(tempUltag);
let temp_array = {};
function temp_result_list(item){
    tempUltag.textContent = "제출테스트의 결과는 다음과 같습니다."
    temp_array = Object.entries(item);
    for (const item of temp_array) {
        const tempLi = document.createElement("li");
        tempLi.textContent = item;
        tempUltag.appendChild(tempLi);
    }
}

// url 테스트용
function temp_test_url_ready(){
    tempUltag.textContent = "준비된 url은 다음과 같습니다."
    const temp_test_url = document.createElement("a")
    temp_test_url.setAttribute("href", requestData)
    temp_test_url.textContent = requestData
    tempUltag.appendChild(temp_test_url)
}

// 요청 테스트용
function temp_test_complete(){
    tempUltag.textContent = "요청테스트 완료"
}

// 기존 코드는 여기부터
let $body = document.querySelector("#main_page");
let $kwd_text = document.querySelector("#keyword_text");
let $ttl_text = document.querySelector("#title_text");
let $ath_text = document.querySelector("#author_text");
let $pbl_text = document.querySelector("#publisher_text");
let $ready_to_text = document.querySelector("#kwd_to_text");
let $url_maker = document.querySelector("#url_test");
let $requestTest = document.querySelector("#request_test");
let $resultTest = document.querySelector("#result_test");

// 검색페이지 출력 및 검색페이지 복귀
const $set_main = document.querySelector("#search_page");

function searchBuild(){
    const $srch_section = document.createElement("section");
    const $rslt_section = document.createElement("section");
    $body.innerHTML = "";

    const kwd_tag = document.createElement("p");
    const kwd_input = document.createElement("input");
    const ttl_tag = document.createElement("p");
    const ttl_input = document.createElement("input");
    const ath_tag = document.createElement("p");
    const ath_input = document.createElement("input");
    const pbl_tag = document.createElement("p");
    const pbl_input = document.createElement("input");
    const temp_comment = document.createElement("p");

    const test_submit = document.createElement("button");
    const test_url = document.createElement("button");
    const test_request = document.createElement("button");
    const test_result = document.createElement("button");

    $srch_section.setAttribute("id", "page_search");
    $srch_section.setAttribute("class", "grid h-1000 bg-white m-5 mb-3 rounded");

    kwd_tag.textContent = "키워드";
    ttl_tag.textContent = "서명";
    ath_tag.textContent = "저자";
    pbl_tag.textContent = "출판사";

    kwd_input.setAttribute("id", "keyword_text");
    kwd_input.setAttribute("placeholder", "키워드");
    kwd_input.textContent = "코딩 인터뷰";
    ttl_input.setAttribute("id", "title_text");
    ttl_input.setAttribute("placeholder", "서명");
    ttl_input.textContent = "코딩 인터뷰";
    ath_input.setAttribute("id", "author_text");
    ath_input.setAttribute("placeholder", "저자");
    ath_input.textContent = "코딩 인터뷰";
    pbl_input.setAttribute("id", "publisher_text");
    pbl_input.setAttribute("placeholder", "출판사");
    pbl_input.textContent = "코딩 인터뷰";

    test_submit.setAttribute("type", "button");
    test_submit.setAttribute("id", "kwd_to_text");
    test_submit.textContent = "제출테스트";
    test_url.setAttribute("type", "button");
    test_url.setAttribute("id", "url_test");
    test_url.textContent = "url테스트";
    test_request.setAttribute("type", "button");
    test_request.setAttribute("id", "request_test");
    test_request.textContent = "요청테스트";
    test_result.setAttribute("type", "button");
    test_result.setAttribute("id", "result_test");
    test_result.textContent = "결과출력테스트";
    
    $srch_section.appendChild(kwd_tag);
    $srch_section.appendChild(kwd_input);
    $srch_section.appendChild(test_submit);
    $srch_section.appendChild(ttl_tag);
    $srch_section.appendChild(ttl_input);
    $srch_section.appendChild(test_url);
    $srch_section.appendChild(ath_tag);
    $srch_section.appendChild(ath_input);
    $srch_section.appendChild(test_request);
    $srch_section.appendChild(pbl_tag);
    $srch_section.appendChild(pbl_input);
    $srch_section.appendChild(test_result);
    
    $rslt_section.setAttribute("id", "page_result");
    
    temp_comment.textContent = "결과출력 시 해당 멘트가 지워지고 해당 section에 article로 결과 출력";
    
    $rslt_section.appendChild(temp_comment);

    $body.appendChild($srch_section);
    $body.appendChild($rslt_section);
    return;
}

$set_main.addEventListener("click", (e) => {
    searchBuild();
})

// 전국도서관 리스트 페이지 변경
let lib_json = new XMLHttpRequest();
let lib_list_data = {};
lib_json.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/resource/Json/lib_link.json', true);
lib_json.send();

console.log(lib_json.status)
lib_json.onload = function(){
    if (lib_json.status === 200){
        lib_list_data = JSON.parse(lib_json.responseText);
    }
    else {
        console.log("현재 참조파일을 불러 올 수 없습니다.")
    }
}

let change_page = document.querySelector("#library_list_page");
change_page.addEventListener("click", (e) => {
$body.innerHTML= '<section id="lib_listset"><ul id="korea_lib_list"></ul></section>';
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

        $body.appendChild(lib_li)
    }
})

// 도서검색 값 준비
let text_ready = {
    kwd : '',
    title : '',
    author : '',
    publisher : '',
};

$ready_to_text.addEventListener("click", (e) => {
    text_ready.kwd = $kwd_text.value.replace(/ /g,'');
    text_ready.title = $ttl_text.value.replace(/ /g,'');
    text_ready.author = $ath_text.value.replace(/ /g,'');
    text_ready.publisher = $pbl_text.value.replace(/ /g,'');
    temp_result_list(text_ready);
})
// 도서검색 url 준비

let requestData = "";

$url_maker.addEventListener("click", (e) => {
    requestData = "https://www.nl.go.kr/NL/search/openApi/search.do?key=f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e&kwd=";

    requestData = requestData.concat(encodeURI(text_ready.kwd));
    requestData = requestData.concat("&pageNum=1&pageSize=50&detailSearch=true&f1=title&v1=");
    requestData = requestData.concat(encodeURI(text_ready.title));
    requestData = requestData.concat("&f2=author&v2=");
    requestData = requestData.concat(encodeURI(text_ready.author));
    requestData = requestData.concat("&f3=publisher&v3=");
    requestData = requestData.concat(encodeURI(text_ready.publisher));
    requestData = requestData.concat("&apiType=json");
    temp_test_url_ready();
})


// 도서검색 결과 창 출력
// const sampleUrl = "https://www.nl.go.kr/NL/search/openApi/search.do?key=f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e&kwd=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0&pageNum=1&pageSize=50&detailSearch=true&f1=title&v1=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0%EC%99%84%EC%A0%84%EB%B6%84%EC%84%9D&f2=author&v2=%EA%B2%8C%EC%9D%BC%EB%9D%BC%ED%81%AC%EB%A7%8C&f3=publisher&v3=%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8&apiType=json"
let sampleResult = {};

const sampleTest = async () => {
    const res = await fetch(requestData);
    sampleResult = await res.json().then(temp_test_complete());
}

$requestTest.addEventListener("click", (e) => sampleTest())

// 결과 출력
const $result_page = document.querySelector("#page_result");

$resultTest.addEventListener("click", (e) => {
    $result_page.innerHTML = "";
    const result_ment = document.createElement("p");
    let result_count = 0;

    result_ment.textContent = "요청하신 검색의 정보는 "
    result_ment.textContent = result_ment.textContent.concat(sampleResult.kwd)
    result_ment.textContent = result_ment.textContent.concat(" 입니다.")

    $result_page.appendChild(result_ment);

    for (const item of sampleResult.result) {
        const test_article = document.createElement("article");
        const test_num = document.createElement("h2");
        const test_title = document.createElement("p")
        const test_author = document.createElement("p")
        const test_publisher = document.createElement("p")
        const test_callNo = document.createElement("p")
        const test_menu = document.createElement("p")

        result_count += 1;
        test_num.textContent = result_count;

        test_title.textContent = item.titleInfo;
        test_author.textContent = item.authorInfo;
        test_publisher.textContent = item.pubInfo;
        test_callNo.textContent = item.callNo;
        test_menu.textContent = item.menuName;

        $result_page.appendChild(test_article);

        test_article.appendChild(test_num);
        
        test_article.appendChild(test_title);
        test_article.appendChild(test_author);
        test_article.appendChild(test_publisher);
        test_article.appendChild(test_callNo);
        test_article.appendChild(test_menu);

    }

})
