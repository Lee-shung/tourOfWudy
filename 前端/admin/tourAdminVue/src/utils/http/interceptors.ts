/**
 * @author：李无敌
 * @date：2021/9/13 17:35
 */
import axios, { AxiosResponse } from "axios";
import type { AxiosRequestConfig } from "axios";
import { getStorage } from "../storageUtil";
import { resultHandle } from "./resultHandle";
// @ts-ignore
const { $message: Message, $dialog: Dialog } = window;

//定义头部属性
let headers = {
    Authorization: getStorage('accessToken') || ''
}

/**
 * 配置请求拦截器
 */
axios.interceptors.request.use((requestConfig:AxiosRequestConfig) => {
    //设置统一的header
    requestConfig.headers = Object.assign(requestConfig.headers, headers);
    return requestConfig;
}, (err: any) => {
    Dialog.error({
        title: '请求超时',
        content: '请检查网络是否错误，或者文件过大...',
        positiveText: '确定',
        onPositiveClick: () => {
            Message.success('我就知道')
        }
    });
    return Promise.reject(err);
});

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response: AxiosResponse) => {
    //后端返回数据格式
    const { code, data, msg } = response.data;
    resultHandle({ code, msg, data });
    return { code, data, msg };
}, (error => {
    //响应失败，进行错误处理
    console.log(error)
}))
 