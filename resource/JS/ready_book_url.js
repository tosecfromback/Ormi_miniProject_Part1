export function book_url(){
    
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
    
}