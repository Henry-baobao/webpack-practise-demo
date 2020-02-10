import _ from 'lodash';
import print from './print';

function component() {
    let element = document.createElement('div');

    //Lodash currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'my first webpack'], ', ');

    //Lodash is imported by this script
    // element.innerHTML = _.join(['Hello', 'my webpack start demo!'], ', ');

    //use style 
    element.innerHTML = _.join(['This is', 'caching demo'], ': ');
    element.onclick = print.bind(null, 'bind click event to print()');

    return element;
}

document.body.appendChild(component());