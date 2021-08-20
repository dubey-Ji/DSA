function revBit(n) {
    let lsb;
    let result = 0;
    for(let i = 1; i < 32; i++) {
        lsb = n & 1;
        result = result | lsb;
        n = n >> 1;
        result = result << 1;
    }
    console.log(result);
}

// n = 43261596 , expected answer = 964176192
// n = 4294967293 , expected answer = 3221225471
// revBit(43261596) Output = 964176192
revBit(4294967293); // Output = -1073741826