<template>
  <div id="header" class="flex just-c-s">
    <div>2</div>
    <div>
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          <img
            class="header-icon"
            src="@/assets/images/header/littleNew.jpg"
            alt=""
          />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
  .header-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
