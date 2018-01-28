//小明给B送花
let Flower = function () {
  return 'flower';
};

let xiaoming = {
  sendFlower: (target) => {
    let flower = new Flower();
    target.receiveFlower(flower);
  }
}

let A = {
  receiveFlower: (flower) => {
    console.log('收到' + flower);
  }
}

xiaoming.sendFlower(A);
