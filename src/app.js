import { createSSRApp } from 'vue';
import App from './App.vue';

// 导出一个创建根组件的工厂函数
export default function createApp(args = {}) {
  const app = createSSRApp(App)

  return {
    app
  }
}