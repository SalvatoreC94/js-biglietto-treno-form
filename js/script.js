document.getElementById('bigliettoForm').onsubmit = function (event) {
    event.preventDefault();
    console.log("Form submission prevented.");
    calcolaPrezzo();
};

function calcolaPrezzo() {
    const percorrenza = parseInt(document.getElementById('chilometri').value);
    const eta = parseInt(document.getElementById('eta').value);
    const prezzoAlKilometro = 0.21;

    console.log("Valore di percorrenza:", percorrenza);
    console.log("Valore di età:", eta);

    if (isNaN(percorrenza) || isNaN(eta) || percorrenza <= 0 || eta <= 0) {
        document.getElementById('costo').innerHTML = "Per favore, inserisci valori validi per chilometri e età.";
        console.log("Input non validi. Messaggio di errore mostrato.");
        return;
    }

    let prezzoBiglietto = prezzoAlKilometro * percorrenza;
    console.log("Prezzo del biglietto senza sconto:", prezzoBiglietto);

    if (eta <= 18) {
        prezzoBiglietto *= 0.80; // 20% di sconto
        console.log("Sconto del 20% applicato per età <= 18. Nuovo prezzo:", prezzoBiglietto);
    } else if (eta >= 65) {
        prezzoBiglietto *= 0.60; // 40% di sconto
        console.log("Sconto del 40% applicato per età >= 65. Nuovo prezzo:", prezzoBiglietto);
    }

    document.getElementById('costo').innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + " Euro";
    console.log("Prezzo finale del biglietto mostrato all'utente:", prezzoBiglietto.toFixed(2));
}
