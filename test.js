/*
Una variable es un espacio reservado en memoria para almacenar datos
Una variable se declara cuando se le asigna un nombre, mientras se inicializa cuando se le asigna un valor
Sumar numeros es hacer un calculo aritmetico de suma como 1+2=3. Concatenar strings es unir mas strings en una.
El operador para sumar numeros y concatenar strings es siempre el +

nombre - string
apellido - string
userName - string
edad - numero
email - string
mayor - boolean
ahorro - numero
deuda - numero

FUNCIONES
Una función es un bloque de codigo que executa ciertas operaciones
Me sirve una función cuando ciertos comandos los tengo que repetir varias veces en varias situaciones
Los parámetros de una función son los datos que la misma requiere para luego elaborarlos. 
Los argumentos son los valores que han los parametros cuando la función es llamada.

CONDICIONALES
Un condicional es codigo que, dada una condición, ejecuta ciertas acciónes
Los tipos de condicionales en javascript son if-else-else if y switch
Si, se pueden combinar funciones y condicionales

CICLOS
Un ciclo es una acción que se repite un numero x de veces
En javascript hay los ciclos for; for...of; while; do while
Un ciclo infinito es tal cuando la condicion del ciclo es siempre verdadera y se repite sin parar.
Eso causa que la programe repita siepre el mismo ciclo y no siga adelante.
Si, se pueden mezclar ciclos y condicionales

LISTAS
Un array es una lista de datos en una sola variable
Un objeto es un tipo que contiene caracteristicas y metodos, se puede relacionar a multiples variabiles.
El array es mejor usarlo cuando tenemos que juntar multiples datos del mismo tipo, el objeto es para utilizar datos de diferentes tipo y relacionarlos entre ellos
Si, se puede mezclar arrays y objetos y viceversa.
*/
// Variabiles del test
let nombre = "Mirko";
let apellido = "Minghini";
let userName = "Mingo77";
let edad = 46;
let email = "mingo89@hotmail.it";
let esMayor = true;
let ahorro = 15000;
let deuda = 7000;

// variabiles que concatenan las precedentes
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
console.log("       ");

var dineroReal = ahorro - deuda;

console.log(dineroReal);
console.log("       ");

//Ejemplo función
const name = "Jaun David";
const lastname = " Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function mePresento(nombreCompleto, apodo){
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + apodo);
}

mePresento(completeName, nickname);
console.log("       ");

//Ejercicio condicionales
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertDuo"){
    console.log("Tú y alguin más pueden tomar TODOS los cursos de Plazti durante un año");
} else {
    console.log("¿Nuevo por aquí? !Inscribete a Platzi ya¡");
}
console.log("       ");

// ejercicios de ciclos
var i = 0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
console.log("       ");

var i = 10;
while (i>=2){
    console.log("El valor de i es: " + i);
    i--;
}
console.log("       ");

//Otro ejercicio de ciclos y condicionales con prompt
/*
let respuesta;

while (respuesta != "4") {
    let pregunta = prompt("¿Cuanto es 2+2?");
    respuesta = pregunta;
}
console.log("¡Respuesta correcta!");
*/


// Ejercicios sobre arrays
function primero(array){
    console.log(array[0]);
}

function todos(array){
    for (i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

var nombres = ["Mirko", "Monica", "Emanuela", "Daniela", "Gabriele"];

primero(nombres);
console.log("       ");
todos(nombres);
console.log("       ");

// Ejercicion sobre objetos
var computer ={
    ram: 8,
    discoDuro: 512,
    marca: "Dell",
    tipo: "Laptop",
    cpu: "Intel"
}

function todos(objeto){
    for (key in objeto){
        console.log(objeto[key]);
    }
}

todos(computer);
console.log("  ");

//otra forma

function todosArrObj(obj){
    let arr = Object.values(obj);
    for (i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

todosArrObj(computer);

//Pregunta bonus para hacer el ejercicios condicionales con un solo if

function conseguirTipoSuscription(suscripcion){
    if (suscripcion === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion === "ExpertDuo"){
        console.log("Tú y alguin más pueden tomar TODOS los cursos de Plazti durante un año");
        return;
    }

    console.warn("¿Nuevo por aquí? !Inscribete a Platzi ya¡");
}

conseguirTipoSuscription("Free");

//Hacer lo de arriba con array y objetos
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguin más pueden tomar TODOS los cursos de Plazti durante un año"
};

function conseguir(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("No hay esa suscripcion");
}

conseguir("expert");




