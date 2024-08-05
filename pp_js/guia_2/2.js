var array = [1,2,3,4,5,6,7,8]

var arrayPares = array.filter(function (i){
  return i % 2 === 0
} )

console.log(arrayPares)