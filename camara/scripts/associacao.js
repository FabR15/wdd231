const dataHora = document.querySelector("#dataHora");

const agora = new Date();

dataHora.value = agora.toISOString();

const linksModal = document.querySelectorAll(".cartao-nivel a");

linksModal.forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();

        const idModal = link.getAttribute("href");
        const modal = document.querySelector(idModal);

        modal.showModal();
    });
});

const botoesFechar = document.querySelectorAll(".fechar-modal");

botoesFechar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const modal = botao.closest("dialog");
        modal.close();
    });
});