/**
 * 
 * @param {Array} resultJSON JSON 값 저장 공간
 * @param {string} requesturl JSON을 불러올 URL
 * @returns {Array} 불러온 JSON 값을 반환
 */
import { temp_test_complete } from "./temp_test.js";
const call_Api = async (resultJSON ,requesturl) => {
    const res = await fetch(requesturl);
    resultJSON = await res.json()
    console.log(resultJSON);
    console.log(Object.keys(resultJSON).length);
    // if (Object.keys(resultJSON).length != 0) {
        //     return resultJSON;
        // }
        temp_test_complete();
    }

export default call_Api