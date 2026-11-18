const parametros = new URLSearchParams(window.location.search);

const nome = parametros.get("nome");
const sobrenome = parametros.get("sobrenome");
const email = parametros.get("email");
const telefone = parametros.get("telefone");
const organizacao = parametros.get("organizacao");
const dataHora = parametros.get("dataHora");

const dadosPedido = document.querySelector("#dadosPedido");

const paragrafoNome = document.createElement("p");

paragrafoNome.textContent = `Nome: ${nome} ${sobrenome}`;
dadosPedido.appendChild(paragrafoNome);

const paragrafoEmail = document.createElement("p");
paragrafoEmail.textContent = `E-mail: ${email}`;
dadosPedido.appendChild(paragrafoEmail);

const paragrafoTelefone = document.createElement("p");
paragrafoTelefone.textContent = `Telefone: ${telefone}`;
dadosPedido.appendChild(paragrafoTelefone);

const paragrafoOrganizacao = document.createElement("p");
paragrafoOrganizacao.textContent = `Organização: ${organizacao}`;
dadosPedido.appendChild(paragrafoOrganizacao);

const dataFormatada = new Date(dataHora).toLocaleString("pt-BR");

const paragrafoData = document.createElement("p");
paragrafoData.textContent = `Data e hora do envio: ${dataFormatada}`;
dadosPedido.appendChild(paragrafoData);

const cargo = parametros.get("cargo");
const nivel = parametros.get("membership");

const paragrafoCargo = document.createElement("p");
paragrafoCargo.textContent = `Cargo: ${cargo}`;
dadosPedido.appendChild(paragrafoCargo);

const nomesNiveis = {
    np: "Associação NP",
    bronze: "Associação Bronze",
    silver: "Associação Prata",
    gold: "Associação Ouro"
};

const paragrafoNivel = document.createElement("p");
paragrafoNivel.textContent = `Nível: ${nomesNiveis[nivel]}`;
dadosPedido.appendChild(paragrafoNivel);
