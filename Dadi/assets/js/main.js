const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(pcNumber);

document.getElementById("userNumber").innerHTML = userNumber;
document.getElementById("pcNumber").innerHTML = pcNumber;

let labelPrint = document.getElementById("winner");

if (userNumber > pcNumber) {
    labelPrint.innerHTML = `Il vincitore sei tu!`;
} else if (pcNumber > userNumber) {
    labelPrint.innerHTML = `Il vincitore è il PC!`;
} else {
    labelPrint.innerHTML = `PARITÀ!`;
}
