//添加代理 B ,通过 B 给 A 送花

let Flower = function () {
  return {
    data: 'flower'
  };
};

let xiaoming = {
  sendFlower: (target) => {
    let flower = new Flower();
    target.receiveFlower(flower.data);
  }
}

let B = {
  receiveFlower: (flower) => {
    A.receiveFlower(flower);
  }
}

let A = {
  receiveFlower: (flower) => {
    console.log('收到' + flower);
  }
}

xiaoming.sendFlower(B);
