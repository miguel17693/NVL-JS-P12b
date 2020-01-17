var impares= []
var pares = []

for (var i=0; i<50; i++){
	numeroAzar= Math.floor((Math.random()*100)+1)

	if (numeroAzar%2 === 0) {
		pares.push(numeroAzar)
	}
	else impares.push(numeroAzar)
}

console.log(impares)
console.log(pares)