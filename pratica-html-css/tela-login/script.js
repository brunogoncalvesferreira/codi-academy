let inputEmail = document.querySelector("input[type=email]")
let inputPassword = document.querySelector("input[type=password]")
let form = document.querySelector("form")
let button = document.querySelector("button")

form.addEventListener("submit", submitEvent)
function submitEvent(e) {
  e.preventDefault()
}

button.addEventListener("click", handleSubmitEvent)
function handleSubmitEvent() {
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("ALERTA! Os dois campos do formulário tem que ser preenchidos.")
    button.style.background = "red"
    button.textContent = "PREENCHA E CLIQUE NOVAMENTE"
    button.style.fontSize = "16px"
    inputEmail.focus()
  } else {
    alert("Login realizado com sucesso!")
    window.location = "modal.html"
  }
}
