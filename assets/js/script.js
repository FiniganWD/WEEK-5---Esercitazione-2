


var budgetIniziale = 1000;
var operazioni = 0;
const myArray =[1000];
var btn = document.getElementById('btn');

document.getElementById('budgetIniziale').innerHTML += budgetIniziale;

btn.addEventListener('click', function(){
    while(myArray > 200){
        let shopping = Math.floor((Math.random() * 100) +1);
        document.getElementById('lista').innerHTML += `<li>Hai speso €: ${shopping}</li>`;
        let risultato = myArray - shopping;
        document.getElementById('lista').innerHTML += `<li>Ti restano: € ${risultato}</li>`;
        myArray.splice(0, 1, risultato);
        operazioni++
        document.getElementById('lista').innerHTML += `<li>Operazioni effettuate: ${operazioni}</li>`;
    }
    if (myArray < 200){
        document.getElementById('messaggio').innerHTML += `Sei prossimo al fallimento!!!, ti sono rimasti meno di 200€ `
    }
});



