function verificar() {
    var num = Number(document.getElementById('number').value);
    var cont = 0;

    for(var i = 1; i <= num; i++){
        var duvida = num % i;
        if (duvida == 0){
            cont++;
        }
    }

    if (cont == 2) {
        alert('O número ' + num + '\né PRIMO!');
    } else {
        alert('O número ' + num + '\nNÃO é PRIMO!');
    }
}