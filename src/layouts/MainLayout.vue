<template>
  <n-layout has-sider class="main-layout">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :collapsed="collapsed"
    >
      <div class="logo-area">
        <span class="logo-text">{{ collapsed ? 'P' : 'Pin Layout' }}</span>
      </div>
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :value="route.path"
        :options="menuOptions"
        @update:value="router.push($event)"
      />
    </n-layout-sider>

    <n-layout class="workspace">
      <n-layout-header bordered class="header">
        <div class="header-left">
          <n-button
            text
            :aria-label="collapsed ? '展开侧边栏' : '收起侧边栏'"
            :aria-expanded="!collapsed"
            @click="collapsed = !collapsed"
          >
            <n-icon size="20">
              <MenuOutline v-if="collapsed" />
              <ChevronBackOutline v-else />
            </n-icon>
          </n-button>
          <span>{{ route.meta.title }}</span>
        </div>
        <span class="header-brand">布局起步模板</span>
      </n-layout-header>
      <n-layout-content class="content">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NIcon, NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NMenu } from 'naive-ui'
import { GridOutline, DocumentOutline, InformationCircleOutline, MenuOutline, ChevronBackOutline } from '@vicons/ionicons5'
import { pages } from '@/router'

const route = useRoute()
const router = useRouter()
const collapsed = ref(window.matchMedia('(max-width: 640px)').matches)
const icons = [GridOutline, DocumentOutline, InformationCircleOutline]
const menuOptions = pages.map((page, index) => ({
  label: page.meta.title,
  key: `/${page.path}`,
  icon: () => h(NIcon, null, { default: () => h(icons[index] ?? DocumentOutline) }),
}))
</script>

<style scoped>
.main-layout {
  height: 100dvh;
}
.logo-area {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--n-border-color);
}
.logo-text {
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
}
.workspace {
  min-width: 0;
}
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 16px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-brand {
  color: #767c86;
  font-size: 13px;
}
.content {
  height: calc(100dvh - 56px);
  padding: 24px;
  background: #f5f6f8;
}
@media (max-width: 640px) {
  .content { padding: 16px; }
  .header-brand { display: none; }
}
</style>
