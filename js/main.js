`use strict`
// aggiungo DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Variabili per memorizzare il primo operando, l'operatore e il secondo operando
    let primaOperazione = "";
    let operatore = "";
    let secondaOperazione = "";

    // Elemento risultato
    const risposta = document.getElementById("result");

    // Event listener per gli operatori
    const listenerOperatori = document.querySelectorAll('.buttons .row.operators button:not(.orange)')
    console.log(listenerOperatori);
    listenerOperatori.forEach(button => {
        button.addEventListener('click', function () {
            primaOperazione = risposta.innerHTML;
            operatore = button.innerHTML;
            risposta.innerHTML = "0";
        });
    });

    // Event listener per i numeri
    const listenerNumeri = document.querySelectorAll('.buttons .row.numbers button')
    
    listenerNumeri.forEach(button => {
        button.addEventListener('click', function () {
            if (risposta.innerHTML === "0") {
                risposta.innerHTML = button.innerHTML;
            } else {
                risposta.innerHTML += button.innerHTML;
            }
        });
    });


    // Event listener per il buttton "="
    const listenerUguale =document.querySelector('.buttons .row.numbers button.orange')
    listenerUguale.addEventListener('click', function () {
        secondaOperazione = risposta.innerHTML;
        let result;
        // Eseguire i calcoli in base all'operatoree
        switch (operatore) {
            case '+':
                result = parseFloat(primaOperazione) + parseFloat(secondaOperazione);
                break;
            case '-':
                result = parseFloat(primaOperazione) - parseFloat(secondaOperazione);
                break;
            case '×':
                result = parseFloat(primaOperazione) * parseFloat(secondaOperazione);
                break;
            case '÷':
                if (parseFloat(secondaOperazione) === 0) {
                    result = "Error";
                } else {
                    result = parseFloat(primaOperazione) / parseFloat(secondaOperazione);
                }
                break;
            default:
                result = "Error";
                break;
        }
        // Mostra risultato
        risposta.innerHTML = result;
        // Reimpostare le variabili
        primaOperazione = "";
        operatore = "";
        secondaOperazione = "";
    });

    // Event listener per il button "C" (Clear)
    const listenerC = document.querySelector('.buttons .row.operators button.orange')
    listenerC.addEventListener('click', function () {
        risposta.innerHTML = "0";
        // Reimpostare le variabili per il button "C"
        primaOperazione = "";
        operatore = "";
        secondaOperazione = "";
    });
});
