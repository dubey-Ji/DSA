let arr = [1,2,3,4,5,6,7];
let k = 3;
let counter;
// Programm Used
while(arr.length - 1 < k) {
    k = k - arr.length;
    arr.unshift(...arr.splice(k * -1));
}
console.log(arr);


// for(let i = 0; i < k*2; i++) {
//     if(i<k) {

//         arr.unshift(arr[arr.length-counter]);
//         counter++
//     }
//     else {

//         arr.pop();
//     }
// }
// let newArr = new Array();
// for(let i = 0; i < arr.length; i++) {
//     counter = (i+k)%arr.length;
//     newArr[counter] = arr[i];
// }
// arr = newArr;
// console.log(newArr);
// console.log(arr);
// for(let i = 0; i < k; i++) {
//     let val = arr[0];
//     for(let j = 1; j < arr.length; j++) {
//         let tmp = arr[j];
//         arr[j] = val;
//         val = tmp;
//     }
// }
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
//     let count = (i+k)%arr.length;
//     let tmp = arr[count];
//     arr[count] = arr[i];
//     arr[i] = tmp;
// }
// console.log(arr);