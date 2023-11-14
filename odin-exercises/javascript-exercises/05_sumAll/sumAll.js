const sumAll = function(a,b) {
    if (a<=0 || b<=0 || typeof(a) !="number" || typeof(b) != "number" ){
        return "ERROR";
    }
    let total = 0;
    let lower, upper;
    // if (a<b){
    //     lower = a;
    //     upper = b;
    // }else{
    //     lower = b;
    //     upper = a;
    // }
    // An alternative tot he above, for switching lower and upper bounds
    lower = a;
    upper = b;
    if (b<a){
        [lower, upper] = [upper, lower];
    }
    for (let i=lower; i<=upper; i++){
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
