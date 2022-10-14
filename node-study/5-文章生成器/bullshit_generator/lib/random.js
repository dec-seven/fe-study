// randomInt 函数返回一个大于等于 min，小于 max 的随机整数
/**
 * 生成1个大于等于min，小于max的随机整数
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
export function randomInt(min,max){
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

// const articleLength = randomInt(3000, 5000); //设置文章长度介于3000~5000字
// console.log("3000-5000之间的随机整数：",articleLength);
// const sectionLength = randomInt(200, 500); // 设置段落长度介于200到500字
// console.log("200-500之间的随机整数：",sectionLength);


export function createRandomPicker(arr) {
  arr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arr.length - 1;
    const index = randomInt(0, len);
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}


