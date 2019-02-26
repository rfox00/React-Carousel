import _ from 'lodash';
import './styles.css';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console123131aaaaa2!';
  btn.onclick = printMe;
  
  element.classList.add('hello');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());