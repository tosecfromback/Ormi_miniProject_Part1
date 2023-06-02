let json_test = new XMLHttpRequest();
json_test.open('GET', 'https://raw.githubusercontent.com/tosecfromback/Ormi_miniProject_Part1/main/test_result01.json', true);

json_test.onload = function(){
    if (json_test.staus === 200){
        let json_result = JSON.parse(json_test.responseText);
        console.log(json_result);
    }
}

json_test.send();