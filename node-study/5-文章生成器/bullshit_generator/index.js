import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'fs';
import {fileURLToPath} from 'url'; //url是 Node.js 的内置模块，用来解析 url 地址
import {dirname,resolve} from 'path';

import {generate} from './lib/generator.js'
import {createRandomPicker} from './lib/random.js';
import moment from 'moment/moment.js';

const __dirname = dirname(fileURLToPath(import.meta.url))

function loadCorpus(src) {
  const path = resolve(__dirname, src);
  const data = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(data);
}

const corpus = loadCorpus('corpus/data.json');

// const pickTitle = createRandomPicker(corpus.title);
// const title = pickTitle();
// const article = generate(title, {corpus});
// console.log(`${title}\n\n    ${article.join('\n    ')}`);
// saveCorpus(title,article)


const options = parseOptions('corpus/data.json')
const title = options.title || createRandomPicker(corpus.title)();
const article = generate(title,{corpus,...options});
const output = saveCorpus(title,article)
console.log(`生成成功！文章保存于：${output}`);

// const url = import.meta.url; // 获取当前脚本文件的url
// fileURLToPath将 url 转为文件路径
// dirname方法可以取到当前 JS 文件目录
// resolve方法将JS文件目录和相对路径corpus/data.json拼在一起，最终获得正确的文件路径。
// const path = resolve(dirname(fileURLToPath(url)), 'corpus/data.json');


// readFile('./corpus/data.json',(err,data) => {
//   if(!err){
//     console.log(data.toString('utf-8'));
//   } else {
//     console.log(err);
//   }
// })

// readFile('./corpus/data.json',{encoding:'utf-8'},(err,data)=>{
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// })

// 同步读取文件
// const data = readFileSync('./corpus/data.json',{encoding:'utf-8'})
// console.log(data);

// const data = readFileSync(path,{encoding:'utf-8'})
// const corpus = JSON.parse(data)

// const pickFamous = createRandomPicker(corpus.famous);
// const pickBosh = createRandomPicker(corpus.bosh);

// console.log('随机取出一条名人名言:',pickFamous());
// console.log('随机取出一条废话:',pickBosh());



function saveCorpus(title,article){
  const outputDir = resolve(__dirname,'output');
  const time = moment().format('|YYYY-MM-DD|HH:mm:ss');
  const outputFile = resolve(outputDir,`${title}${time}.txt`);

  // 检查outputDir是否存在，没有则创建一个
  if(!existsSync(outputDir)){
    mkdirSync(outputDir);
  }

  const text = `${title}\n\n   ${article.join('\n     ')}`
  writeFileSync(outputFile,text)//将text写入outputFile文件中

  return outputFile;
}


function parseOptions(options = {}) {
  const argv = process.argv;
  for(let i = 2; i < argv.length; i++) {
    const cmd = argv[i - 1];
    const value = argv[i];
    if(cmd === '--title') {
      options.title = value;
    } else if(cmd === '--min') {
      options.min = Number(value);
    } else if(cmd === '--max') {
      options.max = Number(value);
    }
  }
  return options;
}