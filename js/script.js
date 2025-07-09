// Seleciona o elemento <select> do anime
const animeSelecionado = document.getElementById('animeSelect');
// Seleciona o campo de input onde o usuário digita o nome do personagem
const nomePersonagem = document.getElementById('personagemInput');
// Seleciona o primeiro elemento <p> da página para exibir dicas
const btn = document.getElementById('btnResp');

const dicas = document.getElementById('dicas');
// Seleciona o elemento <p> que contém a descrição do personagem
const textCard = document.getElementsByClassName('card-text')[0];

// Adiciona um ouvinte de evento para quando o usuário muda o anime selecionado
animeSelecionado.addEventListener('change', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do evento
    escolheAnime();     // Chama a função para escolher o anime e sortear personagem
});

// Função responsável por escolher o anime e embaralhar os nomes dos personagens
function escolheAnime() {
    if (animeSelecionado.value === "dragonball") { // Se o anime selecionado for Dragon Ball
        const nomesEmbaralhados = embaralharNomes(nomes); // Embaralha os nomes dos personagens
        // Mostra no console a ordem embaralhada
    }
    else {
        dicas.innerText = ' '
        return; // Sai da função se não for Dragon Ball
    }
    personagemEscolhido(); // Chama a função para mostrar as dicas do personagem sorteado
}

// Função que embaralha um array de nomes aleatoriamente
function embaralharNomes(nomes) {
    return nomes.sort(() => Math.random() - 0.5); // Retorna o array embaralhado
}

// Array com os nomes dos personagens de Dragon Ball
const nomes = ["goku", "goku black", "gohan", "trunks"];


// Objeto com os personagens e suas dicas
const personagens = {
    goku: {
        nome: "Goku",
        dicas: [
            "Minha infância foi marcada por um acidente que mudou minha natureza.",
            "Apesar de minha origem, fui criado por um senhor muito bondoso nas montanhas.",
            "Não sou conhecido por ser muito bom com tecnologia ou assuntos escolares.",
            "Treinei com um mestre que usava uma tartaruga nas costas.",
            "Viajei ao longo do mundo atrás de objetos capazes de realizar desejos.",
            "Já lutei em torneios contra adversários de diferentes espécies e universos.",
            "Tenho uma cauda que sumiu com o tempo.",
            "Meu estilo de luta favorece a improvisação e o espírito esportivo.",
            "Mesmo enfrentando ameaças planetárias, mantenho sempre meu bom humor.",
            "Meu nome verdadeiro é conhecido apenas entre os de minha raça."
        ]
    },
    gohan: {
        nome: "Gohan",
        dicas: [
            "Mesmo ainda jovem, já demonstrei um poder oculto impressionante.",
            "Fui forçado a lutar desde pequeno, apesar da minha natureza pacífica.",
            "Meu mentor foi alguém com quem meu pai já teve sérios confrontos.",
            "Durante um tempo, lutei vestindo a mesma roupa que meu pai usava na juventude.",
            "Costumo ficar mais forte quando estou emocionalmente abalado.",
            "Fui a primeira criança híbrida entre dois povos guerreiros.",
            "Tive uma fase marcante em que usei capa e turbante.",
            "Fui decisivo numa batalha contra um inimigo que se regenerava constantemente.",
            "Tenho uma relação muito próxima com a ciência.",
            "Meu nome foi inspirado em alguém importante para meu avô adotivo."
        ]
    },
    gokuBlack: {
        nome: "Goku Black",
        dicas: [
            "Minha aparência é familiar, mas meus objetivos são opostos ao que se espera.",
            "Minha origem envolve uma troca de corpos facilitada por desejos distorcidos.",
            "Minha fala é refinada, quase nobre, contrastando com minha brutalidade.",
            "Acredito que a justiça verdadeira exige o fim da humanidade.",
            "Despertei uma forma poderosa com um brilho cor-de-rosa.",
            "Fui aliado de mim mesmo em outra linha temporal.",
            "Minha espada é formada com pura energia e ódio.",
            "Sou um exemplo do que acontece quando o poder divino é corrompido.",
            "Mesmo sendo uma cópia, minha personalidade é completamente diferente.",
            "Fui responsável por destruir civilizações inteiras em nome da “paz eterna”."
        ]
    },
    trunks: {
        nome: "Trunks",
        dicas: [
            "Vim de um futuro devastado por inimigos criados por um cientista.",
            "Durante muito tempo, fui treinado por alguém que nunca conheci no presente.",
            "Carrego uma espada, algo incomum entre os meus semelhantes.",
            "Minha chegada ao passado mudou o rumo de muitos eventos.",
            "Apesar da minha origem sombria, cresci cercado por tecnologia.",
            "Sou descendente direto de dois grandes guerreiros de raças diferentes.",
            "Minha versão criança é bem mais despreocupada que minha versão adulta.",
            "Tive uma relação próxima com um ser do tempo que controlava linhas temporais.",
            "Fui um dos poucos a enfrentar um inimigo com aparência idêntica à de um herói.",
            "Sou considerado um símbolo de esperança para meu próprio tempo."
        ]
    }
};



