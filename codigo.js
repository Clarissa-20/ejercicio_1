function suma(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 + num2;

    document.getElementById('resultado').value = resultado;
}

function resta(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 - num2;
   
    document.getElementById('resultado').value = resultado;
}

function multi(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 * num2;
   
    document.getElementById('resultado').value = resultado;
}

function divi(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 / num2;
   
    document.getElementById('resultado').value = resultado;
}

function residuo(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 % num2;
   
    document.getElementById('resultado').value = resultado;
}