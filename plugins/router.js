export default ({ app }) => {
  console.log("dsad");
  // 要使用redirect来跳转
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log('1', to)
    next()
  })
};
