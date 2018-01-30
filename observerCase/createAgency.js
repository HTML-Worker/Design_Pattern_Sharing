/**
 * 买房不必一定要去售楼处
 * 添加中介公司
 * 订阅者和发布者之间是透明的
 */

let Event = (() => {
  let clientList = {},
  listen,
  trigger,
  remove;

  listen = (...rest) => {
    if (!clientList[rest[0]]) {
      clientList[rest[0]] = [];
    }
    clientList[rest[0]].push(rest[1]); //订阅消息存入缓存列表
  };

  trigger = (...rest) => {
    if (!clientList[rest[0]]) {
      return;
    }
    for (let i=0; i < clientList[rest[0]].length; i++) {
      let fn = clientList[rest[0]][i];
      fn(rest[1]);
    }
  };

  return {
    listen: listen,
    trigger: trigger
  }
})();

 Event.listen(20000, (price) => {
   console.log('1:价格' + price);
 });

 Event.listen(20000, (price) => {
   console.log('2:价格' + price);
 });

 Event.listen(5, (price) => {
   console.log('3:价格' + price);
 });

 Event.trigger(20000, 88);

 // 注：
 // 观察者模式与订阅-发布者模式的细微差别就在这
