<template>
  <div class="detail">
    <h3>评论</h3>
    <nuxt-link to="/goods/comment/1?a=1&b=2">评论01</nuxt-link>
    <nuxt-link to="/goods/comment/2?a=1&b=2">评论02</nuxt-link>
    <nuxt-link
      :to="{ name: 'goods-comment-id', params: { id: 3 }, query: { a: 111, b: 333 } }"
      >评论03</nuxt-link
    >
    <nuxt />
  </div>
</template>

<script lang='ts'>
export default {
  name:''
}
</script>

<style>

</style>
