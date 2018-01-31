// B 代理人会根据特定的条件选择时间将花送给 A ,xiaoming 只需要将花交给 B 就可以了

let Flower = function() {
  return {
    data: 'flower'
  }
};

let xiaoming = {
  sendFlower: (target) => {
    let flower = new Flower();
    target.receiveFlower(flower);
  }
};

let B = {
  receiveFlower: (flower) => {
    A.listenGoodMood(() => {
      A.receiveFlower(flower);
    })
  }
};

let A = {
  receiveFlower: (flower) => {
    console.log('收到' + flower)
  },

  listenGoodMood: (fn) => {
    setTimeout(() => {
      fn();
    }, 3000)
  }
}

xiaoming.sendFlower(B);

// 注：
// 箭头函数与传统的JavaScript函数主要区别在于以下几点：
// 1、对 this 的关联。函数内置 this 的值，取决于箭头函数在哪儿定义，而非箭头函数执行的上下文环境。
// 2 、new 不可用。箭头函数不能使用 new 关键字来实例化对象，不然会报错。
// 3、this 不可变。函数内置 this 不可变，在函数体内整个执行环境中为常量。
// 4、没有arguments对象。更不能通过arguments对象访问传入参数。只能使用显式命名或其他ES6新特性来完成。
