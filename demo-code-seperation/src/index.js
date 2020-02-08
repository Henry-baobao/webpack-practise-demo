// function getComponent() {
//     return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         let element = document.createElement('div');

//         element.innerHTML = _.join(['Hello', 'my webpack code splitting demo!'], ', ');

//         return element;
//     }).catch(err => 'An error occured while loading the component!');

// }

async function getComponent() {
    let element = document.createElement('div');

    const _ = await import(/* webpackChunkName: "lodash" */'lodash');

    element.innerHTML = _.join(['Hello', 'my webpack code splitting demo!'], ', ');

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});