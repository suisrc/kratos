import { defineConfig } from 'umi';
export default defineConfig({
  antd: {
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  title: "Kratos",
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '登录页',
      path: '/ks/user/signin',
      component: './UserLogin',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
});
