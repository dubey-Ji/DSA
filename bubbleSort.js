let arr = [2,7,4,1,5,3];

let k = 1;
while(k < arr.length) {

    for(let i = 0; i < arr.length-k; i++) {
        if (arr[i] > arr[i+1]) {
            let tmp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = tmp;
        }
    }
    k++;
}
console.log(arr);