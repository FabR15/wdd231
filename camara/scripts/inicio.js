const chaveAPI = "0f551340609a09f2cd28a1800081f481";
const latitude = -23.5015;
const longitude = -47.4526;

const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${chaveAPI}&units=metric&lang=pt_br`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${chaveAPI}&units=metric&lang=pt_br`;

async function obterClima() {
    
    try {
        const resposta = await fetch(urlClima);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar informações do clima.");
        }

        const dados = await resposta.json();
        const temperatura = dados.main.temp;
        const descricao = dados.weather[0].description;
        const icone = dados.weather[0].icon;

        document.getElementById("climaAtual").innerHTML = `
            <p>Temperatura: ${temperatura.toFixed(1)} °C</p>
            <p>Condição: ${descricao}</p>
            <img src="https://openweathermap.org/img/wn/${icone}@2x.png"
                alt="${descricao}">
`       ;

        console.log(dados);

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

async function obterPrevisao() {
    try {
        const resposta = await fetch(urlPrevisao);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar previsão do tempo.");
        }

        const dados = await resposta.json();

        const previsoes = dados.list
            .filter(previsao => previsao.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        const elementoPrevisao = document.getElementById("previsaoTempo");

        elementoPrevisao.innerHTML = previsoes.map(previsao => {
            const temperatura = previsao.main.temp;
            const descricao = previsao.weather[0].description;
            const icone = previsao.weather[0].icon;
            const data = new Date(previsao.dt * 1000);

            const dataFormatada = data.toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit"
            });
            return `
                <div class="dia-previsao">
                    <p>${dataFormatada}</p>
                    <p>${temperatura.toFixed(1)} °C</p>
                    <p>${descricao}</p>
                    <img src="https://openweathermap.org/img/wn/${icone}@2x.png"
                        alt="${descricao}">
                </div>
            `;
        }).join("");

    } catch (erro) {
        console.error("Erro na previsão:", erro);
    }
}

async function obterEmpresasDestaque() {
    try {
        const resposta = await fetch("dados/membros.json");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar os membros.");
        }

        const membros = await resposta.json();

        const membrosDestaque = membros.filter(membro =>
            membro.nivel === 2 || membro.nivel === 3
        );

        const quantidade = Math.floor(Math.random() * 2) + 2;

        const empresasSelecionadas = membrosDestaque
            .sort(() => Math.random() - 0.5)
            .slice(0, quantidade);

        console.log(empresasSelecionadas);

        const elementoEmpresas = document.getElementById("empresasDestaque");

        elementoEmpresas.innerHTML = empresasSelecionadas.map(empresa => `
            <div class="destaque-empresa">
                <h3>${empresa.nome}</h3>
                <img src="imagens/${empresa.imagem}" alt="Logo da ${empresa.nome}">
                <p>${empresa.endereco}</p>
                <p>${empresa.telefone}</p>
                <p>${empresa.nivel === 3 ? "Ouro" : "Prata"}</p>
                <a href="${empresa.site}" target="_blank">Visitar site</a>
            </div>
        `).join("");

    } catch (erro) {
        console.error("Erro ao carregar empresas:", erro);
    }
} 

obterEmpresasDestaque();

obterClima();
obterPrevisao();