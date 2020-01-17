
// es una función donde estran 2 variables y salen rellenas de 50 números dividios en dos arrays de pares e impares
function generaAleatorioPareseImpares (impares, pares) {

for (var i=0; i<50; i++){
	numeroAzar= Math.floor((Math.random()*100)+1)

	if (numeroAzar%2 === 0) {
		pares.push(numeroAzar)
	}
	else impares.push(numeroAzar)
}
}

var array1=[]
var array2=[]
//tengo que darle dos arrays
generaAleatorioPareseImpares(array1,array2)

console.log(array1)
console.log(array2)