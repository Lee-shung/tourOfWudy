<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <app-provider>
      <router-view></router-view>
    </app-provider>
  </n-config-provider>


</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { AppProvider } from "./components/AppConfiguration";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
</script>


<style>

</style>
