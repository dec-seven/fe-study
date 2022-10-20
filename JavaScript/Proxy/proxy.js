let obj = {
  a:1,
  b:2
}

/**
 * 参数:
 * 1.target : 目标对象
 * 2.handler : 具体的操作
 * 
 * Reflect : 反射 ---- 作用：每个方法都和Proxy一一对应
 */
let newTarget = new Proxy(obj,{
  // target:原对象
  // p : key 
  // value : 新的值
  // receriver : 原对象的proxy格式
  set(target,p,value,receriver){
    console.log('set',target,p,value,receriver);
  },
  get(target,p,receriver){
    console.log('get',target,p,receriver);
    return Reflect.get(target,p)
  },
  has(target,p){
    console.log('has',target,p);
  },
  deleteProperty(target,p){
    console.log('deleteProperty',target,p);
    if ( p === 'a') {
      return false 
    }
    delete target[p]
    return target
  },
  ownKeys(target){
    // 拦截逻辑
    // key : 数字 or 字符串
    console.log('ownKeys',target);
    return Reflect.ownKeys(target)
  }
});

newTarget.a = 10;

newTarget.a;

// 某一个属性是否属于这个对象 in
if ('a' in  newTarget) {

}

// 
// Reflect.deleteProperty(newTarget,'b')
Reflect.get(newTarget,'a')
// delete newTarget['a']
// delete newTarget['b']


Reflect.ownKeys(newTarget)

// 获取目标对象的属性描述器
Reflect.getOwnPropertyDescriptor(newTarget,'a')

{
  // value: 1, 值
  // writable: true, 是否可写
  // enumerable: true, 是否可枚举 遍历forin
  // configurable: true 是否可改写
}


// 关于操作原型 getPrototypeOf setPrototypeOf
//  __proto__ : 隐式原型

// Reflect.setPrototypeOf(newTarget,[])
// Reflect.getPrototypeOf(newTarget)


// 针对数据的拦截

// > 针对数据的拦截
//   get 、set 、 has 、 deleteProperty

// > 遍历  
// ownKeys

// > 属性描述器
//   getOwnPropertyDescriptor  defineProperty 设置修饰器

// > 是否可以拓展 
//   preventExtensions:阻止扩展  isExtensibe:是否可扩展