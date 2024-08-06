var numero1 = parseInt(prompt("Digite o primeiro numero: "))
var numero2 = parseInt(prompt("Digite o segundo numero: "))

if(numero1 > numero2)
{
    console.log(numero1 + " é maior que " +     numero2);
}

else if(numero1 < numero2)
{
    console.log(numero2 + " é maior que " + numero1);
}

else
{
    console.log("Os dois números são iguais")
}

