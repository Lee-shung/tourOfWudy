/**
 * @author：李无敌
 * @date：2021/9/15 15:04
 */

/**
 * 请求结果状态码
 */
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 0,
    TIMEOUT = 10001,
    TOKEN_EXCEPTION = 401,
}



/**
 * 请求方法
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * 请求参数类型
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // json
    TEXT = 'text/plain;charset=UTF-8',
    // form-data 一般配合qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  文件上传
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
 