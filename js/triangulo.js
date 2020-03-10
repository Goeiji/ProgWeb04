function verificar() {
    var ladoA = Number(document.getElementById('ladoA').value);
    var ladoB = Number(document.getElementById('ladoB').value);
    var ladoC = Number(document.getElementById('ladoC').value);

if ((ladoA <= 0) || (ladoB <= 0) || (ladoC <= 0)) {
    alert("Insira apenas números acima de 0(Zero)");
    return;
}

 if (ladoA <= (ladoB + ladoC)) {
     if (ladoB <= (ladoA + ladoC)) {
         if (ladoC <= (ladoA + ladoB)) {
            document.getElementById('verif').innerHTML = "É um TRIÂNGULO";
         } else {
             document.getElementById('verif').innerHTML = "NÃO é um triângulo";
         }
    } else {
        document.getElementById('verif').innerHTML = "NÃO é um triângulo";
    }
}

switch (ladoA) {
    case ladoB:
        if (ladoB == ladoC) {
            document.getElementById('result').innerHTML = "Triângulo Equilátero";
        } else {
            document.getElementById('result').innerHTML = "Triângulo Isósceles";
        }                
        break;
    case ladoC:
        if (ladoC != ladoB) {
            document.getElementById('result').innerHTML = "Triângulo Isósceles";
        }
        break;
    default:
        if ((ladoA != ladoB) && (ladoB == ladoC)) {
            document.getElementById('result').innerHTML = "Triângulo Isósceles";
        } else {
            document.getElementById('result').innerHTML = "Triângulo Escaleno";
        }
        break;
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, 50);
});