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

console.groupCollapsed("reverde & toReversed")

console.groupEnd()