const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Ler arquivo JSON e já converter pra objeto. SINCRONO
const config = require('./arquivo.json')
console.log(config.db)

// Ler aquivos de um diretório, coloca arquivos em um array
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})