<template>
  <div>
    <!-- 声明式跳转 -->
    <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app_header--active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <!-- 展示区 vuerouter-view -->
  </div>
</template>

<script>
</script>

<style>
.app_header--active{
  background-color: blue;
  color: aliceblue;
}
</style>
