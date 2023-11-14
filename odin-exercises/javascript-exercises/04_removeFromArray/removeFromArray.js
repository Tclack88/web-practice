// My original solution (lengthy)
// const removeFromArray = function() {
//     let filtered = [];
//     const args = Array.prototype.slice.call(arguments);
//     arr= args[0];
//     elems = args.slice(1);
//     for (let arr_elem of arr){
//         let allowed = true;
//         for (let elem of elems){
//             if (elem === arr_elem){
//                 allowed = false;
//             }
//         }
//         if (allowed){
//             filtered.push(arr_elem);
//         }
//     }
//     return filtered;
// };

// Improved solution
const removeFromArray = function(arr, ...args) {
    let filtered = [];
    arr.forEach((elem) => {
        if (!(args.includes(elem))){
            filtered.push(elem);
        }
    });

    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
