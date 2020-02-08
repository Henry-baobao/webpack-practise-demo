import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    //Lodash currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'my first webpack'], ', ');

    //Lodash is imported by this script
    element.innerHTML = _.join(['Hello', 'my webpack start demo!'], ', ');

    btn.innerHTML = 'Click me and check console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accept the updated print.js module');
        // printMe();

        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}