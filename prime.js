let count = 0;
let prime = 13;
for (let i = 1; i <= prime; i++) {
    if (prime % i == 0) {
        count++;
    }
}
if (count == 0) {
    console.log("It is a prime Number");
}
else {
    console.log("It is not a prime Number");
}