import VueI18n from "vue-i18n";
const i18n = new VueI18n({
  locale: "ch", // set locale
  messages: {
    ch: require("./ch.js"),
    en: require("./en.js"),
  }, // set locale messages
});
export default i18n;
