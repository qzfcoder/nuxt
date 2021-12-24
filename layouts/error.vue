<template>
  <div>
    <h1 v-if="error.statusCode">页面内部不存在{{error.message}}</h1>
    <h2 v-else>应用发生一次</h2>
    <button @click="$router.replace('/index')">回到shouye</button>
  </div>
</template>

<script>
export default {
  // 接受错误信息，
  props: ["error"],

};
</script>
