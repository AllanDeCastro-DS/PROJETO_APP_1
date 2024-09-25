//criando uma variavel var

var nome = "Adamastor";
console.log(nome);

if (nome == "Adamastor") {
  var escola = "CESF";
  console.log(escola);
}

console.log(escola);
escola = "sagrada";
console.log(escola);

//var pode ser acessado fora do escopo onde foram criados e ser modificados lá

if (nome === "Adamastor") {
  let curso = "ds";
  console.log(curso);
}
//console.log(curso);
curso = "culinaria";
console.log(curso);

const cargo = "estudante";
console.log(cargo);
cargo = "estagiario";
console.log(cargo);
