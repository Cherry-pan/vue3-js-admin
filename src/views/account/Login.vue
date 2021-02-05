<template>
  <div id="account">
    <div class="form-wrap">
      <a-form :model="form" name="custom-validation" ref="ruleForm" @finish="handleFinish">
        <a-form-item>
          <label>用户名</label>
          <a-input v-model:value="form.name" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input v-model:value="form.pwd" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block> 登录 </a-button>
        </a-form-item>
      </a-form>
      <div class="tetx-center color-white">
       <router-link to="/forgetPassword" class="color-white ft-12">忘记密码</router-link>              |
       <router-link to="/register" class="color-white ft-12">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Captcha from "@/components/captcha/Captcha.vue";
export default {
  name: "Login",
  components: { Captcha },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      form:{}
    });
    const data = toRefs(formConfig);

    // 提交表单
    const handleFinish = (()=>{
      console.log(33);
    })

    onMounted(() => {});
    return { ...data };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
