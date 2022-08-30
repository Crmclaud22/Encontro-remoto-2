const  listaDEpecas = ["Lanterna", "Roda", "Pa" ]

console.log("inicio do processamento")

console.log("------------------------")


let pesoPeca = 99
if (pesoPeca > 100) {console.log("peso ok, cadastrar a peca")}
else {console.log("peca recusada")}

console.log("------------------------")

let qtdePeca = 11
if (qtdePeca > 10) {console.log("limite da caixa ultrapassado")}
else {console.log("caixa ok")}

console.log("------------------------")

console.log("fim do processamento")

console.log("------------------------")

//let nomePeca = listaDEpecas[2]

for (let index = 0; index < listaDEpecas.length; index++) {
    const nomePeca = listaDEpecas[index];
    if (nomePeca.length < 3) {console.log("erro no nome da peca")}
else {console.log("nome da peca ok")} 
}

