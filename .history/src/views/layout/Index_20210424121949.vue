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
import Main from "./Main";

export default {
  name: "Layout",
  components: { Aside, Header, Main },
};
</script>

<style lang="scss" scoped></style>
