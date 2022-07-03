<template>
  <div class="login">
    <div class="login_box">
      <div class=""></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@api'
const {login} = api

login({
  name: 'raoshijun'
}).then(res => {
  console.log('res', res);
  
})

  
</script>

<style scoped lang="less">
.login{
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('@assets/login/webBg.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login_box{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
    height: 500px;
    border: 1px solid red;
    background-color: rgba(0, 0, 0, .4);
    color: #FFFFFF;
  }
}
</style>