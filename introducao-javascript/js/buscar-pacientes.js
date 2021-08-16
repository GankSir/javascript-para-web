var botaoImportar = document.querySelector("#importar-paciente")
botaoImportar.addEventListener("click", function () {
  console.log("Buscando pacientes")
  //XHMHttpRequest responsavel por fazer requisicoes no JS
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    console.log(xhr.responseText);

  });

 xhr.send()
});