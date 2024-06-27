var t_fieldNome=document.querySelector("#nome");  //quando se usa # = estou pegando pelo ID
var t_fielddata=document.querySelector("#datanasc");
var t_fieldaltura=document.querySelector("#altura");
var t_fieldpeso=document.querySelector("#peso");

// console.log(t_fieldNome)
// console.log(t_fielddata)
// console.log(t_fieldaltura)
// console.log(t_fieldpeso)

var btnCalcular=document.querySelector("#calcular")

// Funções
function somar(n1,n2){
    return n1+n2;
}
// console.log(somar(23,45))


//Quando eu clicar no botão ele vai somar os valores e vai imprimir no console.log
//Estou pedindo para adicionar um evento de click no botão
//Eu vou passar uma função que vai rodar toda vez que eu clicar no botão
btnCalcular.addEventListener("click",function somar(e){
    //aqui eu descrevo o que vai acontecer
    //console.log(t_fieldNome.value)

    //Vamos criar um template de string,     as crases significa que ele não é uma string normal e sim um template de string, ele recebe valores de fora
    console.log(`Nome: ${t_fieldNome.value} peso: ${t_fieldpeso.value} altura:${t_fieldaltura.value} DataNascimento: ${t_fielddata.value}`)
})