/*
 * @LastEditTime: 2022-06-23 14:54:08
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let num = 0
    const arr = gain.map(item => {
        num += item
        return num 
    }).sort((a ,b) => b - a)
    return arr[0] > 0 ? arr[0] : 0
};
// @lc code=end

