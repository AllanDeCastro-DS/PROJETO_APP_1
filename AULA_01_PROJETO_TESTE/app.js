let lista = ["marcelo","joao","Haddad"]

function acessar() {
    let usuario = document.getElementById("acesso").value
    if (lista.includes(usuario)) {
        document.getElementById("TEXTO").innerHTML = ("Bem vindo " + usuario)
        document.getElementById("Sair").style.opacity = 1;
    }
    else {
        alert(usuario+ " não é um professor")
    }

}

function sair() {
    document.getElementById("TEXTO").innerHTML = ("Bem vindo")
    document.getElementById("Sair").style.opacity = 0;
}