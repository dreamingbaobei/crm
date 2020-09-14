<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import md5 from 'js-md5'
import Vue from 'vue'
import { Form, Field, Button } from 'vant'

Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
export default {
  data () {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('user/login', {
        username: this.username,
        password: md5(this.password)
      })
    }
  }
}
</script>
