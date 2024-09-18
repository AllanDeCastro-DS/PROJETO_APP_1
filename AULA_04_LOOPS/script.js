/*
x = 0;
document.write("<br>Testando Loop com while<br><br>");

while (x < 10) {
  document.write("X tem valor: " + x + "<br>");
  x++;
}

document.write("<br><br>Testando Loop com For<br><br>");

var valor = 13;

for (a = 0; a <= valor; a++) {
  document.write("valor de A é: " + a + "<br>");
  console.log(a * 2);
}
*/
function pedir() {
  var valor = parseInt(prompt("escolha um numero de 1  a 4: "));
  console.log(valor);
  console.log(typeof valor);
  console.log(typeof Number(valor));
  console.log(valor);

  switch (Number(valor)) {
    case 1:
      alert("Você escolheu o Suco");
      break;
    case 2:
      alert("Você escolheu o Agua gelada");
      break;
    case 3:
      alert("Você escolheu o Sorvete");
      break;
    case 4:
      alert("Você escolheu o chamou o garçom");
      break;

    default:
      alert("escolha entre 1 a 4!");
      break;
  }
}
