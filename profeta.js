
const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';

const cartoes = document.querySelector('#cartoes');

async function obterDadosDeProfetas() {
    const resposta = await fetch(url);
    const dados = await resposta.json();

console.log(Object.keys(dados.profetas[0]));
exibirProfetas(dados.profetas);
 }

const exibirProfetas = (profetas) => {
    profetas.forEach((profeta) => {
        let cartao = document.createElement('section');
        let nomeCompleto = document.createElement('h2');
        let dataNascimento = document.createElement('p');
        let localNascimento = document.createElement('p');
        let retrato = document.createElement('img');

        nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`; 
        dataNascimento.textContent = `Data de nascimento: ${profeta.nascimento}`;
        localNascimento.textContent = `Local de nascimento: ${profeta.localNascimento}`;

        retrato.setAttribute('src', profeta.urlImagem);
        retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
        retrato.setAttribute('loading', 'lazy');
        retrato.setAttribute('width', '340');
        retrato.setAttribute('height', '440');

        cartao.appendChild(nomeCompleto);
        cartao.appendChild(dataNascimento);
        cartao.appendChild(localNascimento);
        cartao.appendChild(retrato);
        cartoes.appendChild(cartao);

    });
};

obterDadosDeProfetas()