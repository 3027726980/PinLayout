<template>
  <div class="page">
    <h1>概览</h1>
    <n-card title="从一个干净的布局开始">
      <p>Pin Layout 提供侧边栏、顶部导航和页面内容区，方便你搭建自己的后台界面。</p>
      <n-space class="tags">
        <n-tag type="success" :bordered="false">Vue 3</n-tag>
        <n-tag :bordered="false">TypeScript</n-tag>
        <n-tag :bordered="false">Naive UI</n-tag>
      </n-space>
    </n-card>
    <div class="feature-grid">
      <n-card title="侧边栏">点击顶部按钮即可展开或收起菜单。</n-card>
      <n-card title="页面导航">菜单与路由对应，切换页面时自动更新选中状态。</n-card>
      <n-card title="内容区域">替换示例页面，放入你的内容即可。</n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCard, NSpace, NTag } from 'naive-ui'
</script>
