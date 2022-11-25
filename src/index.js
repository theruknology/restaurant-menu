import _ from 'lodash';
import './style.css'

function createNavbar(logo, ...components) {

    const navbar = document.createElement('nav');

    navbar.classList.add('primary-nav');
    navbar.innerHTML = `<a class="logo">${logo}</a>`;
    
    const links = document.createElement('ul');
    links.classList.add('nav-links');

    for (let i = 0; i < components.length; i++) {
        links.innerHTML += `<li> <a id="${components[i]}">${components[i]}</a> </li>`;
    }

    navbar.appendChild(links);

    return navbar;
}


const navigation = createNavbar('GoodFood', 'Home', 'Menu', 'About', 'Contact');

document.body.appendChild(navigation);
