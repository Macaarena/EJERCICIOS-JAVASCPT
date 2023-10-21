/*Ejercicio 1*/
let edad = parseInt(prompt("Digita tu edad"));
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("No eres mayor de edad");
}

/*Ejercicio 2*/
let calificación1 = parseInt(prompt("Dijita tu primera nota"));
let calificación2 = parseInt(prompt("Dijita tu segunda nota"));
let calificación3 = parseInt(prompt("Dijita tu tercera nota"));
let promedio = (calificación1 + calificación2 + calificación3) / 3;
if (promedio >= 6) {
  console.log("Aprobaste el curso con un promedio de " + promedio);
} else {
  console.log("Reprovaste el curso con un promedio de " + promedio);
}

/*Ejercicio 3*/
let NumeroA = parseInt(prompt("Dijita tu primer número"));
let NumeroB = parseInt(prompt("Dijita tu segundo número"));
if (NumeroA > NumeroB) {
  console.log("El Numero A es mayor");
} else if (NumeroA < NumeroB) {
  console.log("El Numero A es menor");
} else {
  alert("El Numero A es igual a B");
}

/*Ejercicio 5*/
let persona = parseFloat(prompt("digita su peso en kilogramos"));
if (persona <= 40) {
  console.log("persona baja de peso");
} else if (persona >= 41 && persona <= 70) {
  console.log("persona promedio");
} else {
  console.log("persona con sobrepeso");
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
let compra = parseFloat(prompt("digita su compra"));
let descuento1 = compra * 0.8;
let descuento2 = compra * 0.95;
if (compra >= 1000) {
  console.log("su compra final es " + descuento1);
} else {
  console.log("su compra final  es " + descuento2);
}

/*Ejercicio 8*/
let horastrabajo = parseInt(
  prompt("Digita el número de horas que trabajaste esta semana")
);
let esto = horastrabajo >= 40 || horastrabajo < 40;
if (esto * 16000) {
  let salario = horastrabajo * 16000;
  alert(`Tu salario a la semana es ${salario}`);
}
