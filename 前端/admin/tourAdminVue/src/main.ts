import { createApp } from 'vue'
import { AppProvider } from './components/AppConfiguration';
import router, { setupRouter } from "./router";
import { setupNaive } from "./plugins/naive";
import App from './App.vue'
import './assets/css/common.less';
async function init() {
    const appProvider = createApp(AppProvider);
    
    const app = createApp(App);
    
    //注入naive
    setupNaive(app);
    
    //优先挂载vue的相关提示组件，使其能在js，ts文件中正常使用message，dialog等...
    appProvider.mount('#app-provider', true);
    
    //挂载路由
    await setupRouter(app);
    
    //等待路由准备就绪才挂载APP
    await router.isReady();
    
    app.mount('#app', true);
}

void init();
