let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Ana", edad: 35 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Sofía", edad: 28 },
    { nombre: "Carlos", edad: 45 },
    { nombre: "Laura", edad: 33 },
    { nombre: "David", edad: 29 },
    { nombre: "Elena", edad: 27 }
  ];

var personasMayus = personas.map(persona =>({...persona, nombre: persona.nombre.toUpperCase()}
    ));

var mayores18 = personasMayus.filter(persona => persona.edad > 18)

console.log(mayores18.find(persona => persona.edad === 25))