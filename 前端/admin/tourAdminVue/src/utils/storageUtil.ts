/**
 * @author：李无敌
 * @date：2021/9/13 17:20
 * @description：缓存工具类
 */

/**
 * 获取缓存
 * @param key 键值
 */
export const getStorage = (key: string): any => {
    return localStorage.getItem(key);
}

/**
 * 设置缓存
 * @param key 键值
 * @param value 值
 */
export const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
}

/**
 * 清除缓存
 * @param keys 需要清除的键值
 */
export const clearStorage = (keys: Array<string>) => {
    keys.forEach(key => {
        setStorage(key, null);
    });
}
 