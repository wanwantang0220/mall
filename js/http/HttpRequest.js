import * as util from "../util/Tool";
import * as md5 from "../util/MD5";
import JsonUtil from "./JsonUtil";


const API_SECRET_KEY = 'www.mall.cycle.com';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

const httpRequest = async (params = {}, url) => {
    let data = params.query || {};
    // data.sign = SIGN;
    // data.time = TIMESTAMP;
    let header = {
        method: params.method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JsonUtil.jsonToStr(data)
    };
    let res = await new Promise((resolve, reject) => {
        fetch(url, header)
            .then((response) => response.json())
            .then((responseData) => {
                console.log('response', responseData);
                resolve(responseData);
            })
            .catch((error) => {
                console.log(ErrorAnayle.getErrorBean(NetWork_Request_Error));
            })
            .done();
    })
    return res;
};


module.exports = {
    httpRequest
}
