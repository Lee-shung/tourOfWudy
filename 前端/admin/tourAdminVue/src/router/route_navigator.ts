/**
 * @author：李无敌
 * @date：2021/9/16 14:29
 */
import { Router } from "vue-router";
export function createRouteNavigator(router: Router) {
    router.beforeEach(async (to,from,next) => {
        const LoadingBar = window['$loading'] || null;
        LoadingBar && LoadingBar.start();
        next()
    });
    router.afterEach((to, from) => {
        const LoadingBar = window['$loading'] || null;
        LoadingBar && LoadingBar.finish();
    })
}

 