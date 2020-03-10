function calcular() {
    var velocidade = Number(document.getElementById('vel').value);
    var velCond = Number(document.getElementById('velCond').value);

    if (velCond <= velocidade) {
        document.getElementById('resultado').innerHTML = "Sem Multa";
    }
    if((velCond >= velocidade) && (velCond <= (velocidade*1.2))) {
        document.getElementById('resultado').innerHTML = "Multa Leve";
    }
    if (velCond >= (velocidade*1.2)) {
        document.getElementById('resultado').innerHTML = "Multa Grave";
    }
}