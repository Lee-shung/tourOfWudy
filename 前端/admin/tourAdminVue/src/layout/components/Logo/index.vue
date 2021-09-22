<template>
  <div class="title">
    <div class="logo">
      <img alt="" src="../../../assets/img/logo.png" />
      <h1 v-show="!collapsed">迹忆</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from 'vue';
const props = defineProps({
  collapsed: Boolean
})
</script>

<style scoped lang="less">
.title {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 36px;
    }
    h1 {
      margin-left: 10px;
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 2px;
      min-width: 42px;
    }
  }
}
</style>