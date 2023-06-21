export function setReslut($result_section,resultData) {
    $result_section.innerHTML = "";
    let result_count = 0;
    const kwd_article = document.createElement("article");
    kwd_article.setAttribute("id", "srch_kwd")
    $result_section.appendChild(kwd_article)

    const result_ment_frt = document.createElement("p");
    // result_ment.setAttribute("id", "rslt_ment_front")
    result_ment_frt.textContent = "요청하신 검색의 키워드는 "
    const result_ment_kwd = document.createElement("p");
    result_ment_kwd.setAttribute("id", "kwd")
    result_ment_kwd.textContent = resultData.kwd
    const result_ment_end = document.createElement("p");
    // result_ment.setAttribute("id", "rslt_ment_end")
    result_ment_end.textContent = "입니다"
    kwd_article.appendChild(result_ment_frt)
    kwd_article.appendChild(result_ment_kwd)
    kwd_article.appendChild(result_ment_end)

    for (const item of resultData.result) {
        result_count += 1;
        const rslt_article = document.createElement("article");
        // rslt_article.setAttribute("id", "rslt"+result_count)
        $result_section.appendChild(rslt_article);

        const rslt_num = document.createElement("h2");
        rslt_num.setAttribute("class", "sr-only");
        rslt_num.textContent = result_count;
        rslt_article.appendChild(rslt_num);

        const tbl_base = document.createElement("table");
        rslt_article.appendChild(tbl_base);

        const tr_title = document.createElement("tr");
        const tr_author = document.createElement("tr");
        const tr_publisher = document.createElement("tr");
        const tr_callNo = document.createElement("tr");
        const tr_menu = document.createElement("tr");
        
        tbl_base.appendChild(tr_title);
        tbl_base.appendChild(tr_author);
        tbl_base.appendChild(tr_publisher);
        tbl_base.appendChild(tr_callNo);
        tbl_base.appendChild(tr_menu);
        
        const td_title = document.createElement("td");
        td_title.setAttribute("id", "td_tag")
        td_title.textContent = "서명";
        tr_title.appendChild(td_title);
        const td_author = document.createElement("td");
        td_author.setAttribute("id", "td_tag")
        td_author.textContent = "저자";
        tr_author.appendChild(td_author);
        const td_publisher = document.createElement("td");
        td_publisher.setAttribute("id", "td_tag")
        td_publisher.textContent = "출판사";
        tr_publisher.appendChild(td_publisher);
        const td_callNo = document.createElement("td");
        td_callNo.setAttribute("id", "td_tag")
        td_callNo.textContent = "분류번호";
        tr_callNo.appendChild(td_callNo);
        const td_menu = document.createElement("td");
        td_menu.setAttribute("id", "td_tag")
        td_menu.textContent = "온/오프";
        tr_menu.appendChild(td_menu);
        
        const rslt_title = document.createElement("td");
        const rslt_author = document.createElement("td");
        const rslt_publisher = document.createElement("td");
        const rslt_callNo = document.createElement("td");
        const rslt_menu = document.createElement("td");
        
        rslt_title.innerHTML = item.titleInfo;
        rslt_author.innerHTML = item.authorInfo;
        rslt_publisher.innerHTML = item.pubInfo;
        rslt_callNo.textContent = item.callNo;
        rslt_menu.textContent = item.menuName;
        
        tr_title.appendChild(rslt_title);
        tr_author.appendChild(rslt_author);
        tr_publisher.appendChild(rslt_publisher);
        tr_callNo.appendChild(rslt_callNo);
        tr_menu.appendChild(rslt_menu);

    }
}