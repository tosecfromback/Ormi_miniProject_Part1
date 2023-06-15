/**
 * 
 * @param {Array} resultJSON JSON 값 저장 공간
 * @param {string} requesturl JSON을 불러올 URL
 * @returns {Array} 불러온 JSON 값을 반환
 */
const call_Api = async (resultJSON ,requesturl) => {
    const res = await fetch(requesturl);
    console.log(resultJSON);
    console.log(Object.keys(resultJSON).length);
    resultJSON = await res.json()
    console.log(resultJSON);
    console.log(Object.keys(resultJSON).length);
    if (Object.keys(resultJSON).length != 0) {
        console.log("해치웠나?")
        return resultJSON
    }
}

export default call_Api