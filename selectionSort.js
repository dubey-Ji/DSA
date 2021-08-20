let arr = [2,7,4,1,5,3];
for(let i = 0; i < arr.length-2; i++) {
    let k = i;
    for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[k]) {
            k = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}
console.log(arr);