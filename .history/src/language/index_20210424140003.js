import VueI18n from "vue-i18n";
const i18n = new VueI18n({
  locale: "cn", // set locale
  messages: {
    cn: require("./language/cn.js"),
    en: require("./language/en.js"),
  }, // set locale messages
});
export default i18n;
