// 原始类型的类型标注
const peoName: string = 'DecSeven';
const age: number = 26;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { peoName, age, male };
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');

// null 与 undefined
// 在 JavaScript 中，null 与 undefined 分别表示“这里有值，但是个空值”和“这里没有值”。
// 在 TypeScript 中，null 与 undefined 类型都是有具体意义的类型。也就是说，它们作为类型时，表示的是一个有意义的具体类型值。
const tmp1: null = null;
const tmp2: undefined = undefined;

const tmp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
const tmp4: string = undefined;

// void
void function iife() {
  console.log("Invoked!");
}();

// 数组的类型标注
const arr1: string[] = [];

const arr2: Array<string> = [];

const arr3: string[] = ['lin', 'bu', 'du'];

console.log(arr3[599]);

const arr4: [string, string, string] = ['lin', 'bu', 'du'];

// console.log(arr4[599]);

const arr5: [string, number, boolean] = ['linbudu', 599, true];


interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'linbudu',
  age: 599,
  male: true,
};