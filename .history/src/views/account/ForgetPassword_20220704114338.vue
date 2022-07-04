<template>
  <div id="account">
    <div class="form-wrap">
      <a-form :model="form" ref="form" @finish="handleFinish">
        <a-form-item required name="username">
          <label>用户名</label>
          <a-input
            v-model:value="form.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item required name="pwd">
          <label>密码</label>
          <a-input
            v-model:value="form.pwd"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item required name="password1">
          <label>确认密码</label>
          <a-input
            v-model:value="form.password1"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="code">
          <label>验证码</label>
          <a-row>
            <a-col :span="16">
              <a-input
                v-model:value="form.code"
                type="text"
                autocomplete="off"
                maxlength="6"
              />
            </a-col>
            <a-col :span="8">
              <a-button type="primary" block>{{ button_text }}</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block @click="onSubmit">
            重置密码
          </a-button>
        </a-form-item>
        <div class="tetx-center color-white">
          <router-link to="/" class="color-white ft-12">登录</router-link>
          |
          <router-link to="/register" class="color-white ft-12"
            >注册</router-link
          >
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Captcha from "@/components/captcha/Captcha.vue";
import { checkPhone, checkPass, checkCode } from "@/utils/validate.js"; //1
// 取别名2
import { checkPhone as phone } from "@/utils/validate.js";
// 全部导入 *代表所有3
import * as verification from "@/utils/validate.js";
export default {
  name: "Register",
  components: { Captcha },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      button_text: "获取验证码",
      form: {
        username: "",
        pwd: "",
        password1: "",
        code: "",
      },
      rules: {
        username: [
          {
            validator: checkUsername,
            trigger: "blur",
          },
        ],
        pwd: [
          {
            validator: checkPassword,
            trigger: "blur",
          },
        ],
        password1: [
          {
            validator: checkPassword1,
            trigger: "blur",
          },
        ],
        code: [
          {
            validator: checkCode,
            trigger: "blur",
          },
        ],
      },
    });
    const checkUsername = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入用户名"); //错误的情况
      } else if (!checkPhone(value)) {
        return Promise.reject("请输入正确的手机号"); //手机号错误的情况
      } else {
        return Promise.resolve();
      }
    };
    const checkPassword = async (rule, value, callback) => {
      let passwords = formConfig.form.password1;
      if (!value) {
        return Promise.reject("请输入密码"); //错误的情况
      } else if (!checkPass(value)) {
        return Promise.reject("请输入6-20位的数字+字母"); //手机号错误的情况
      } else if (passwords && value) {
        if (passwords !== value) {
          return Promise.reject("两次密码输入不一致");
        }
      } else {
        return Promise.resolve();
      }
    };
    const checkPassword1 = async (rule, value, callback) => {
      let passwords = formConfig.form.pwd;
      if (!value) {
        return Promise.reject("请输入密码"); //错误的情况
      } else if (!checkPass(value)) {
        return Promise.reject("请输入6-20位的数字+字母"); //手机号错误的情况
      } else if (passwords && value) {
        if (passwords !== value) {
          return Promise.reject("两次密码输入不一致");
        }
      } else {
        return Promise.resolve();
      }
    };
    const checkCode = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入验证码");
      } else if (!checkCode(value)) {
        return Promise.reject("请输入正确的验证码");
      } else {
        return Promise.resolve();
      }
    };
    const onSubmit = () => {
      this.$refs.form
        .validate()
        .then(() => {
          console.log(3333);
          console.log("values", this.form);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    const handleFinish = (values) => {
      console.log(values);
    };
    // const handleFinishFailed = (errors) => {
    //   console.log(errors);
    // };
    onMounted(() => {});
    const data = toRefs(formConfig);
    return { ...data, handleFinish, onSubmit };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
