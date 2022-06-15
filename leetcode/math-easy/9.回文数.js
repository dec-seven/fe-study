/*
 * @LastEditTime: 2022-06-14 15:06:36
 * @Description:    
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const yu = []
    let  shang = x
    if (x<0) {
        return false
    }
    while(shang !== 0){
        yu.push( shang % 10)
        shang = Math.floor(shang / 10)
    }
    for (let index = 0; index <= yu.length/2-1; index++) {
        if (yu[index] !== yu[yu.length-index-1]) {
            return false
        }
    }
    return true
};
// @lc code=end

