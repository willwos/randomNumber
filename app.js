var randomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }    
    return getRandom;
}
console.log(randomNumber(1, 100));
