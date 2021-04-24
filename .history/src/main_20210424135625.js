import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 语言
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  locale: "cn", // set locale
  messages: {
    cn: require("./language/cn.js"),
    en: require("./language/en.js"),
  }, // set locale messages
});
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(i18n)
  .mount("#app");
