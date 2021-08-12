var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function (event){
  var alvoEvento = event.target; //evento para ser clicado
  var paiDoAlvo = alvoEvento.parentNode //TR = paciente = remove=paciente

  paiDoAlvo.remove();

  //event.target.parentNode

})
//pacientes.forEach(function (paciente) {
 // paciente.addEventListener("dblclick", function () {
   // this.remove();
 // });

//});