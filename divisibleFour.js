for (let i = 0; i <= 4; i++) {
    for (let j = 0; j<=2-i;j++){
        console.log("#");
    }
    for (let j = 0; j <=i; j++) {
        console.log("*");
    }
    for (let j = 0; j<=2-i;j++){
        console.log("#");
    }
    console.log("\n");
}