import { temp_test_complete } from "./temp_test.js";
/**
 * 
 * @param {string} requesturl JSON을 불러올 URL
 */
const call_Api = async (requesturl) => {
    const res = await fetch(requesturl);
    return await res.json();
    }

export default call_Api