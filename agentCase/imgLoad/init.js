//网页加载一张图片
let myImage = (() => {
  let imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: (src) => {
      imgNode.src = src;
    }
  }
})();

myImage.setSrc("http://img17.3lian.com/d/file/201702/15/2da7ad2722e0fec8a7eec97216d1cdb5.jpg");
