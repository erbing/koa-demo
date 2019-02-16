const qq = "www.qq.com";
const qq2 = "https://www.qq.com";
const qq3 = "https://pp.hh.qq.com";

const reg = /qq\.com$/g;
const res = reg.test(qq);
const res2 = reg.test(qq2);
const res3 = reg.test(qq3);

console.log(res);
console.log(res2);
console.log(res3);
