function calcular() {
    var valor = Number(document.getElementById('valor').value);
    var total = 0;
    var troco = 0;

    if (valor < 1) {
        document.getElementById('resultado').innerHTML = "Valor Insuficiente.";
    } if (valor > 3) {
        document.getElementById('resultado').innerHTML = "Valor Máximo é de R$3.00"
    } else {
        if ((valor >= 1) && (valor < 1.75)) {
            troco = valor - 1;
            total = 30;
        }
        if ((valor >= 1.75) && (valor < 3)) {
            troco = valor - 1.75;
            total = 60;
        }
        if (valor == 3) {
            troco = valor - 3;
            total = 120;
        }
        document.getElementById('resultado').innerHTML = ("Tempo permanecido<br>" + total + " minutos");        
        document.getElementById('troco').innerHTML = ("Troco<br>R$" + troco.toFixed(2));
    } 
}