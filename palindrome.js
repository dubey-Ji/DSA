let s = "()";
let arr = [];
let reverse = [];
console.log(s[0]);
for(let i = 0; i < s.length; i ++) {
    arr.push(s[i]);
}
console.log(arr);
// console.log(arr[1].charCodeAt(0));
// for(let i = 0; i < s.length; i++) {
//     console.log(arr[i].charCodeAt(0));
// }
// console.log(arr[0]);
for(let i = 0; i < s.length; i ++) {
    reverse.push(arr.pop());
}
console.log(reverse);
// console.log(reverse);
// for(let i = 0; i < s.length; i ++) {
//     console.log(arr[i]);
//     console.log(reverse[i]);
//     if (arr[i].charCodeAt[i] == reverse[i].charCodeAt(i)) {
//         console.log(true);
//     } else
//         console.log(false);
// }
