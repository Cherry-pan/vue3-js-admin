import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 语言
import VueI18n from "vue-i18n";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueI18n)
  .mount("#app");
