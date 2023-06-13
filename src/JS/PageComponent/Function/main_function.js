import * as tt from "./temp_test.js"
export default function Srch_and_Rslt() {
    let $kwd_text = document.querySelector("#keyword_text");
    let $ttl_text = document.querySelector("#title_text");
    let $ath_text = document.querySelector("#author_text");
    let $pbl_text = document.querySelector("#publisher_text");

    let $ready_to_text = document.querySelector("#kwd_to_text");
    let $url_maker = document.querySelector("#url_test");
    let $requestTest = document.querySelector("#request_test");
    let $resultTest = document.querySelector("#result_test");


    // 도서검색 값 준비
    let text_ready = {
        kwd : '',
        title : '',
        author : '',
        publisher : '',
    };

    $ready_to_text.addEventListener("click", (e) => {
        text_ready.kwd = $kwd_text.value.replace(/ /g,'+');
        text_ready.title = $ttl_text.value.replace(/ /g,'+');
        text_ready.author = $ath_text.value.replace(/ /g,'+');
        text_ready.publisher = $pbl_text.value.replace(/ /g,'+');
        tt.temp_result_list(text_ready);
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
        console.log(requestData)
        tt.temp_test_url_ready(requestData);
    })


    // 도서검색 결과 창 출력
    // const sampleUrl = "https://www.nl.go.kr/NL/search/openApi/search.do?key=f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e&kwd=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0&pageNum=1&pageSize=50&detailSearch=true&f1=title&v1=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0%EC%99%84%EC%A0%84%EB%B6%84%EC%84%9D&f2=author&v2=%EA%B2%8C%EC%9D%BC%EB%9D%BC%ED%81%AC%EB%A7%8C&f3=publisher&v3=%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8&apiType=json"
    let sampleResult = {};

    const sampleTest = async () => {
        const res = await fetch(requestData);
        sampleResult = await res.json().then(tt.temp_test_complete());
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

}