import React from 'react';
import ReactDOM from 'react-dom';
import 'vx-ui/lib/style/theme/index.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let initRootFontSize = function () {
  let deviceWidth = window.innerWidth
  let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
  let calc = 7.5
  if (deviceWidth > 768) deviceWidth = 768
  if (deviceWidth < 320) deviceWidth = 320
  if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
  let fontSize = Math.ceil(deviceWidth / calc)
  if (fontSize % 2 === 1) {
    fontSize--
  }
  document.documentElement.style.fontSize = fontSize + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
}
window.addEventListener('resize', initRootFontSize)
initRootFontSize()
