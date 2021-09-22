<template>
  <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
  />
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from 'vue';
const props = defineProps({
  collapsed: Boolean
});
import { HeartSharp } from '@vicons/ionicons5'
import { useIcon } from "../../../hooks/components/useIcon";
const { renderIcon } = useIcon();
const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(HeartSharp)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(HeartSharp),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(HeartSharp)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(HeartSharp),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(HeartSharp)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(HeartSharp)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(HeartSharp),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<style scoped lang="less">

</style>