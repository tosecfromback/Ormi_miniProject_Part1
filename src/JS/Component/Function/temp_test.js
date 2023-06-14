// 제출테스트용
export function temp_result_list(item){
    const $ttr = document.querySelector("#tempTestResult");
    $ttr.innerHTML = "";
    
    const tempUltag = document.createElement("ul");
    $ttr.appendChild(tempUltag);

    let temp_array = {};
    tempUltag.textContent = "제출테스트의 결과는 다음과 같습니다."
    temp_array = Object.entries(item);
    for (const item of temp_array) {
        const tempLi = document.createElement("li");
        tempLi.textContent = item;
        tempUltag.appendChild(tempLi);
    }
}

// url 테스트용
export function temp_test_url_ready(requestData){
    const $ttr = document.querySelector("#tempTestResult");
    $ttr.innerHTML = "";
    
    const tempUltag = document.createElement("ul");
    $ttr.appendChild(tempUltag);

    tempUltag.textContent = "준비된 url은 다음과 같습니다."
    const temp_test_url = document.createElement("a")
    temp_test_url.setAttribute("href", requestData)
    temp_test_url.textContent = requestData
    tempUltag.appendChild(temp_test_url)
}

// 요청 테스트용
export function temp_test_complete(){
    const $ttr = document.querySelector("#tempTestResult");
    $ttr.innerHTML = "";
    
    const tempUltag = document.createElement("ul");
    $ttr.appendChild(tempUltag);

    tempUltag.textContent = "요청테스트 완료"
}
