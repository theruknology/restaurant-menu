import _ from 'lodash';
import './style.css'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'We Getting Started!';
    element.classList.add('home');

    return element;
}

document.body.appendChild(component());