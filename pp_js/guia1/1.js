let array = [0,1,2,3,4,5,6,7,8,9,10]
let arrayPares = []

array.forEach(function(numero){
    if(numero%2 == 0){
        arrayPares.push(numero);
    }
});

console.log(arrayPares)