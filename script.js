//Mostre no console.log a mensagem "Ano novo está chegando!!";
const anoNovo = 'O ano novo está chegando!!!';
console.log(anoNovo);

/*
  Crie uma variável que receba o nome da cantora Mariah Carey
  Crie uma variável que receba a idade dela
  Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
*/
let cantora = 'Mariah Carey';
let idadeCantora = 54;
const nascimentoCantora = 2024 - 54;
console.log(`A ${cantora} nasceu no ano de ${nascimentoCantora} e tem ${idadeCantora} anos`);

//Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
let quartaFeira = true;
console.log(quartaFeira);

//Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof quartaFeira);

/*
  Crie uma condição SE você for maior ou igual 18 retornará a mensagem:
  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.
  SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:
  "Sinto muito, mas assistirá da tv globo"
*/
let suaIdade = 25;
if (suaIdade >= 18) {
  console.log('Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey')
} else {
  console.log('Sinto muito, mas assistirá da tv globo')
}

/*
  Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. 
  Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas. 
  O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:
  Algo de errado não está certo, o mês digitado foi o mês tal.
*/
let mes = 'abril';
if (mes == 'junho' || mes == 'agosto' || mes == 'outubro') {
  console.log(`O mês escolhido foi ${mes}`)
} else {
  console.log(`Algo de errado não está certo, o mês digitado foi o ${mes}`)
}