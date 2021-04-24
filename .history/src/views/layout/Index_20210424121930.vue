<template>
  <div>
    <Aside></Aside>
    <Header></Header>
    <Main></Main>
    框架主页
  </div>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
import Header from "./Header.vue";
import Main from "./Main";

export default {
  name: "Layout",
  components: { Aside, Header, MainHeader },
};
</script>

<style lang="scss" scoped></style>
