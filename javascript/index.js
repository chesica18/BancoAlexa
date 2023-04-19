const datos= {
  "cbuValido": "01234-54789",
  "passwordValido": "apocalypse"
}

function ingresar() {
  console.log(JSON.stringify(datos))
  const inputCbu = document.getElementById("inputCbu");
  const inputPass = document.getElementById("inputPass");
  if (inputCbu.value === datos.cbuValido && inputPass.value === datos.passwordValido) {
    console.log("cbu o contraseña correcta");
    localStorage.setItem ("cbu", inputCbu.value)
    window.location = "./pages/calculotransaccion.html"
  } else {
    console.log("cbu o contraseña incorrecta");
  }
}
