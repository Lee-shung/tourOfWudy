/**
 * @author：李无敌
 * @date：2021/9/17 16:47
 */
import { h } from "vue";
import { NIcon } from "naive-ui";

export function useIcon() {
    function renderIcon(icon: any) {
        return () => h(NIcon, null, { default: () => h(icon) });
    }
    return { renderIcon };
}
 