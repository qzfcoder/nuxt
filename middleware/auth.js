export default (context) => {
  // context服务端上下文信息 {store, route, redirect, params, query, req, res}
  // 完成一些全局的守卫业务
  console.log('middleware')
};
