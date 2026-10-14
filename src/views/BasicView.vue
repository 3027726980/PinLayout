<template>
  <div class="page">
    <h1>基础页面</h1>
    <n-card title="页面标题">
      <p>这是一个最简单的内容页面，可直接复制作为新页面的起点。</p>
      <n-divider />
      <n-empty description="在这里放入你的页面内容" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NDivider, NEmpty } from 'naive-ui'
</script>
