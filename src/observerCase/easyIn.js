简单入门认识
常用的发布-订阅者模式

document.body.addEventListener('click', () => {
    console.log('常见吧，我都惊呆了!');
})

注：
监控用户点击document.body的动作
无法预知什么时候点击
当body被点击时，便会向订阅者发布这个消息
