const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const num1 = Number(input1.value);
    const tipo1 = typeof(num1);
    const num2 = Number(input2.value);
    const tipo2 = typeof(num2);
    if(tipo1 !== "number" || tipo2 !== "number" ){
        alert("Solo numeri!");
    } else {
        const suma = num1 + num2;
        pResult.innerText = suma;
    }

};









