import _ from 'lodash';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    //Lodash is imported by this script
    element.innerHTML = _.join(['Hello', 'my webpack start demo!'], ', ');

    btn.innerHTML = 'Click me and check console';
    element.appendChild(btn);

    btn.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
        let print = module.default;

        print();
    });

    return element;
}

document.body.appendChild(component());