let btn1 = document.querySelector('#btn1');
let opros = document.querySelector('.survey');

const random = (min, max) => {
 const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

let btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 99)}%`;
    btn.style.top = `${random(0, 99)}%`;
})

btn.addEventListener('click', function(){
    opros.textContent = 'Dont lie, everyone knows that you are a gay xD'
})

btn1.addEventListener('click', function(){
    opros.textContent = 'Aww, you are so honest.. So cute!'
})