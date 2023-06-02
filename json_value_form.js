let json_test = new XMLHttpRequest();
let json_result = {};
json_test.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/test_result01.json', true);
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