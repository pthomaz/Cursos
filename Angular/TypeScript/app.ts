let message : string = "Help me"

console.log(message);

let episode : number = 4;
console.log(episode);


let favoriteDroid;
favoriteDroid = "BB-8";
console.log(favoriteDroid);

// Exemplo de function com type script tipando os parametros e informando o tipo do retorno
let testes = function(parsecs : number) : boolean{
    return parsecs < 12;
}

let distance = 11;
// Exemplo de template string (js)
console.log(`A distancia ${distance} é maior que 12? ${testes(distance) ? 'YES' : 'NO'} `)

//Exemplo de uma arrow function, maneira mais curta de declarar uma function.
// Nesse caso foi declarado uma váriavel e a mesma esta armazenando uma function
let call = (name: string) => console.log(`Do you copy, ${name}`);
call("Pablo")


//Exemplo de chamada de function com parametro não obrigatorio 
function inc (speed : number, inc : number = 1) : number{
    return speed + inc;
}
console.log(inc(5,1))
console.log(inc(5))