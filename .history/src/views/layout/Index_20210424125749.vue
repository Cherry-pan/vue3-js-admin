<template>
  <div id="layout">
    <!-- <Aside></Aside>
    <Header></Header>
    <Main></Main> -->
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
            :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
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
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
// antdesign
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
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
<style>
/* #components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
} */
</style>
