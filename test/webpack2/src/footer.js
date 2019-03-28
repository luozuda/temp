import {red,green} from './color';
const divTop = document.createElement("div");
divTop.innerText="我是top";
divTop.style.color = red;
const divBottom = document.createElement("div");
divBottom.innerText="我是bottom";
divBottom.style.color = green;
export {divTop,divBottom};