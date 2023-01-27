// https://webpack.js.org/guides/getting-started/

import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div
  const myIcon = new Image();
  myIcon.scr = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
