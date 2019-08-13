import { Canvas, Dom } from "./viewer";
import { ILocation } from "./types/CrashClass";

function createImg(n: number) {
  let res = [];
  for (var i = 0; i < n; i++) {
    const img = new Image();
    const loc: ILocation = {
      x: ((Math.random() * 20) | 0) * 15,
      y: ((Math.random() * 20) | 0) * 20,
      rotate: (Math.random() * 360) | 0
    };
    const temp = { img, loc };
    img.style.position = "absolute";
    img.style.left = loc.x + "px";
    img.style.top = loc.y + "px";
    img.style.transform = `rotate(${loc.rotate}deg)`;
    img.width = 15;
    img.height = 20;
    img.style.border = "1px solid #abcdef";
    img.src = "./static/tree.png";
    res.push(temp);
  }
  return res;
}
let domArr: Dom[] = [];
createImg(10).forEach(item => {
  const dom = new Dom(item.loc, item.img);
  domArr.push(dom);
  dom.show();
});

const Id: number = window.requestAnimationFrame(() => {
  fall(domArr);
});

function fall(domArr: Dom[]) {
  // // 判断是否碰撞
  domArr.forEach(item => {
    item.location = {
      x: item.location.x,
      y: item.location.y + 1,
      rotate: (item.location.rotate + Math.random() * 2) | 0
    };
  });
  const Id: number = window.requestAnimationFrame(() => {
    fall(domArr);
  });
}
