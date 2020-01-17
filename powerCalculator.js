const powerCalculator = function (base, exp){
    if (exp<=0) {
        return 'exponent should be >= 0';
    }
    if (exp===1) {
        return base;
    }
    else {
        return base*powerCalculator(base, exp-1);
    }
}

let base=27;
let exp=1;
console.log(powerCalculator(base,exp));