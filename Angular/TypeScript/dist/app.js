var message = "Help me";
console.log(message);
var episode = 4;
console.log(episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log(favoriteDroid);
// Exemplo de function com type script tipando os parametros e informando o tipo do retorno
var testes = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
// Exemplo de template string (js)
console.log("A distancia " + distance + " \u00E9 maior que 12? " + (testes(distance) ? 'YES' : 'NO') + " ");
//Exemplo de uma arrow function, maneira mais curta de declarar uma function.
// Nesse caso foi declarado uma váriavel e a mesma esta armazenando uma function
var call = function (name) { return console.log("Do you copy, " + name); };
call("Pablo");
//Exemplo de chamada de function com parametro não obrigatorio 
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log(inc(5, 1));
console.log(inc(5));
