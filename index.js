const fs = require('fs')

//Função que cria um arquivo em branco
// fs.open('NomeDoArquivoEmBranco.txt', 'w', (err) => {

//     if (err) throw err;
//     console.log("Open executado com sucesso!")

// })

//Função que sobrescreve um arquivo, ou, caso ele não exista, cria um
// fs.writeFile('NomeDoWriteFile.txt', 'Corpo do texto do writeFile', (err) => {

//     if (err) throw err;
//     console.log('writeFile executado!')

// })

//Função que adiciona ao corpo do texto de um arquivo, ou, caso ele não exista, cria um
// fs.appendFile('NomeDoArquivoCriadoComAppendFile.txt', '\nSegunda linha', (err) => {

//     if(err) throw err;
//     console.log('appendFile executado com sucesso!')

// })


fs.writeFile('NomeDoArquivoEmBranco.txt', 'Edição feita com o writeFile', (err) => {

    if (err) throw err;

})