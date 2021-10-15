// Polyfill for reverse

// Array.prototype.myReverse = function() {
//     let start = 0;
//     let end = arr.length - 1;
//     while(start < end) {
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// const arr = [1,2,3,4]
// arr.myReverse()
// console.log(arr)


//Polyfil for join
Array.prototype.myJoin = function(param) {
    let result = `"`;
    if(!param) {
        for(let i = 0; i < arr.length; i++){
            result += arr[i];
        }
    } else {
        for(let i = 0; i < arr.length; i++){
            if(i == arr.length - 1) {
                result += arr[i]
            } else {
                result += arr[i] + param;
            }             
        }
    }
    result += '"';
    return result;
}

const arr = [1,2,3]
console.log(arr.myJoin(' - '))

//polyfil for split
