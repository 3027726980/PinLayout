# Pin Layout

基于 **Vue 3 + TypeScript + Naive UI** 的轻量后台布局模板，从 [Pin](https://github.com/3027726980/Pin) 前端提取。

保留可折叠侧边栏、顶部导航、页面内容区和三个静态示例页面。只有路由和侧栏折叠等基础交互，不包含登录鉴权、业务接口、AI Agent、知识库或后端服务。

## 快速开始

需要 Node.js 22 或更新版本及 npm。在 PowerShell 中执行：

```powershell
npm ci
npm run dev
```

打开终端显示的本地地址。停止开发服务使用 `Ctrl+C`。

```powershell
npm run build
npm run preview
```

`build` 先运行 TypeScript 检查，再生成 `dist/`。`preview` 仅用于本地预览构建产物。

## 目录

```text
src/
├── App.vue                 # Naive UI 配置
├── main.ts                 # 应用入口
├── layouts/MainLayout.vue  # 侧边栏、顶栏与内容区
├── router/index.ts         # 路由与菜单标题
├── styles/global.css       # 全局基础样式
└── views/
    ├── HomeView.vue        # 概览
    ├── BasicView.vue       # 空白内容示例
    └── AboutView.vue       # 关于
```

## 定制

- **品牌、宽度、顶栏**：修改 `src/layouts/MainLayout.vue`。
- **新增页面**：在 `src/views/` 添加 Vue 文件，在 `src/router/index.ts` 的 `pages` 数组添加路由及 `meta.title`；菜单自动生成。未指定图标的页面默认使用文档图标。
- **页面样式**：修改 `src/styles/global.css` 或页面自己的 `<style scoped>`。
- **部署**：将 `dist/` 上传至静态托管服务。默认使用 Hash 路由（如 `/#/basic`）及相对资源路径，无需配置路由回退，也可放在子目录。

组件采用显式导入，便于直接阅读；没有自动导入插件、全局状态库和网络请求依赖。窄屏首次打开时侧边栏默认收起。

## 来源与许可

布局结构和基础样式提取并简化自 [Pin](https://github.com/3027726980/Pin)，保留其 MIT 版权声明。Pin 的项目文档说明前端基于 [naive-ui-admin](https://github.com/jekip/naive-ui-admin) 模板；本仓库没有复制该模板的完整业务模块。

本项目采用 [MIT License](LICENSE)。Vue、Vue Router、Naive UI、Ionicons 等依赖各自遵循其许可证。
