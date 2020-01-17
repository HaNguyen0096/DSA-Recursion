const reverseString = function (str){
    if (str.length === 1) {
        return str[0];
    }
    else {
        return reverseString(str.slice(1))+str[0];
    }
}

let str='reverseMe';
console.log(reverseString(str));