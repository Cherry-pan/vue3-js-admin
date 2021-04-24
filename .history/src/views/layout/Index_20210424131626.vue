<template>
  <div id="layout">
    <a-layout
      id="components-layout-demo-custom-trigger"
      class="flex"
      style="height:100vh"
    >
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <Aside></Aside>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
          <Header></Header
        ></a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '88vh' }"
          >
            <Main></Main>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// 自定义
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
// antdesign
import { defineComponent, reactive, ref, toRefs } from "vue";
export default {
  name: "Layout",
  components: { Aside, Header, Main },
  setup(props) {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: false,
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
#layout {
  //   .flex {
  //     display: flex;
  //   }
}
</style>
<style></style>
