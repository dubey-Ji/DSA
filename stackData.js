class Stack {
    arr = [];
    count = 0;

    // Adding value to the last place
    pushData(value) {
        this.arr[this.count] = value;
        this.count+=1;
    }

    // Removing last item added
    popData() {
        this.count-=1
        delete this.arr[this.count];
    }

    // Getting last item added from stack
    peekData() {
        console.log(this.arr[this.count-1]);
    }

    // Performing search (Accessing element)
    containsData(value) {
        let res = false;
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i] == value) {
                res = true;
            }
        }
        if (res) {
            console.log(`Element ${value} is present in stack`);
        } else {
            console.log(`Element ${value} is not present in stack`);

        }
    }

}

const stack = new Stack();
stack.pushData(20);
stack.pushData(25);
stack.pushData(30);
stack.popData();
stack.popData();
stack.pushData(35);

console.log(stack.arr);
stack.peekData();
stack.containsData(20);