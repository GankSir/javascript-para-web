var botaoImportar = document.querySelector("#importar-paciente")
botaoImportar.addEventListener("click", function () {
  console.log("Buscando pacientes")
  //XHMHttpRequest responsavel por fazer requisicoes no JS
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrir a conexao e configurar

  //escuta a resposta
  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {

      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText; // resposta sempre volta com response.text
      var pacientes = JSON.parse(resposta);
      //para cada paciente voce pega esse paciente e chama a função anonima
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);  //dentro da função anonima chama minha function adicionaPacienteNaTabela
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel")
    }

  });

 xhr.send() //envia a requisão
});

//typeof:tipo de resposta