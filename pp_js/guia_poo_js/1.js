class Persona {
    constructor (nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad ;
        this.genero = genero;
    }

    mostrarInformacion() { 
        return console.log(`Nombre: ${this.nombre} -- Edad: ${this.edad} -- Genero: ${this.genero}`);
    }

}


var persona1 = new Persona("Juan",20,"Masculino")
var persona2 = new Persona("Maria",40,"Femenino")
var persona3 = new Persona("Carlos",35,"Masculino")


persona1.mostrarInformacion()
persona2.mostrarInformacion()
persona3.mostrarInformacion()