let heights = [4,3,6];
let stack = [];
if(heights.length == 1) {
    console.log(heights[0]);
} else {

    for(let i = 0; i < heights.length; i++) {
        if(heights[i] > heights[i+1]) {
            stack.push(heights[i]);
        } 
        else if(heights[i] < heights[i+1] || heights[i] == heights[i+1]) {
                let result = heights[i] + heights[i];
                if(result > heights[i+1]) {

                    stack.push(result);
                } else
                    stack.push(heights[i+1]);
            }
    }
    console.log(stack);
    console.log(Math.max(...stack));
}
// console.log(area);