<!--
 * @Date: 2023-03-13 22:42:23
 * @LastEditTime: 2023-03-13 22:52:17
 * @Description: 
-->
## VueRouter实现原理
  ### Vue前置知识
  - 插件
  - 混入
  - Vue.observable()
  - 插槽
  - render函数
  - 运行时和完整版的Vue

#### Hash模式
  - URL中#后面的内容作为路径地址
  - 监听hashchange事件
  - 根据当前路由地址找到对应组件重新渲染

#### History模式
  - 通过history.pushState()方法改变地址栏
  - 监听popstate事件
  - 根据当前路由地址找到对应的组件重新渲染


### VueRouter模拟实现-分析
 ```js
// 核心代码
// router/index.js
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
  router:[
    {name:'home',path:'/',component:homeComponent}
  ]
}) 

// main.js
// 创建Vue实例，注册router对象
new Vue({
  router,
  render:h => h(App)
}).$mount('#app')
```
### Vue的构建版本
- 运行时版：不支持template模版，需要打包的时候提前编译
- 完整版：包含运行时和编译器，体积比运行时版大10k左右，程序运行的时候把模版转换成render函数