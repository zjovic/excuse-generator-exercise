const who = ['The dog','My grandma','His turtle','My bird'];
const action = ['ate','peed','crushed','broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const $el = document.querySelector('#excuse');
const excuseParts = [who, action, what, when];

const randomNumGen = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

const excuse = excuseParts.map(part => part[randomNumGen(part.length - 1)]);

window.addEventListener('load', () => {
    $el.innerHTML = excuse.join(' ');
})