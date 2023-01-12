import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.luoyi.vue3',
  appName: 'vite-vue3-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  // 连接手机设备热更新
  server: {
    url: 'http://192.168.1.2:8889/#/',  // ip地址需要换成你自己的本机地址
    cleartext: true
  }
};

export default config;
