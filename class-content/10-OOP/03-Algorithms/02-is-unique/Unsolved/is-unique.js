// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    const mid = (arr.length)/2;
    console.log(mid);
    for(let i =0; i < mid; i++){
        for(let j= i+1; i < arr.length; j++){
            if(arr[i]===arr[j]){
                return true;
            }
        }
    }
    return false;
};
