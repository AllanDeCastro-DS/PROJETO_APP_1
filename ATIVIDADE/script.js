var lista = ["aluno1", "aluno2", "aluno3", "aluno 4"];

var escolha;
var local;

function printar() {
  escolha = parseInt(document.getElementById("IN").value);
  console.log(typeof escolha);
  local = document.getElementById("Mostrar");

  if (escolha == 1 || escolha == 0) {
    local.innerHTML = lista[0];
  } else if (escolha == 2) {
    local.innerHTML = lista[1];
  } else if (escolha == 3) {
    local.innerHTML = lista[2];
  } else if (escolha == 4) {
    local.innerHTML = lista[3];
  } else if (escolha == 5) {
    local.innerHTML = lista[4];
  }
}
