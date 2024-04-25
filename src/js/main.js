console.log("Arrays part2")

console.groupCollapsed("Map")

// Map permite recorrer un array, con la posibilidad de retornar otro array

const array1 = ["lucas", "pablo", "maria", "pedro"]

// map de diferentes formas:

/* let array2 = array1.map (function (nombre) {
    return nombre.toUpperCase()
}) */

/* let array2 = array1.map(nombre => {
    return nombre.toUpperCase()
}) */

// array2 = array1.map (nombre => nombre.toUpperCase() ) // -> el retorno está implicito

// resultado con el forEach:

let array2 = []

array1.forEach(nombre => {
    array2.push(nombre.toUpperCase())
})

// array1.forEach(nombre => array2.push(nombre.toUpperCase())) -> en una sola línea

console.log(array2)

console.groupEnd()

console.group("reverse & toReversed")
// Invierten la lista, reverse lo muta y toReversed no.

const alphabet = ["a","b","c","d","e","f","g","h"]

//console.log(alphabet.reverse()) // Altera el orden del array, mutando el original, sin importar si lo guardo en otro o no

const alphabetInvertido = alphabet.toReversed() // Altera el orden del array, generando uno nuevo. El original queda limpio

console.log(alphabet)
console.log(alphabetInvertido)

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
]

console.log(`Con el toReversed: ${alfabetoMilitar.toReversed()}`)

alfabetoMilitar.reverse()
console.log(`Con el reverse(): ${alfabetoMilitar} `)


console.groupEnd()