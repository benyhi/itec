
function hola(){
    let array = []
    for(i = 0; i < 5; i++) {
        let input = prompt("Ingresa el "+ (i+1) +" numero: ")
        let calc = input%2
        if (calc == 0) {
            array.push(input)
        }
    }
    console.log(array)

}