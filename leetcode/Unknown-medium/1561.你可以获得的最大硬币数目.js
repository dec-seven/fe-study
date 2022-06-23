/*
 * @LastEditTime: 2022-06-22 14:39:33
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1561 lang=javascript
 *
 * [1561] 你可以获得的最大硬币数目
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const pilesSort = piles.sort((a,b) => b - a )
    // let pilesSort = piles
    // for (let i = 0; i < piles.length; i++) {
    //     for (let j = i + 1; j < piles.length; j++) {
    //        if (pilesSort[i] < pilesSort[j]) {
    //             const a =  pilesSort[i]
    //             pilesSort[i] = pilesSort[j]
    //             pilesSort[j] = a
    //        } 
    //     }
    // }
    let num = 0
    for (let i = 0; i < piles.length/3; i++) {
        num += pilesSort[2*i + 1]
    }
    return num
};
// @lc code=end

