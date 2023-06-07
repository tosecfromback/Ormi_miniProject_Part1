let json_test = new XMLHttpRequest();
let json_result = {};
json_test.open('GET', 'https://www.nl.go.kr/NL/search/openApi/searchKolisNet.do?key=f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e&kwd=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0&pageNum=1&pageSize=50&detailSearch=true&f1=title&v1=%EC%BD%94%EB%94%A9%EC%9D%B8%ED%84%B0%EB%B7%B0%EC%99%84%EC%A0%84%EB%B6%84%EC%84%9D&f2=author&v2=%EA%B2%8C%EC%9D%BC%EB%9D%BC%ED%81%AC%EB%A7%8C&f3=publisher&v3=%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8&apiType=json', true);
json_test.send();

json_test.onload = function(){
    if (json_test.status === 200){
        console.log(json_test.status)
        json_result = JSON.parse(json_test.responseText);
        console.log(json_result);
    }
}


// json_test.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/test_result02.json', true);

// https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/test_result02.json

const API_form = {
    "key" : "f22eb1b2769cf9c57c567707017a7ae2d49711d6a0d5dabe5d1e2bbdff8bce9e",
    "f1" : "title",
    "v1" : "",
    "f2" : "author",
    "v2" : "",
    "f3" : "publisher",
    "v3" : "",
}