/**
 * 添加区分，订阅专属信息
 * 我要20000平的庄园
 * 不要给我介绍5平的房子
 */

let office = {}; //定义售楼处

office.clientList = []; //缓存列表

office.listen = (...rest) => {   //增加订阅者方法
  if (!office.clientList[rest[0]]) {
    office.clientList[rest[0]] = [];
  }
  office.clientList[rest[0]].push(rest[1]); //订阅消息存入缓存列表
}

//发布消息
office.trigger = (...rest) => {
  if (!office.clientList[rest[0]]) {
    return;
  }
  for (let i=0; i < office.clientList[rest[0]].length; i++) {
    let fn = office.clientList[rest[0]][i];
    fn(rest[1]);
  }
}

office.listen(20000, (price) => {
  console.log('1:价格' + price);
});

office.listen(20000, (price) => {
  console.log('2:价格' + price);
});

office.listen(5, (price) => {
  console.log('3:价格' + price);
});

office.trigger(20000, 88);
