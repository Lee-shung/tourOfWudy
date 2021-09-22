<template>
  <header class="flex-center">
    <div class="header flex-center">
      <n-icon :size="18">
        <Refresh></Refresh>
      </n-icon>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Refresh } from '@vicons/ionicons5'
</script>

<style scoped lang="less">
header {
  height: 64px;
  box-shadow: 0 1px 4px #333333;

  .header {
    height: 100%;
    flex: 1;
    padding: 0 32px 0 10px;
    box-shadow: -1px 0 14px 0 #eeeeee;

  }
}
</style>