const StrSplitter = function (str, seperator) {

    if (str.length===0){
        return '';
    }
    else if(str[0]===seperator){
        return `, `+StrSplitter(str.slice(1), seperator);
    }
    else {
        return str[0]+(StrSplitter(str.slice(1), seperator));
    }
};

console.log(StrSplitter('au/o/i','/'));