let n = -1;
let arr = new Array();

function toHex(n) {

    while(n!=0) {
        let r = n % 16;
        if (r > 9 && r < 16) {
            arr.push(r.toString(16).toUpperCase());
            n = Math.floor(n/16);
            continue;
        }
        arr.push(r)
        n = Math.floor(n/16);
    }
    console.log(arr.reverse().join(""));
}

if (n < 0) {
    n = (~n + 1 >>> 0)
    toHex(n);
}
else {
    toHex(n);
}

// n = (~n + 1 >>> 0).toString(16);
// console.log(n);
// // n = n + 1;
// console.log(n);


// console.log(n);