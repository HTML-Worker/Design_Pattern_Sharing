/**
 * 售楼处实现发布-订阅模式
 *1、指定发布者。（office）
 *2、给发布者添加缓存列表，用于存放回掉函数通知订阅者。（花名册）
 *3、发布消息时，发布者遍历缓存列表，触发订阅者回调。（亏本甩卖通知）
 */

let office = {}; //定义售楼处

office.clientList = []; //缓存列表

office.listen = (fn) => {   //增加订阅者方法
  office.clientList.push(fn); //订阅消息存入缓存列表
}

//发布消息
office.trigger = () => {
  for (let i=0; i < office.clientList.length; i++) {
    let fn = office.clientList[i];
    fn();
  }
}

office.listen((...rest) => {
  console.log('价格' + rest[0]);
  console.log('面积' + rest[1]);
})

office.trigger(20000, 88);
