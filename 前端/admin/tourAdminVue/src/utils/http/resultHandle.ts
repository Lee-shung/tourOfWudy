/**
 * @author：李无敌
 * @date：2021/9/13 16:51
 */

import router from "../../router";
import { ResultEnum } from "../../enums/httpEnum";
interface Result {
    code: number,    //状态码
    msg?: string,    //返回信息
    data?: any       //返回数据
}

/**
 * 只弹出一个提示框
 */
function onlyOneMessage() {
    return document.getElementsByClassName('n-message-container').length === 0;
}

/**
 * 只弹出一个弹出框
 */
function onlyOneDialog() {
    return document.getElementsByClassName('n-modal-container').length === 0;
}

export const resultHandle = ({ code, msg, data }: Result) => {
    // @ts-ignore
    const { $message: Message, $Dialog: Dialog } = window;
    switch (code) {
        case ResultEnum.TOKEN_EXCEPTION:
            if (onlyOneMessage()) {
                Message.error('登录身份已失效，请重新登录!');
                //跳转到登录页
                router.push('/login');
            }
            break;
        case ResultEnum.ERROR:
            if (onlyOneMessage()) {
                Message.error(msg || '操作失败');
            }
            break;
        case ResultEnum.SUCCESS:
            Message.success(msg || '操作成功');
            break;
        case ResultEnum.TIMEOUT:
            if (onlyOneDialog()) {
                Dialog.error({
                    title: '错误提示',
                    content: '响应超时，请稍后重试！',
                    positiveText: '确定',
                    onPositiveClick: () => {
                    
                    }
                })
            }
            break;
        default:
            return { code, data, msg };
    }
}
 