/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl;

/*
*nodejs中提供
* process.env 是读取系统环境变量的，比如你在启动服务的时候，
* 设置环境变量为production或者development，那么在程序里面就可以通过process.env.ENVNAME获取
*
* */
if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = 'http://cangdu.org:8001/img/';

}else if(process.env.NODE_ENV == 'production'){
  baseUrl = 'http://cangdu.org:8001';
  imgBaseUrl = 'http://cangdu.org:8001/img/';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
