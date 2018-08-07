
import {Nuknown_Error, NetWork_Request_Error, ErrorAnayle} from './ErrorAnayle'
import ErrorBean from "./ErrorBean";
import JsonUtil from "./JsonUtil";


/*基础链接头*/
export const BaseUrl = "https://sujiefs.com/";



export default class HttpManager {


    /*请求数据=本地加网络*/
    postNetData(url, data) {
        let header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };
        return new Promise((resolve, reject) => {
            fetch(url, header)
                .then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                })
                .done();
        })
    }


    /**
     *
     */
    request(){

    }

}