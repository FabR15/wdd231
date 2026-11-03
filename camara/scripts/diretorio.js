const listaMembros = document.querySelector("#listaMembros");

async function carregarMembros() {
    try {
        const resposta = await fetch("dados/membros.json");
        const membros = await resposta.json();

        mostrarMembros(membros);

    } catch (erro) {
        console.error("Erro ao carregar os membros:", erro);
        listaMembros.textContent = "Não foi possível carregar as empresas.";
    }
}

function mostrarMembros(membros) {
    listaMembros.innerHTML = "";

    membros.forEach((empresa) => {
        const cartao = document.createElement("section");

        cartao.classList.add("cartao-empresa");

        cartao.innerHTML = `
            <img src="imagens/${empresa.imagem}" alt="Logo de ${empresa.nome}">
            <h2>${empresa.nome}</h2>
            <p>${empresa.endereco}</p>
            <p>${empresa.cidade} - ${empresa.estado}</p>
            <p>${empresa.telefone}</p>
            <a href="${empresa.site}" target="_blank" rel="noopener noreferrer">
                ${empresa.site}
            </a>
            <p>Nível de associação: ${empresa.nivel}</p>
            <p>${empresa.descricao}</p>
        `;

        listaMembros.appendChild(cartao);
    });
}

const botaoGrade = document.querySelector("#visualizacaoGrade");
const botaoLista = document.querySelector("#visualizacaoLista");

botaoGrade.addEventListener("click", () => {
    listaMembros.classList.add("grade");
    listaMembros.classList.remove("lista");

    botaoGrade.setAttribute("aria-pressed", "true");
    botaoLista.setAttribute("aria-pressed", "false");
});

botaoLista.addEventListener("click", () => {
    listaMembros.classList.add("lista");
    listaMembros.classList.remove("grade");

    botaoLista.setAttribute("aria-pressed", "true");
    botaoGrade.setAttribute("aria-pressed", "false");
});

carregarMembros();

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;

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