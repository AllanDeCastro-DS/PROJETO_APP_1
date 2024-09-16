var lista = ["aluno1", "aluno2", "aluno3", 100];

console.log(lista);
console.log(lista[3]);

console.log(lista.length);

console.log(lista.indexOf("aluno3"));
console.log(lista.indexOf("aluno4"));

lista[0] = "asdrubal";
console.log(lista);

lista.push("aluno4");
console.log(lista);

lista.shift();
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.join(" --- "));
