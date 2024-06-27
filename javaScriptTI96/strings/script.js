//Trabalhando com Strings

var nome="Vitor";  //Escopo Global
let profissao="estudante";  //Escopo Local
const endereco="rua Silvio Delduque rua"  //Constante

// const valor=0;
// //foi criado fora de uma estrutura é global, foi criado dentro de uma estrutura é local

// for (let i=0;i<10;i++){
//     //Variavel tem escopo local, let só existe-> só usa dentro dessa estrutura e não pode ser usado fora
//     console.log(i)


//     //endereco="sei la"; //javasript permite alterar uma constante mais continua a ser uma constante
//     valor=i;
// }
// console.log(valor)


// alert(nome.toLowerCase())  //lower, colocar em minusculo, só transforma no momento da linha, não torna permanente
// alert(nome)
// alert(nome.toUpperCase())  //upper, deixa maiusculo
// alert(nome.length)  //conta a quantidade de caracteres do nome

// alert(profissao.charAt(2))  //retorna a posição do caracter do index
// alert(profissao.charAt())  //se eu não colocar nada retorna a primeira posição

// alert(endereco.startsWith("ru")) //vai verificar as primeiras letras e retorna o true ou false
// alert(endereco.endsWith("duq"))  //vai verificar as ultimas letras e retorna o true ou false
// alert(endereco.includes("duq"))  //vai verificar se tem essa sequencia de letras dentro do endereco
// alert(endereco.includes("rua",6))  //vai procurar uma palavra dentro do texto ,posso passar um segundo parametro para definir de onde começo minha busca
// alert(endereco.indexOf("rua"))  //retorna a posição do index da palavra ou letra pesquisada
alert(endereco.indexOf("rua",6))  //retorna a posição do index da palavra ou letra pesquisada,posso passar um segundo parametro para definir de onde começo minha busca