//pega do form
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente)

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario (form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)

  }

  return paciente;
}
function montaTr (paciente) {

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome,"info-nome");
  var pesoTd = montaTd(paciente.peso,"info-peso");
  var alturaTd = montaTd(paciente.altura,"info-altura");
  var gorduraTd = montaTd(paciente.gordura,"info-gordura");
  var imcTd = montaTd(paciente.imc,"info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;

}

function montaTd(dado) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;

}