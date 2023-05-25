if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href="../html/Login.html";

}

let userLogado = JSON.parse(localStore.getItem("userLogado"));

let logado = documen.querySelector("#logado");
logado.innerHTML = Olá  ${userLogado.nome};

function sair() {
    LocalStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href="../html/Login.html";
}





