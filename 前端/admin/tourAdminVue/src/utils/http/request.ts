/**
 * @author：李无敌
 * @date：2021/9/13 10:53
 */
import axios from "axios";
import type { AxiosResponse } from "axios";
import QS from 'qs';
import QiNiu from 'qiniu-js';
import { getStorage } from "../storageUtil";
import { ContentTypeEnum } from "../../enums/httpEnum";

/**
 * 请求参数
 */
interface RequestParams {
    url: string,
    params?: any
}

/**
 * 后端响应参数
 */
interface ResponseData {
    code: number,
    msg?: string,
    data?: any
}

/**
 * get请求
 * @param url 接口地址
 * @param params 参数
 */
export const get = ({ url, params }: RequestParams) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then((res:AxiosResponse) => {
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })
}

/**
 * post请求
 * @param url
 * @param params
 */
export const post = ({ url, params}: RequestParams) => {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params), {
            headers: {
            'Content-type': ContentTypeEnum.FORM_URLENCODED
            }
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

/**
 * put请求
 * @param url
 * @param params
 */
export const put = ({ url, params}: RequestParams) => {
    return new Promise((resolve, reject) => {
        axios.put(url, QS.stringify(params), {
            headers: {
                'Content-type': ContentTypeEnum.JSON
            }
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

/**
 * delete请求
 * @param url 接口地址
 * @param params 参数
 */
export const del = ({ url, params }: RequestParams) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, { params }).then((res:AxiosResponse) => {
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })
}

/**
 * 七牛云上传
 * @param file 文件
 * @param fileName 文件名
 * @param putExtra
 * @param config
 */
export function upload(file: any, fileName: string, putExtra?: any, config?: any) {
    return new Promise(((resolve, reject) => {
        const observable = QiNiu.upload(file, `lwd/file/${ fileName }`, getStorage('QiNiuToken'), putExtra, config);
        observable.subscribe({
            error: (e) => {
                reject(e);
            },
            complete: (res) => {
                const resultData: ResponseData = {
                    code: 200,
                    msg: '上传成功',
                    data: res
                }
                resolve(resultData);
            },
        })
    }))
    
}

 