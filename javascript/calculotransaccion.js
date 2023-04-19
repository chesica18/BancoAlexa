document.title="BANCO ALEXA"

const valorDolar= 220
const impuestoPais= 1.30
const impuestoRg= 1.35
const input= document.getElementById ("inputDollarAmount")
const price= document.getElementById ("price")
const debit= document.getElementById ("debit")
const amounttaxPais= document.getElementById ("amountTaxPais")
const amounttaxRg= document.getElementById ("amountTaxRg")
const total= document.getElementById ("total")
const taxPais= document.getElementById ("taxPais")
const taxRg= document.getElementById ("taxRg")
const accountBalance= document.getElementById ("accountBalance").innerHTML = "$150000.-"

const cbu= localStorage.getItem ("cbu")
document.getElementById ("cbu").innerHTML=cbu


input.addEventListener("change",(ev)=>{
    let value= ev.target.value
    console.log(ev.target.value);
    if (value > 200){
        amounttaxPais.innerHTML= " "
        amounttaxRg.innerHTML= " "
        total.innerHTML= " "
        debit.innerHTML= " "
        alert ("El monto máximo de dolares a comprar es us$200")
        console.log("El monto máximo de dolares a comprar es us$200");
    }else {
        let importeADebitar= value*valorDolar
        let calcPais= (importeADebitar*impuestoPais-importeADebitar)
        let calcRg= Number.parseInt(importeADebitar*impuestoRg-importeADebitar)
        let calcTotal= importeADebitar*impuestoPais*impuestoRg
        amounttaxPais.innerHTML= "$" + calcPais + "-."
        amounttaxRg.innerHTML= "$" + calcRg + "-."
        total.innerHTML= "$" + calcTotal+ "-."
        debit.innerHTML= "$" + importeADebitar + "-."
        
        console.log("Importe a debitar: $"+ value*valorDolar);
        console.log( "$" + (calcPais));
        console.log("$" + (calcRg));
        console.log("$" + calcTotal);
    }
})

price.innerHTML= "$" + valorDolar + "-."
taxPais.innerHTML= "30%"
taxRg.innerHTML= "35%"