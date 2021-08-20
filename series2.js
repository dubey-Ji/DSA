let x = 1;
while(x<=100) {
    if (x%5===0) {
        x++;
        continue;
    }
    console.log(x);
    x++;
}