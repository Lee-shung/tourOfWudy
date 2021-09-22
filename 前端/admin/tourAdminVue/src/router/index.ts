/**
 * @author：李无敌
 * @date：2021/9/15 16:08
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";
import { createRouteNavigator } from "./route_navigator";

const Test1 = () => import('./../views/test/test1.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: () => import('./../layout/index.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export function setupRouter(app: App) {
    app.use(router);
    createRouteNavigator(router)
}
export default router;
 