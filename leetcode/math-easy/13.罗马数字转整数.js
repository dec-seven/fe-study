/*
 * @LastEditTime: 2022-06-14 16:34:08
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = s.split('').map(item=>{
        console.log(item);
        switch (item) {
            case 'I': return 1
            case 'V': return 5
            case 'X': return 10
            case 'L': return 50
            case 'C': return 100
            case 'D': return 500
            case 'M': return 1000
        }
    })
    let num = 0
    let lastNum = 1000
    while (arr.length) {
        const pop = arr.pop()
        if (pop > lastNum) {
            num -= pop
        }else {
            num += pop 
        }
        lastNum = pop;
        console.log(pop,num);
    }
    return num
};
// @lc code=end

