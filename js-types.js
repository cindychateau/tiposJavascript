var num = 1;
var numFlotante = 1.5;
var text = "Esta es una variable texto";
var bool = false; /* true or false */

// console.log(num);
// console.log(numFlotante);
// console.log(text);
// console.log(bool);

// var estaLloviendo = true;

// var numeroCambiante;
// console.log(numeroCambiante);

// numeroCambiante = 10;
// console.log(numeroCambiante);

// numeroCambiante = 25;
// console.log(numeroCambiante);


// var suma = num1+num2;
// console.log(suma);

var nombre = "Cynthia";
var mensaje = "Mi nombre es: ";
var mensajeCompleto = mensaje + nombre;
console.log(mensajeCompleto);

var combinamosTexto = "ABC ";
console.log(combinamosTexto + num1);
console.log(combinamosTexto+num1+num2);
console.log(num1 + num2 + combinamosTexto);

var orden = (10 + 20) / 6; // PRIMERO (EN PARENTESIS); SEGUNDO / *; TERCERO + -
console.log(orden);

var n = 13;
n *= 3; // += ; -= ; *= ; /=
console.log(n);

var nom = "Cynthia ";
console.log(nom);
nom = 123456789;
console.log(nom);

var bool = false;
if(bool) {
    console.log("Puede entrar al sitio");
} else {
    console.log("Cierra la ventana");
}

var num1 = 1;
var num2 = 2;
if(num1 !== num2) { // a === b; a !== b; a < b; a <=b ; a > b ; a >= b
    console.log("Num 1 mayor a Num 2");
} else {
    console.log("Condicion falsa");
}

var n = 13;
if( n >= 15 )  {
    console.log("Num mayor a 15");
} else if(n <= 5) {
    console.log("Num menor a 5");
} else {
    console.log("Num entre 5 y 15");
}

var temperatura = 20;
var estaLloviendo = false;

if(temperatura >= 18) {
    if(!estaLloviendo) {
        console.log("Salir a pasear");
    } else {
        console.log("Si está lloviendo PERO la temperatura es mayor a 18, lleva un paraguas");
    }
} else {
    console.log("Hace frío,no salgas");
}

var hora = 2;
var tengoHambre = false;
if(hora >= 2 || tengoHambre) {
    console.log("Salir a comer");
}

// i=0
// IMPRIME 0
// i = 1
// IMPRIME 1
// i = 2
// IMPRIME 2
// i = 3
for(var i=0; i < 3; i++) {
    //console.log(i);
}

// i = 15
// IMPRIME 15
// i = 14
// IMPRIME 14
// i = 13
// IMPRIME 13
// i = 12
// IMPRIME 12
// i = 11
// IMPRIME 11
// i = 10
var bool = true
for(var i=15; i > 10; i--) {
    console.log("Hola");
}

// x = 1
// IMPRIME 1
// x = 3
// IMPRIME 3
// x = 5
// IMPRIME 5
// x = 7
// IMPRIME 7
// x = 9
var comienzo = 1;
var terminar = 5;
while(comienzo <= terminar) {
    //console.log(`Comienzo: ${comienzo}; Termino:${terminar}`);
    //console.log("Comienzo: "+comienzo+"; Termino:"+terminar);
    comienzo++; //comienzo = comienzo +1; comienzo += 1
    terminar--; //terminar = terminar -1; terminar -= 1
}

var dia1 = "Lunes";
var dia2 = "Martes";
var dia3 = "Miércoles";
var dia4 = "Jueves";
var dia5 = "Viernes";

var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
var tamanoDias = diasSemana.length;
for(var i=0; i < diasSemana.length; i++) {
    console.log("Día de la semana: "+diasSemana[i]);
}

// i=0
// totalGastos = 0
// totalGastos = 0 + gastos[0]; -> 0 + 10

// i = 1
// totalGastos = 10 + gastos[1] -> 10 + 5

// i = 2
// totalGastos = 15 + gastos[2] -> 15 + 2

// i = 3
// totalGastos = 17 + gastos[3] -> 17 + 7

// i = 4
// totalGastos = 24 + gastos[4] -> 24 + 8

// i = 5
// totalGastos = 32 + gastos[5] -> 32 + 9

// i = 6
// totalGastos = 41 + gastos[6] -> 41 + 10

// i = 7
var gastos = [10, 5, 2, 7, 8, 9, 10];
var totalGastos = 0;
for(var i=0; i < gastos.length; i++) {
    totalGastos += gastos[i];
    console.log(totalGastos);
}

