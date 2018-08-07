import * as util from "../util/Tool";
import * as md5 from "../util/MD5";
import JsonUtil from "./JsonUtil";
import {ErrorAnayle, NetWork_Request_Error} from "./ErrorAnayle";


const API_SECRET_KEY = 'www.mall.cycle.com';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

const httpRequest = async (params = {}, url) => {
    let data = params.query || {};

    let header = {
        method: params.method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data,
    };

    try {
        return await fetch(url, header);
    } catch (error) {
        console.error('error : ', error);
    }


};


module.exports = {
    httpRequest
};
