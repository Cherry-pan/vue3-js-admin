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
              <div class="menu-item">
                13775469627
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="menu-item">
                <span>中文</span>/
                <span>英文</span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <div class="menu-item">
                退出
              </div>
            </a-menu-item>
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
