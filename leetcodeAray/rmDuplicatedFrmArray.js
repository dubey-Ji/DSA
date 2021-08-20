var removeDuplicates = function(nums) {
    let tmp;
    let position = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i >= 1) {
            if(nums[i] == tmp) {
                continue
            } else {
                tmp = nums[i];
                nums.splice(position, 0, nums[i]);
                count += 1;
                position += 1;
                continue;
            }
        }
        tmp = nums[i];
        nums.splice(position, 0, nums[i]);
        count += 1;
        position += 1;
    }
    console.log(count);    
}

removeDuplicates([1,1,2])