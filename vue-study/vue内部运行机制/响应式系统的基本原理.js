/*
 * @Date: 2022-08-03 19:07:38
 * @LastEditTime: 2022-08-03 19:47:41
 * @Description: 
 */

/**
 * 定义一个cb函数
 * 用来模拟视图更新，调用它即代表更新视图，内部可以是一些更新视图的方法
 * @param {*} val 
 */ 
function cb(val){
    console.log("视图更新啦~",val);
  }

  /**
   * 通过 Object.defineProperty 实现对对象的「响应式」化
   * @param {object} obj 需要绑定的对象
   * @param {string} key obj的一个属性
   * @param {string} val 具体的值
   * 经过defineReactive处理以后，obj的key属性
   * 在「读」的时候会触发 reactiveGetter 方法
   * 在「写」的时候会触发 reactiveSetter 方法
   */
  function defineReactive(obj,key,val) {
    Object.defineProperty(obj,key,{
      enumerable:true,        // 属性可枚举
      configurable:true,      // 属性可被修改或删除
      get: function reactiveGetter (){
        return val;            
      },
      set: function reactiveSetter(newVal){
        if (newVal === val) return;
        cb(newVal)
      }
    })
  }

  /**
   * observer函数
   * @param {object} value 需要「响应式」化的对象
   * 通过遍历所有属性的方式对该对象的每一个属性都通过defineReactive处理
   */
  function observer(value){
    if (!value || (typeof value !== 'object')) {
      return;      
    }

    Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key])
    })
  }

  // 使用observer 封装一个Vue
  class Vue {
    /* Vue构造类 */
    constructor(options){
      this._data = options.data;
      observer(this._data)
    }
  }

  // new 一个 Vue对象，就会将 data中的数据进行「响应式」化

  let app = new Vue({
    data:{
      test: "I am test ."
    }
  })
  
  console.log("原始数据",app._data.test);

  setTimeout(() => {
    app._data.test = 'I am new words .'
  }, 2000);
 

