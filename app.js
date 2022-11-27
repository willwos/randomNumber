// const rollButton = document.querySelector('#rollButton');

// rollButton.addEventListener('click', () => {
//     randomNumber(1, 100);
// });

const resultNumber = document.querySelector('#resultNumber');

const randomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }    
    console.log('working', getRandom);
    //return getRandom;
    resultNumber.innerText = getRandom;
}
// console.log(randomNumber(1, 100));
