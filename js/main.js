import { Foo } from 'foo.js'

const f = new Foo('me');

console.log('This is top-level');

document.addEventListener('DOMContentLoaded', event => {
    console.log('This is in event-listener');
    const g = new Foo('you');
})