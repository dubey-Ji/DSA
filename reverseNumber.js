let x = 389;
let reverseNum = 0;
let str = x.toString();
let y = str.length;
while(y>0) {
    y--;
    if (reverseNum === 0) {
        reverseNum = str[y]
        continue;
    }
    reverseNum = reverseNum + str[y];
}
console.log(reverseNum);
