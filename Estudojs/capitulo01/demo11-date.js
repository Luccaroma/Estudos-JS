const dataAniversario = new Date (2020,0,20)

const primeiraDataDoJs = new Date (0)

const hoje = new Date()
console.log(hoje.toISOString())

console.log(`
  Dia : ${hoje.getDate()}
  Mes : ${hoje.getMonth()}
  Ano : ${hoje.getFullYear()}
  Hora : ${hoje.getHours()}
  Minutos : ${hoje.getMinutes()}
  Segundos : ${hoje.getSeconds()}  
  `)