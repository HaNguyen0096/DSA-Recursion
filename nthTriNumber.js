const nTriNumber = function (n) {
    if (n===1) {
        return 1;
    }
    else {
        return n+nTriNumber(n-1);
    }
}

console.log(nTriNumber(10));