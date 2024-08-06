var numero1 = parseInt(prompt("Digite um numero: "))
var numero2 = parseInt(prompt("Digite um numero: "))
var numero3 = parseInt(prompt("Digite um numero: "))

if(numero1 && numero2 && numero3 > 0 )
{
    if(numero1 > numero2 && numero3)
    {
        console.log(numero1 + " é o maior");
    }

    else if(numero2 > numero3 && numero1)
    {
        console.log(numero2 + " é maior");
    }

    else
    {
        console.log(numero3 + " é o maior");
    }


}