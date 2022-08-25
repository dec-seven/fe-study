/*
 * @Date: 2022-08-10 10:34:01
 * @LastEditTime: 2022-08-10 10:51:24
 * @Description: 单例模式-面试题1-静态方法版
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。
 */

// 定义Storage
class Storage{
  static getInstance(){
    // 判断是否已经new过1个实例
    if (!Storage.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  getItem(key){
    return localStorage.getItem(key)
  }

  setItem(key,val){
    return localStorage.setItem(key,val)
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem('name','李雷')
console.log(storage1.getItem('name'));
console.log(storage2.getItem('name'));

