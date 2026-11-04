document.getElementById("anoatual").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    "Última modificação: " + document.lastModified; 

const botaoMenu = document.querySelector("#botaoMenu");
const navegacao = document.querySelector("#navegacao");

botaoMenu.addEventListener("click", () => {
    const menuAberto = navegacao.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "✕" : "☰";
});