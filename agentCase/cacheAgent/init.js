// 创建一个用于乘积的函数
let mult = (...rest) => {
  console.log('\n开始计算乘积:');
  let result = 1;
  for (let i=0 ; i<rest.length; i++) {
    result = result * rest[i];
  }
  console.log(result);
  return result;
};

mult(1,2,3,4);
mult(2,3);
