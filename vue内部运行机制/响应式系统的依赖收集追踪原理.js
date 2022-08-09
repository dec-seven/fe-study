/*
 * @Date: 2022-08-03 19:50:32
 * @LastEditTime: 2022-08-08 14:20:31
 * @Description: 
 */

/**
 * 实现一个订阅者Dep，主要作用是用来存放Watcher 观察者对象
 * 为了便于理解我们只实现了添加的部分代码，主要是两件事情：
 * 用 notify 方法通知目前 Dep 对象的 subs 中的所有 Watcher 对象触发更新操作
 */
class Dep {
  constructor () {
    /* 用来存放Watcher对象的数组 */
    this.subs = [];
  }

  /* 在subs中添加Watcher对象 */
  addSub(sub) {
    this.subs.push(sub);
  }

  /* 通知所有Watcher对象更新视图 */
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

/**
 * 观察者 Watcher
 */
class Watcher {
  constructor(){
    /* 在new一个Watcher对象时将该对象赋值给Dep.target,在get中会用到 */
    Dep.target = this ;
  }

  /* 更新视图的方法 */
  update (){
    console.log("视图更新啦~")
  }
}

function observer (value) {
  if (!value || (typeof value !== 'object')) {
    return ;
  }

  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

function defineReactive(obj,key,val){
  /* 一个Dep类对象 */
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter (){
      /* 将Dep.target(即当前的Watcher对象存入dep的subs中) */
      dep.addSub(Dep.target);
      return val;
    },
    set: function reactiveSetter(newVal){
      if (newVal === val) return 
        /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */ 
        dep.notify();
    }
  })
}

class Vue {
  constructor(options){
    this._data = options.data;
    observer(this._data);
    /* 新建一个Watcher 观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher();
    /* 在这里模拟render的过程，为了触发test属性的get函数 */
    console.log('render~',this._data.test)
  }
}


let o = new Vue({
  data:{
    test:'i am test'
  }
})

console.log("原始数据", o._data.test,o);
o._data.test = "hello,test."
setTimeout(() => {
  console.log("更新后数据", o._data.test)
})
Dep.target = null 