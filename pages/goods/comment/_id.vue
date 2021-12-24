<template>
  <div class="detail">
    <h3>评论详情页</h3>
  </div>
</template>

<script>
export default {
  name:'',
  validate({params,query}){
    console.log(params,query)
    return true
  },
  transition: 'test'
}
</script>

<style>
.test-enter-active, .test-leave-active {
  transition: .5s ease all;
}
.test-enter, .test-leave {
  margin-left:  100px;
}
</style>
