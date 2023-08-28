let name1 = "naman";
let str = "";

for (let i = name1.length - 1; i >= 0; i++) {
    str += name1[i];
}
if (name1 == str) {
    console.log("It is a Palendrome");
}
else {
    console.log("It is not a Palendrome");
}
