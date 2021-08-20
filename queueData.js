class Queue {
    arr = [];
    count = 0;

    // Adding value to the Queue data at the last elemet
    enqueueData(value) {
        this.arr[this.count] = value;
        this.count+=1;
    }

    // Removing data from the first position in Queue data
    dequeData() {
        this.count-=1;
        let deletedElement =  this.arr[0];
        delete this.arr[0];
        let tmp;
        // Shifting other element one index forward after deleting first in element
        for(let i = 0; i < this.arr.length; i++) {
            tmp = this.arr[i+1];
            this.arr[i] = tmp;
        }
        console.log(`Element ${deletedElement} is deleted`);
    }

    // Returing the last in element
    peekData() {
        console.log(this.arr[this.count-1]);
    }

    // Checking if the element is present or not and returing it.
    containsData(value) {
        let res = false;
        for(let i = 0; i < this.count; i++) {
            if (this.arr[i] == value) {
                res = true;
            }
        }
        (res) ? console.log(`Element ${value} is present in queue`) : console.log(`Element ${value} is not present in queue`);
    }
}

const q = new Queue();
q.enqueueData(20);
q.enqueueData(25);
q.enqueueData(30);
q.enqueueData(40);
q.dequeData();
q.dequeData();
q.enqueueData(45);
q.enqueueData(55);
console.log(q.arr);
q.peekData()
q.containsData(50)