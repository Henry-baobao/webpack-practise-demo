import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    //Lodash currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'my first webpack'], ', ');

    //Lodash is imported by this script
    // element.innerHTML = _.join(['Hello', 'my webpack start demo!'], ', ');

    //use style 
    element.innerHTML = _.join(['This is', 'asset management demo'], ': ');
    element.classList.add('underline');

    //add image to div
    let myIcon = new Image();
    myIcon.src = Logo;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());