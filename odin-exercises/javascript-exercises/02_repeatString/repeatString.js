const repeatString = function(phrase, num) {
    // let phrase = phrase;
    // let num = num;
    if (num < 0) return 'ERROR';

    let retphrase = '';
    for (let i = num; i>0; i--){
        retphrase += phrase;
    }
    return retphrase
};

// Do not edit below this line
module.exports = repeatString;
