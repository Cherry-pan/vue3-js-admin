<template>
  <div id="account">
    <div class="form-wrap">
      <a-form
        :model="formConfig.form"
        ref="form"
        @finish="handleFinish"
        :rules="formConfig.rules"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input
            v-model:value="formConfig.form.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="pwd">
          <label>密码</label>
          <a-input
            v-model:value="formConfig.form.pwd"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="password1">
          <label>确认密码</label>
          <a-input
            v-model:value="formConfig.form.password1"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="code">
          <label>验证码</label>
          <a-row>
            <a-col :span="16">
              <a-input
                v-model:value="formConfig.form.code"
                type="text"
                autocomplete="off"
                maxlength="6"
              />
            </a-col>
            <a-col :span="8">
              <a-button
                type="primary"
                block
                :loading="button_loading"
                :disabled="button_disabled"
                @click="getCode"
              >
                {{ button_text }}</a-button
              >
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block @click="onSubmit()">
            注册
          </a-button>
        </a-form-item>
        <div class="tetx-center color-white">
          <router-link to="/login" class="color-white ft-12">登录</router-link>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, root } from "vue";
import Captcha from "@/components/captcha/Captcha.vue";
import { checkPhone, checkPass, checkCode } from "@/utils/validate.js"; //1
// 取别名2
import { checkPhone as phone } from "@/utils/validate.js";
// 全部导入 *代表所有3
import * as verification from "@/utils/validate.js";
import { message } from "ant-design-vue";
export default {
  name: "Register",
  components: { Captcha },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
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
            trigger: "change",
          },
        ],
        pwd: [
          {
            validator: checkPassword,
            trigger: "change",
          },
        ],
        password1: [
          {
            validator: checkPassword1,
            trigger: "change",
          },
        ],
        code: [
          {
            validator: checkCode,
            trigger: "change",
          },
        ],
      },
    });
    const dataItem = reactive({
      button_text: "获取验证码",
      button_loading: false, //加载
      button_disabled: false, //按钮禁用
      sec: 60, //倒计时60秒
      timer: null, //定时器名称
    });
    const checkUsername = async (rule, value, callback) => {
      console.log(">>>>>>>>>>");
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
      console.log(3333);

      // root.$refs.form
      //   .validate()
      //   .then(() => {
      //     console.log("values", this.form);
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });
    };
    const handleFinish = (values) => {
      console.log(values);
    };
    const getCode = () => {
      if (!formConfig.form.username) {
        message.error("用户名不能为空");
        return;
      }
      // 优先判断一下定时器是否存在，存在的话，先清除定时器，再开启定时器
      // dataItem.timer && clearInterval(dataItem.timer);另一种写法
      if (dataItem.timer) {
        clearInterval(dataItem.timer);
      }
      dataItem.timer = setInterval(() => {
        if (dataItem.sec == 0) {
          dataItem.button_text = "重新发送";
          clearInterval(dataItem.timer);
        } else {
          dataItem.button_text = `${dataItem.sec--}秒`;
        }

        console.log(dataItem.sec);
      }, 1000);
    };
    onMounted(() => {});
    // const form = toRefs(formConfig);
    const data = toRefs(dataItem);
    return {
      formConfig,
      onSubmit,
      checkUsername,
      checkPassword,
      checkPassword1,
      checkCode,
      handleFinish,
      getCode,
      ...data,
      // ...form,
    };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
