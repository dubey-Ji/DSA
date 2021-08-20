var shortestSubarray = function(nums, k) {
    // Creating array to store subarray
    let arr = [];
    let tmp = 0;
    let count = true;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j <= tmp; j++) {
            arr.push(nums[j])
            tmp+=1;
        }
        console.log(arr);
    }
    
};

shortestSubarray([2,-1,2], 3);