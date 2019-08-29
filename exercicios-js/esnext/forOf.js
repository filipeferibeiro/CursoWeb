for (let letras of "Cod3r") {
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promice']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promice', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [cv, vl] of assuntosMap.entries()){
    console.log(cv, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}