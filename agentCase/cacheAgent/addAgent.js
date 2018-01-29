//给算数添加缓存代理
let mult = (...rest) => {
  console.log('\n开始计算乘积:');
  let result = 1;
  for (let i=0 ; i<rest.length; i++) {
    result = result * rest[i];
  }
  return result;
};

let proxyMult = (() => {
  let cache = {};
  return (...rest) => {
   if (rest in cache) {
     console.log('使用缓存数据');
     console.log(cache[rest]);
   }else {
     cache[rest] = mult(...rest);
     console.log(cache[rest]);
   }
  }
})();

proxyMult(1,2,3,4);
proxyMult(1,2,3,4);

// 注：
// 当计算方式多样化后，能使用高阶函数动态创建代理
