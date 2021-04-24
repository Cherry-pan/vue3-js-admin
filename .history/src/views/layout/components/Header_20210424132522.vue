<template>
  <div id="header" class="flex just-c-s">
    <div>2</div>
    <div class="header-right">
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

<style lang="scss">
#header {
  padding: 0 20px;
  height: 64px;
  line-height: 64px;
  .header-right {
  }
  .header-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 17px;
  }
}
</style>
