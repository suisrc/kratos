import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user/sigin', component: '@/pages/index' },
  ],
});
