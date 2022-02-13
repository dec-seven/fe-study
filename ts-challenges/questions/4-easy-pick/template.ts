/*
 * @Description: 
 * @version: 
 * @Author: 初柒
 * @Date: 2022-02-07 21:20:46
 * @LastEditors: 初柒
 * @LastEditTime: 2022-02-13 22:09:12
 */

//  ts  联合类型 union

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


// function myPick(todo, keys) {
//     const obj = {}
//     keys.forEach(key => {
//         if (key in todo) {
//             obj[key] = todo[key]
//         }
//     });
//     return obj
// }

// 1.返回一个对象
// 2.遍历 forEach
//  - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3.todo[key] 取值
//  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4.看看 key 在不在 todo 里面



