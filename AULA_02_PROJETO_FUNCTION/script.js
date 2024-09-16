var area = document.getElementById("area");
function entrar() {
  var nome = prompt("Digite seu nome:");
  if (nome === "" || nome === null) {
    alert("deu pau pae");
  } else {
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    area.appendChild(botaoSair);
    botaoSair.onclick = sair;

    botaoSair.innerText = "Sair";
  }
}

function sair() {
  alert("saiu");
  area.innerHTML("Saiu pae");
}

function mediaaluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  if (media >= 6) {
    return "passou com nota " + media;
  } else {
    return "passo nao com nota " + media;
  }
}

function aluno(nome, curso) {
  var mensagem = "seja bem vindo " + nome + " ao curso " + curso;
  return mensagem;
}
