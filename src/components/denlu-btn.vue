<template>
    <div><slot>登录</slot></div>
</template>
<script>
import zujianvalue from '../html/zujian-value'
import { Toast } from 'mint-ui'
export default {
  props: {
    // isLogin: {
    //   type: Boolean,
    //   default: true
    // },
    mobile: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // denled: '登录'
    }
  }
  // methods: {
  //   actions () {
  //     if (this.isLogin) {
  //       this.$emit('submit')
  //       console.log(12)
  //       // debugger
  //     }
  //   }
  // },
  // mounted () {
  //   zujianvalue.$on('on', (isLogin) => {
  //     // this.isLogin
  //     // console.log(this.isLogin)
  //   })
  // }
}
</script>

<style scoped>
div {
  /* margin-top: 1.875rem;
  margin-bottom:1.25rem; */
  margin-top: 8%;
  margin-bottom: 3%;
  height: 2.1875rem;
  line-height: 2.1875rem;
  text-align: center;
  background: rgba(255, 199, 77, 1);
  /* width:250px; */
  border-radius: 0.90625rem;
  font-size: 1.03125rem;
  font-family: PingFang-SC-Regular;
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
}
</style>
