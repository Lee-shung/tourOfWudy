<template>
  <n-layout has-sider>
    <n-layout-sider
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="210"
        :native-scrollbar="false"
        :on-update:collapsed="onChangeCollapsed"
    >
      <Logo :collapsed="collapsed"></Logo>
      <Sider v-model:collapsed="collapsed"></Sider>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header></Header>
      </n-layout-header>
      <n-layout-content :native-scrollbar="false" content-style="padding: 0 10px;">
        <Content></Content>
      </n-layout-content>
      <n-layout-footer>
        <Footer></Footer>
      </n-layout-footer>
    </n-layout>
  </n-layout>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Sider from './components/Sider/index.vue';
import Logo from './components/Logo/index.vue';
import Header from './components/Header/index.vue';
import Content from './components/Content/index.vue';
import Footer from './components/Footer/index.vue';

const collapsed = ref(false);

const onChangeCollapsed = (e) => {
  collapsed.value = e;
}
</script>

<style scoped>
.n-layout-sider {
  /*background: rgba(128, 128, 128, 0.3);*/
  height: 100vh;
  box-shadow: 2px 0 8px 0 #eeeeee;
}

.n-layout-content {
  background: #f5f7f9;
  height: calc(100% - 124px);
}
</style>