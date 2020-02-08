import _ from 'lodash';
import {
    cube
} from './math';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    let element = document.createElement('div');

    element.innerHTML = [
        'Hello webpack demo！',
        '5 cubed is equaled to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());