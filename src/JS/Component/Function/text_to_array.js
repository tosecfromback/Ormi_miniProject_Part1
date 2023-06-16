/**
 * 
 * @param {Array} input_array kwd, ttl, ath, pbl순으로 각각 키워드, 서명, 저자, 출판사의 입력값
 */
export function in_to_array(input_array){
    let $kwd_in = document.querySelector("#keyword_text");
    let $ttl_in = document.querySelector("#title_text");
    let $ath_in = document.querySelector("#author_text");
    let $pbl_in = document.querySelector("#publisher_text");

    input_array.kwd = $kwd_in.value.replace(/ /g,'+');
    input_array.title = $ttl_in.value.replace(/ /g,'+');
    input_array.author = $ath_in.value.replace(/ /g,'+');
    input_array.publisher = $pbl_in.value.replace(/ /g,'+');
}