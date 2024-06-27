var texto1="Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger.";

var nome="Tereza maria SILVA";

var email="carlos@gmail.com"

// // Exercicio 1
// var troca=texto1.replace("Roger", "Carlos")
// console.log(troca)

// var minusculo=texto1.toLowerCase()
// console.log(minusculo)

// var novavariavel=texto1.slice(10,texto1.length)
// console.log(novavariavel)

// alert(texto1.includes("tin"))

// var fatiado=texto1.split(" ")
// console.log(fatiado)

// alert(texto1.indexOf("lendário"))
// alert(texto1.indexOf("homem"))



// // Exercicio 2
// var repeticao=nome.repeat(3);
// console.log(repeticao.toUpperCase())

// alert(nome.endsWith("o"))

// alert(nome.charAt(6))


// Exercicio 3
alert(email.includes("@"))
alert(email.includes("."))

if(email.indexOf(".") > email.indexOf("@"))
    console.log("O . esta depois do @")
else
    console.log("O . NÃO esta depois do @")

if(email.indexOf("@") >=1)
    console.log("Existe algo antes do @")
else
    console.log("Não Existe algo antes do @")