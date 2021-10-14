const checkButtonElement = document.getElementById('accedi');
let labelPrint = document.getElementById("check");

const loggati = ["a@a.it", "b@b.it", "c@c.it"];
console.log(loggati);

checkButtonElement.addEventListener(`click`, function () {

    const emailElement = document.getElementById(`input_email`);
    const emailValue = emailElement.value;

    const checkMessage = "Bentornato";
    const notCheckMessage = "Utente non registrato";

    console.log(emailValue);

    for (let i = 0; i < loggati.length; i++) {
        if (emailValue === loggati[i]) {
            labelPrint.innerHTML = checkMessage;
            console.log(labelPrint);
            return 0;

        } else {
            labelPrint.innerHTML = notCheckMessage;
        }


    }
})