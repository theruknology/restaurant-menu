import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'We Getting Started!';

    return element;
}

document.body.appendChild(component());