/**
 * 
 * @param {Array} text_ready Input으로 사용자의 입력으로 받은 배열
 * @param {String} requesturl 요청을 받기위해 변환한 url의 문자열
 * @returns 
 */
export function url_change(text_ready, requesturl){
    requesturl = requesturl.concat(encodeURI(text_ready.kwd));
    requesturl = requesturl.concat("&pageNum=1&pageSize=50&detailSearch=true&f1=title&v1=");
    requesturl = requesturl.concat(encodeURI(text_ready.title));
    requesturl = requesturl.concat("&f2=author&v2=");
    requesturl = requesturl.concat(encodeURI(text_ready.author));
    requesturl = requesturl.concat("&f3=publisher&v3=");
    requesturl = requesturl.concat(encodeURI(text_ready.publisher));
    requesturl = requesturl.concat("&apiType=json");
    return requesturl
}