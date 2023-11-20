const button = document.getElementById('button-1');
const modal = document.getElementById('modal');

const button2 = document.getElementById('button-2');
const modal2 = document.getElementById('modal2');

const button3 = document.getElementById('button-3');
const modal3 = document.getElementById('modal3');

const button4 = document.getElementById('button-4');
const modal4 = document.getElementById('modal4');

console.log(button);
console.log(modal);

button.addEventListener('click', () => modal.classList.add('modal--show'))
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
})


button2.addEventListener('click', () => modal.classList.add('modal--show'))
modal2.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
})

button3.addEventListener('click', () => modal.classList.add('modal--show'))
modal3.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
})

button4.addEventListener('click', () => modal.classList.add('modal--show'))
modal4.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
})