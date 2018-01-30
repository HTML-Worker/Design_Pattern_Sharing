/**
 * 换一个售楼处是否要重写一次代码
 * 当然不就可能
 * 提取订阅发布者功能，封装成对象
 */

 let event = {

   clientList: [], //缓存列表

   listen: (...rest) => {   //增加订阅者方法
     if (!office.clientList[rest[0]]) {
       office.clientList[rest[0]] = [];
     }
     office.clientList[rest[0]].push(rest[1]); //订阅消息存入缓存列表
   },

   trigger: (...rest) => {
     if (!office.clientList[rest[0]]) {
       return;
     }
     for (let i=0; i < office.clientList[rest[0]].length; i++) {
       let fn = office.clientList[rest[0]][i];
       fn(rest[1]);
     }
   },
 }

 let installEvent = obj => {
   for (let item in event) {
     obj[item] = event[item];
   }
 }


 let office = {}; //定义售楼处

 installEvent(office);

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
