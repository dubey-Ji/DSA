s = "abbaca";
const stack = [];
for(let letter of s) {
    let stackLastEl = stack[stack.length - 1]; //b
    console.log(stackLastEl);
    if (letter === stackLastEl) {
        stack.pop();
        continue;
    }

    stack.push(letter);
    console.log(stack);
}

console.log(stack.join(''));