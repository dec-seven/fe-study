/*
 * @LastEditTime: 2022-06-20 16:36:44
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let index = 0
    while (index < words[0].length && index < words[1].length){
        if (words[0][index] === words[1][index]){
            index++
            continue
        } else {
            const left = order.indexOf(words[0][index]),
            right = order.indexOf(words[1][index])
            if (left < right && left >= 0 && right >= 0) {
                return true
            } else {
                return false
            }
        } 

    }
    if (words[0].length > words[1].length) {
        return false
    } else {
        return true
    }
};
// @lc code=end

