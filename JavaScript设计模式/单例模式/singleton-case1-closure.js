/*
 * @Date: 2022-08-10 10:50:26
 * @LastEditTime: 2022-08-10 10:54:03
 * @Description: 单例模式-面试题1- 闭包方法版
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。 
 */

// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
function StorageBase(){
  StorageBase.prototype.getItem = (key) => {
    return localStorage.getItem(key)
  }
  StorageBase.prototype.setItem = (key,val) => {
    return localStorage.setItem(key,val)
  }
}

// 以闭包的形式创建一个引用自由变量的构造函数
const Storage = (function(){
  let instance = null
  return function(){
      // 判断自由变量是否为null
      if(!instance) {
          // 如果为null则new出唯一实例
          instance = new StorageBase()
      }
      return instance
  }
})()

// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果 
const storage1 = new Storage()
const storage2 = new Storage()

storage1.setItem('name', '李雷')
// 李雷
storage1.getItem('name')
// 也是李雷
storage2.getItem('name')

// 返回true
storage1 === storage2