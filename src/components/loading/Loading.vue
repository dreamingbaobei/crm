<template>
  <div class="load_wrapper" v-if="showLoading">
    <van-loading type="circular" color="#1989fa"  vertical>
      {{msg}}
    </van-loading>
  </div>
</template>

<script>
// 引入vuex的辅助方法
import { mapGetters } from 'vuex'
import Vue from 'vue'
// 引入loading插件，自己的也可以哦，直接在组件上判断显示隐藏即可
import { Loading, Overlay } from 'vant'

Vue.use(Loading)
Vue.use(Overlay)

export default {
  props: {
    msg: { type: String, default: '加载中...' }
  },
  computed: {
    ...mapGetters([
      'showLoading'
    ])
  }
}
</script>

<style>
  .load_wrapper{
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.5);
    z-index: 999;
    position: fixed;
    left: 0;
    top:0;
  }
  .van-loading__circular circle{
    stroke-width: 0.08rem;
  }
  .van-loading{
    width: 0.6rem;
    height: 0.6rem;
    top: 40%;
    left: 50%;
    transform: translateX(-50%)
  }
</style>
