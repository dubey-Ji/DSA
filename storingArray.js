var series = new Array();
var n = 2;
var counter = 0;
while(counter<20) {
    var flag = true;
    for(let i = 2; i < n; i++) {
        if(n%i===0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        series[counter] = n;
        counter++;
    }
    n++;
}
console.log(series);