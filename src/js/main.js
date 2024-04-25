console.log("Arrays part2")

console.groupCollapsed("map")

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

console.groupCollapsed("reverse & toReversed")
// Invierten la lista, reverse lo muta y toReversed no.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"]

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

console.groupCollapsed("Sort")
// Ordena el array

let coders = [
    "santiago",
    "reycon",
    "narciris",
    "pablo",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "carlos",
    "esteban",
    "shirly",
    "ana",
    "andres",
    "edwin",
    "alexis"
]

// console.table(coders.toSorted()) // no muta la lista original

coders.sort() // muta la lista original

let mercado = [
    "arroz",
    "papa",
    "huevos",
    "pan",
    "leche",
    "azucar",
    "sal",
    "aceite",
    "manzanas",
    "zanahorias"
]

console.table(mercado)
console.table(mercado.toSorted())
console.table(mercado.toSorted().toReversed())

console.groupEnd()

console.groupCollapsed("Filter")
// filtra y devuelve otro array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let pares = []
let impares = []

pares = numeros.filter(numero => numero % 2 === 0)
impares = numeros.filter(numero => numero % 2 !== 0)

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

// Lista de nombres (coders) filtrados, por vocales o no.

/* let expresion = /^[aeiou]/ // expresión regular que evalua si inicia con vocales.

let nombresVocal = coders.filter(nombre => {
    return expresion.test(nombre) 
    // .test evalua la expresión regular anterior a lo que le pase por parametro, en este caso cada nombre
})

let nombresConsonantes = coders.filter(nombre => {
    return !expresion.test(nombre) 
})

 */

let nombresVocal = coders.filter(nombre => {
    return  nombre.startsWith("a") || nombre.startsWith("e") || nombre.startsWith("i") || nombre.startsWith("o") || nombre.startsWith("u") 
}) 

let nombresConsonantes = coders.filter(nombre => {
    return !nombre.startsWith("a") && !nombre.startsWith("e") && !nombre.startsWith("i") && !nombre.startsWith("o") && !nombre.startsWith("u")
})


console.log(nombresVocal)
console.log(nombresConsonantes)

console.groupEnd()

console.group("every y some")

// every: valida una condición en cada elemento. Solo si todos cumplen, retorna el true
// some: valida la condición en cada elemento. Si alguno cumple, retorna true

let numerosNaturales = [22,-55,44,3,5,3,-2]

const respuesta = numerosNaturales.every(numero => numero > 0) // false

const respuesta2 = numerosNaturales.some(numero => numero > 0) // true

console.log(respuesta)
console.log(respuesta2)

console.groupEnd()
