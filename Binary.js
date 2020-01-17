const getBinary = function (n) {
    let Binary=''
    if (n===0) {
        return 0;
    }
    else {
        return n % 2 + 10 * getBinary(Math.floor(n / 2));
    }
}
console.log(getBinary(10));