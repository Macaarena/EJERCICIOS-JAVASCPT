/*Ejercicio 1*/
let edad = parseInt(prompt("Digita tu edad"));
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("No eres mayor de edad");
}
    
/*Ejercicio 2*/
let calificación1=parseInt(prompt("Dijita tu primera nota"));
let calificación2=parseInt(prompt("Dijita tu segunda nota"));
let calificación3=parseInt(prompt("Dijita tu tercera nota"));
let promedio=(calificación1+calificación2+calificación3)/3;
if(promedio>=6){
    console.log("Aprobaste el curso con un promedio de "+promedio);}else{
        console.log("Reprovaste el curso con un promedio de "+promedio);
    }
    
/*Ejercicio 3*/
let NumeroA=parseInt(prompt("Dijita tu primer número"));
let NumeroB=parseInt(prompt("Dijita tu segundo número"));
if (NumeroA>NumeroB){
console.log("El Numero A es mayor");
}
else if (NumeroA<NumeroB)
{
console.log("El Numero A es menor");
    }
else {
alert("El Numero A es igual a B");
    }

/*Ejercicio 4*/
num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Ingresaste un valor no válido. Por favor, ingresa números válidos.");
} else {
    if (num1 < num2) {
        console.log(num1 + ", " + num2);
    } else {
        console.log(num2 + ", " + num1);
    }
}


/*Ejercicio 5*/
let persona=parseFloat(prompt("digita su peso en kilogramos"));
 if (persona<=40 ){
    console.log("persona baja de peso");
 } else if (persona>=41 && persona<=70){
    console.log("persona promedio");
 }else{
    console.log("persona con sobrepeso")
 }

/*Ejercicio 6*/
function obtenerDiaSemana(numero) {
    switch (numero) {
      case 1:
        return "LUNES";
      case 2:
        return "MARTES";
      case 3:
        return "MIÉRCOLES";
      case 4:
        return "JUEVES";
      case 5:
        return "VIERNES";
      case 6:
        return "SÁBADO";
      case 7:
        return "DOMINGO";
      default:
        return "ESCRIBISTE UN NÚMERO FUERA DEL RANGO. ESCRIBE UN NÚMERO ENTRE 1 Y 7";
    }
}
obtenerDiaSemana(5);


/*Ejercicio 7*/
let  compra=parseFloat(prompt("digita su compra"));
let descuento1= compra*0.8;
let descuento2= compra*0.95;
if (compra>=1000){
    console.log("su compra final es "+descuento1);
}else{
    console.log("su compra final  es "+descuento2);
}

/*Ejercicio 8*/
let horastrabajo=parseInt(prompt("Digita el número de horas que trabajaste esta semana"));
let esto=(horastrabajo>=40 || horastrabajo<40);
if(esto*16000){
    let salario=horastrabajo*16000;
    alert(`Tu salario a la semana es ${salario}`);
}

/*Ejercicio 9*/
let nombre1 = prompt("Ingrese el nombre de la primera persona");
let edad1 = prompt("Ingrese la edad de la primera persona");

let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let edad2 = prompt("Ingrese la edad de la segunda persona");

if (edad1 > edad2) {
    console.log(nombre1 + " es mayor que " + nombre2);
} else if (edad2 > edad1) {
    console.log(nombre2 + " es mayor que " + nombre1);
} else {
    console.log(nombre1 + " y " + nombre2 + " tienen la misma edad");
}

/*Ejercicio 10*/
let camisas = prompt("Ingrese el número de camisas que compró");
let precioTotal = prompt("Ingrese el precio total de las camisas");

if (camisas >= 3) {
    precioTotal *= 0.8;
} else {
    precioTotal *= 0.9;
}

console.log("El total a pagar con descuento es " + precioTotal);

/*Ejercicio 11*/
let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");

if (num1 == num2) {
    console.log("El resultado de la multiplicación es " + num1 * num2);
} else if (num1 > num2) {
    console.log("El resultado de la resta es " + (num1 - num2));
} else {
    console.log("El resultado de la suma es " + (num1 + num2));
}

/*Ejercicio 12*/
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división)");
let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");

switch (operacion) {
    case "suma":
        console.log("El resultado de la suma es " + (num1 + num2));
        break;
    case "resta":
        console.log("El resultado de la resta es " + (num1 - num2));
        break;
    case "multiplicación":
        console.log("El resultado de la multiplicación es " + num1 * num2);
        break;
    case "división":
        console.log("El resultado de la división es " + num1 / num2);
        break;
    default:
        console.log("Operación no reconocida");
}

/*Ejercicio 13*/
let num = prompt("Ingrese un número");

if (num % 2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

/*Ejercicio 14*/
let peso = prompt("Ingrese su peso en kilogramos");
let altura = prompt("Ingrese su altura en metros");

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc < 24.9) {
    console.log("Peso normal");
} else if (imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}

/*Ejercicio 15*/
let num= prompt("Ingrese un número");

if (num > 0) {
    console.log("El número es positivo");
} else if (num < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

/*Ejercicio 16*/
let nota = prompt("Ingrese la nota final de la materia de algoritmos");

if (nota >= 10 && nota <= 33) {
    console.log("El desempeño es Bajo");
} else if (nota >= 34 && nota <= 38) {
    console.log("El desempeño es Básico");
} else if (nota >= 39 && nota <= 44) {
    console.log("El desempeño es Alto");
} else if (nota >= 45 && nota <= 50) {
    console.log("El desempeño es Superior");
} else {
    console.log("Nota no reconocida");
}

/*Ejercicio 17*/
let figura = prompt("Ingrese la figura geométrica (triángulo, cuadrado)");

if (figura == "triángulo") {
    let base = prompt("Ingrese la base del triángulo");
    let altura = prompt("Ingrese la altura del triángulo");
    console.log("El área del triángulo es " + (base * altura) / 2);
} else if (figura == "cuadrado") {
    let lado = prompt("Ingrese el lado del cuadrado");
    console.log("El área del cuadrado es " + lado * lado);
} else {
    console.log("Figura no reconocida");
}

/*Ejercicio 18*/
let num = prompt("Ingrese un número");

if (num < 10) {
    console.log("Es un número menor que 10");
} else if (num <= 20) {
    console.log("Es un número entre 10 y 20");
} else {
    console.log("Es un número mayor que 20");
}

/*Ejercicio 19*/
let nombre = prompt("Ingrese su nombre de usuario");
let contraseña = prompt("Ingrese su contraseña");

if (nombre == "admin" && contraseña == "12345") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

/*Ejercicio 20*/
let genero = prompt("Ingrese su género");
let edad = prompt("Ingrese su edad");

if (genero == "masculino" && edad > 18) {
    console.log("Es elegible para el servicio militar");
} else {
    console.log("No es elegible para el servicio militar");
}




