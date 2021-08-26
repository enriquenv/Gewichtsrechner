function rechnen(){

    let größe = document.getElementById("größe").value;
    let alter = document.getElementById("alter").value;
    let idealgewicht;


    if (document.getElementById("breite").checked) {
        idealgewicht = [(größe - 100) + (alter / 10)] * 0.9 * 1.1;
    } else if (document.getElementById("schmale").checked) {
        idealgewicht = [(größe - 100) + (alter / 10)] * 0.9 * 0.9;
    }

    document.getElementById("ergebnis").innerHTML = `Dein Idealgewicht ist ${idealgewicht.toFixed(1)} kg.`;

};