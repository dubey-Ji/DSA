let arr = [2,7,4,1,5,3];
for(let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let hole = i;
    while(hole > 0 && arr[hole-1] > val) {
        arr[hole] = arr[hole-1];
        hole = hole - 1;
    }
    arr[hole] = val;
}
console.log(arr);