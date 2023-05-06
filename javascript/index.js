const datos = {
  cbuValido: "01234-56789",
  passwordValido: "apocalypse",
};

function ingresar() {
  console.log(JSON.stringify(datos));
  const inputCbu = document.getElementById("inputCbu");
  const inputPass = document.getElementById("inputPass");
  if (
    inputCbu.value === datos.cbuValido &&
    inputPass.value === datos.passwordValido
  ) {
    console.log("cbu o contraseña correcta");
    localStorage.setItem("cbu", inputCbu.value);
    window.location = "./pages/calculotransaccion.html";
  } else {
    console.log("cbu o contraseña incorrecta");
  }
}

const cargarImg = (entradas, observador) => {
  console.log("me estoy ejecutando");
  console.log(entradas);
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
};
const observador = new IntersectionObserver(cargarImg, {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
});

observador.observe(document.querySelector("#imgCompraWeb"));
