function nomeDaFuncao(paremetro){
  // Bloco de codig
}

function queDiaEHoje(){
  const data = new Date()
  console.log(`Hoje é dia : ${data.getDate()}`)
}
queDiaEHoje()

function soma(valor1, valor2){
  console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}
soma(10,20)
soma(5,5)


const funcionario1 = {
  nome: 'Lucas Silva',
  desconto: 0.3,
  salarioBruto: 5000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Lucca Rocha',
  desconto: 0.1,
  salarioBruto: 5000,
  salarioLiquido: 0
}

function calculadoraDeDesconto(salarioBruto, desconto){
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calculadoraDeDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
)

funcionario2.salarioLiquido = calculadoraDeDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
)

console.log(
  `
  Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
  Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
  `
)