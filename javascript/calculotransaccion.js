document.title = "BANCO ALEXA";

const impuestoPais = 1.3;
const impuestoRg = 1.35;
const input = document.getElementById("inputDollarAmount");
const debit = document.getElementById("debit");
const amountTaxPais = document.getElementById("amountTaxPais");
const amountTaxRg = document.getElementById("amountTaxRg");
const total = document.getElementById("total");
const taxPais = document.getElementById("taxPais");
const taxRg = document.getElementById("taxRg");
const accountBalance = (document.getElementById("accountBalance").innerHTML =
  "$150000.-");

const cbu = localStorage.getItem("cbu");
document.getElementById("cbu").innerHTML = cbu;

input.addEventListener("change", async (ev) => {
  let value = ev.target.value;
  if (value > 200) {
    amountTaxPais.innerHTML = " ";
    amountTaxRg.innerHTML = " ";
    total.innerHTML = " ";
    debit.innerHTML = " ";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El monto máximo para la compra es de us$ 200 ',
    });
  } else {
    let importeADebitar = await convertirPesosADolares(value);
    let calcPais = importeADebitar * impuestoPais - importeADebitar;
    let calcRg = Number.parseInt(
      importeADebitar * impuestoRg - importeADebitar
    );
    let calcTotal = importeADebitar * impuestoPais * impuestoRg;
    amountTaxPais.innerHTML = "$" + calcPais.toFixed(2) + "-.";
    amountTaxRg.innerHTML = "$" + calcRg.toFixed(2) + "-.";
    total.innerHTML = "$" + calcTotal.toFixed(2) + "-.";
    debit.innerHTML = "$" + importeADebitar.toFixed(2) + "-.";
  }
});

taxPais.innerHTML = "30%";
taxRg.innerHTML = "35%";

async function convertirPesosADolares(cantidad) {
  if (localStorage.getItem(cantidad) === null) {
    let respuesta = await fetch("https://api.exchangerate.host/convert?from=USD&to=ARS&amount=" + cantidad);
    const resultado= (await respuesta.json()).result;
    localStorage.setItem(cantidad, resultado)
    return resultado
  }else {
    return Number(localStorage.getItem (cantidad))
  }

}
