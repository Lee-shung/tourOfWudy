/**
 * @author：李无敌
 * @date：2021/9/9 9:06
 * @description：时间转换工具类
 */
import { format } from 'date-fns';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD';

export function dateToDateTime(date: any, formatStr = DATE_TIME_FORMAT): string {
    return format(date, formatStr);
}

export function dateToDate(date: any, formatStr = DATE_FORMAT): string {
    return format(date, formatStr);
}