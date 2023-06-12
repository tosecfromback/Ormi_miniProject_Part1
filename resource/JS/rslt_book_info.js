export function book_result(){
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