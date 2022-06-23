/*
 * @LastEditTime: 2022-06-22 14:04:48
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var getLucky = function(s, k) {
//     let numStr = ''
//     s.split('').forEach(element => {
//         numStr += element.charCodeAt() - 96 
//     })
//     let num = 0
//     for (let i = 0; i < k; i++) {
//         console.log(numStr);
//         num = numStr.split('').map(item=>Number(item)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)
//         console.log(num);
//         numStr = num.toString()
//     }
//     return num
// };
const getLucky = (ss, k) => {
    let s = '';
    for (const c of ss) s += c.charCodeAt() - 96;
    while (k--) {
        s = go(s);
    }
    return s - '0';
};

const go = (s) => {
    let sum = 0;
    for (const c of s) {
        sum += c - '0';
    }
    return sum + '';
};
// @lc code=end

