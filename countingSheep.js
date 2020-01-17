const countSheep = function (sheeps){
    if (sheeps === 0) {
        return 'All sheep jumped over the fence ';
    }
    else {
        console.log(sheeps + ' : Another sheep jumps over the fence');
        return countSheep(sheeps-1);
    }
}

let sheeps=3;
console.log(countSheep(sheeps));