// Função que verifica qual personagem foi sorteado e exibe suas dicas
function personagemEscolhido() {
    let textoDicas = "";
    if (nomes[0] === 'goku') {
        textoDicas = personagens.goku.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'gohan') {
        textoDicas = personagens.gohan.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'goku black') {
        textoDicas = personagens.gokuBlack.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'trunks') {
        textoDicas = personagens.trunks.dicas.join('\n');
    }
    digitarTexto(dicas, textoDicas, 30); // 30ms por letra, ajuste como quiser
}

function resetarJogo() {
    dicas.innerText = '';
    nomePersonagem.value = '';
    const cardResp = document.getElementById('card');
    cardResp.classList.add('d-none'); // Esconde o card
    textCard.innerText = '';
    // Sorteia novamente os nomes (embaralha e reinicia)
    embaralharNomes(nomes);
    personagemEscolhido();
}



// Adiciona um ouvinte de evento para o campo de input do personagem
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do evento
    // Se o personagem sorteado for 'goku' e o usuário digitar 'goku', mostra mensagem de acerto
    if (nomes[0].toLowerCase() === 'goku' && nomePersonagem.value.toLowerCase() === 'goku') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        imgPersonagem.src = 'img/dragonball/goku.png'; // Define a imagem do Goku
        textCard.innerText = "Goku é um Saiyajin criado na Terra, conhecido por sua força incomparável e espírito indomável. Ele é o protagonista da série Dragon Ball e sempre busca se tornar mais forte para proteger seus amigos e o planeta.";
        alert("Parabéns! Você acertou o personagem: Goku");
        setTimeout(resetarJogo, 9000); // Reseta o jogo após 3 segundos
        return;
    }

    if (nomes[0].toLowerCase() === 'goku black' && nomePersonagem.value.toLowerCase() === 'goku black') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        imgPersonagem.src = 'img/dragonball/gokublack.png'; // Define a imagem do Goku Black
        textCard.innerText = "Goku Black é uma versão alternativa de Goku, originada de um desejo distorcido. Ele é conhecido por sua brutalidade e por acreditar que a verdadeira justiça exige o fim da humanidade.";
        alert("Parabéns! Você acertou o personagem: Goku Black");
        setTimeout(resetarJogo, 9000); // Reseta o jogo após 3 segundos
        return;
    }

    if (nomes[0].toLowerCase() === 'gohan' && nomePersonagem.value.toLowerCase() === 'gohan') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        imgPersonagem.src = 'img/dragonball/gohan.png'; // Define a imagem do Gohan
        textCard.innerText = "Gohan é o filho mais velho de Goku, conhecido por seu poder oculto e natureza pacífica. Ele foi forçado a lutar desde pequeno e teve um papel crucial em várias batalhas importantes.";
        alert("Parabéns! Você acertou o personagem: Gohan");
        setTimeout(resetarJogo, 7000);
        return;
    }


    if (nomes[0].toLowerCase() === 'trunks' && nomePersonagem.value.toLowerCase() === 'trunks') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Trunks é o filho de Vegeta e Bulma, conhecido por sua coragem e determinação. Ele vem de um futuro devastado e é um símbolo de esperança para seu tempo.";
        imgPersonagem.src = 'img/dragonball/trunks.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: Trunks");
        setTimeout(resetarJogo, 9000); // Reseta o jogo após 3 segundos
        return;
    }



}
)


// Adiciona um ouvinte de evento para o campo de input do personagem (Enter)
nomePersonagem.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click(); // Dispara o clique do botão
    }
});

function digitarTexto(elemento, texto, velocidade = 20) {
    elemento.innerHTML = ""; // Limpa o conteúdo
    let i = 0;
    function escrever() {
        if (i < texto.length) {
            // Se encontrar \n, adiciona <br>, senão adiciona o caractere normalmente
            if (texto.charAt(i) === "\n") {
                elemento.innerHTML += "<br>";
            } else {
                elemento.innerHTML += texto.charAt(i);
            }
            i++;
            setTimeout(escrever, velocidade);
        }
    }
    escrever();
}
