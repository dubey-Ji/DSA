let arr1 = [1,2,3,4];
for(let i = 0; i< arr1.length; i++) {
    for(let j = i; j < arr1.length; j++) {
        for(let k = i; k <= j; k++) {
            console.log(arr1[k]);
        }
    }
}