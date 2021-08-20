for (let i = 1; i < 1000; i++) {
    let cubeNum;
    let sumNum = 0;
    let str = i.toString();
    let y = str.length;
    while(y>0) {
        y--;
        cubeNum = str[y] * str[y] * str[y];
        sumNum = sumNum + cubeNum;
    }
    if (sumNum === i) {
        console.log(i);
    }
}
