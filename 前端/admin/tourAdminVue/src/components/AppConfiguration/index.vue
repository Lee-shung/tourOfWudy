<template>
  <n-loading-bar-provider>
    <LoadingBarContent />
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider>
        <NotificationContent />
        <n-message-provider>
          <MessageContent />
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { NDialogProvider, NMessageProvider, NLoadingBarProvider, NNotificationProvider } from "naive-ui";
import { MessageContent } from '../MessageContent';
import { DialogContent } from '../DialogContent';
import { LoadingBarContent } from '../LoadingBarContent';
import { NotificationContent } from '../NotificationContent';
</script>

<style scoped>

</style>