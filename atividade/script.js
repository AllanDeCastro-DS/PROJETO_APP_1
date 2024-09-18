var lista = ["aluno1", "aluno2", "aluno3", 100];

var escolha = parseInt(document.getElementById("IN"));
var local = document.getElementById("Mostrar");

function printar() {
  console.log(typeof escolha);

  switch (escolha) {
    case 1:
      alert(lista[0]);
      break;
    case 2:
      alert(lista[1]);
      break;
    case 3:
      alert(lista[2]);
      break;
    case 4:
      alert(lista[3]);
      break;
    default:
      break;
  }
}
