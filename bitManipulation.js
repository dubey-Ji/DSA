let n = 5;
while(n) {
    oldBit = n & 1;
    n = n >> 1;
    newBit = n & 1;
    if (oldBit === newBit) {
        console.log("false");
        break;
    }
    if (oldBit!=newBit) {
        n = n >> 1;
        continue;
    }
    console.log("true");
}
// return n;
