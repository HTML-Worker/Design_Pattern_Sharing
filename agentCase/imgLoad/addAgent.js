//引入 proxyImage 对象，在图片加载之前，页面将出现一张占位图片

let myImage = (() => {
  let imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: (src) => {
      imgNode.src = src;
    }
  }
})();

let proxyImage = (() => {
  let img = new Image;
  img.onload = () => {
    myImage.setSrc(img.src);
  }

  return {
    setSrc: (src) => {
      myImage.setSrc('./imgs/loadImg.jpg');
      img.src = src;
    }
  }
})();

proxyImage.setSrc('http://img17.3lian.com/d/file/201702/15/2da7ad2722e0fec8a7eec97216d1cdb5.jpg');
console.log(proxyImage);


// 注：本体和代理都需要显式的实现同一方法，提高程序健壮性。
// 可以通过鸭子类型来检测，但是大多数时候是不做检测的，依靠程序员的自觉性。
// 代理和本体可替换使用。
// 虚拟代理合并HTTP请求（案例北知文书送达预览）

/*
不使用代理实现图片预加载：
let myImage = (() => {
  let imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  img.onload = () => {
    myImage.setSrc('./imgs/loadImg.jpg');
  }
  return {
    setSrc: (src) => {
      imgNode.src = src;
    }
  }
})();
myImage.setSrc('http://img17.3lian.com/d/file/201702/15/2da7ad2722e0fec8a7eec97216d1cdb5.jpg');
*/
