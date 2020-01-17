
const anagrams = function (str) {
    let all = [];
    if (str.length === 1) {
        all.push(str);
        return all;
    }
    for (let i = 0; i < str.length; i++){
        let prefix = str[i];
        let rest = str.substring(0,i)+str.substring(i+1,str.length);
        let newWord = anagrams(rest);
        for (let j = 0;  j < newWord.length; j++){
            console.log(prefix+newWord[j])
            all.push(prefix+newWord[j]);
        }
    }
    return all;
}

console.log(anagrams('abc'));