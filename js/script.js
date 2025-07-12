//  CONFIGURAÇÕES INICIAIS 

const animeSelecionado = document.getElementById('animeSelect');
const nomePersonagem = document.getElementById('personagemInput');
const btn = document.getElementById('btnResp');
const btnDicas = document.getElementById('btnDicas');
const dicas = document.getElementById('dicas');
const textCard = document.getElementsByClassName('card-text')[0];
const cardResp = document.getElementById('card');
const imgPersonagem = document.getElementById('imgResp');

// Variáveis para controle de fila de personagens
let filaDragonball = [];
let filaNaruto = [];

//  FUNÇÃO DE EMBARALHAMENTO 
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

//  PREPARAR FILA DE PERSONAGENS 
function prepararFila(anime) {
    if (anime === 'dragonball') filaDragonball = shuffleArray([...Object.keys(personagensDragonball)]);
    if (anime === 'naruto') filaNaruto = shuffleArray([...Object.keys(personagensNaruto)]);
}

//  PEGAR O PRÓXIMO PERSONAGEM 
function proximoPersonagem(anime) {
    if (anime === 'dragonball') return filaDragonball.shift();
    if (anime === 'naruto') return filaNaruto.shift();
}

//  INICIAR JOGO 
btnDicas.addEventListener('click', (e) => {
    cardResp.classList.add('d-none')
    e.preventDefault();
    const anime = animeSelecionado.value.toLowerCase();
    if (!anime || anime === 'onepiece') {
        alert("Este anime ainda não está disponível.");
        return;
    }

    dicas.classList.remove('d-none');
    prepararFila(anime);
    mostrarDicas(anime);
});

//  MOSTRAR DICAS DO PERSONAGEM 
function mostrarDicas(anime) {
    btn.classList.remove('d-none');
    btnDicas.classList.add('d-none');

    const nome = anime === 'dragonball' ? filaDragonball[0] : filaNaruto[0];
    const dados = anime === 'dragonball' ? personagensDragonball : personagensNaruto;
    const personagem = dados[nome];

    digitarTexto(dicas, personagem.dicas.join('\n'), 20);
}

//  VERIFICAR RESPOSTA DO USUÁRIO 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const anime = animeSelecionado.value.toLowerCase();
    const nome = anime === 'dragonball' ? filaDragonball[0] : filaNaruto[0];
    const dados = anime === 'dragonball' ? personagensDragonball : personagensNaruto;
    const personagem = dados[nome];


    if (nomePersonagem.value.toLowerCase().trim() === nome.toLowerCase()) {
        exibirCard(anime, nome, personagem);
    }else{
          alert("Resposta incorreta! Tente novamente.");
          nomePersonagem.value = '';
    }
});

// Permite o envio pressionando Enter no campo de input
nomePersonagem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click();
    }
});

// EXIBIR CARD DE RESPOSTA
function exibirCard(anime, nome, personagem) {
    dicas.innerText = '';
    cardResp.classList.remove('d-none');
    textCard.innerText = personagemDescricao[anime][nome];
    imgPersonagem.src = `img/${anime}/${nome}.png`;

    alert(`Parabéns! Você acertou o personagem: ${personagem.nome}`);
    nomePersonagem.value = '';
    dicas.innerText = ' ';
    btn.classList.add('d-none');
    btnDicas.classList.remove('d-none')
}

//  EFEITO DE DIGITAÇÃO PARA AS DICAS 
let timeoutDigitar = null;

function digitarTexto(elemento, texto, velocidade = 20) {
    if (timeoutDigitar) clearTimeout(timeoutDigitar);
    elemento.innerHTML = "";
    let i = 0;
    function escrever() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i) === "\n" ? "<br>" : texto.charAt(i);
            i++;
            timeoutDigitar = setTimeout(escrever, velocidade);
        } else {
            timeoutDigitar = null;
        }
    }
    escrever();
}

//  BANCO DE DADOS DE PERSONAGENS E DICAS 
const personagensDragonball = {
    goku: {
        nome: "Goku",
        dicas: ["Sou um Saiyajin criado na Terra.", "Busco sempre ser mais forte."]
    },
    gohan: {
        nome: "Gohan",
        dicas: ["Filho de Goku.", "Poder oculto enorme desde pequeno."]
    },
    trunks: {
        nome: "Trunks",
        dicas: ["Vim de um futuro destruído.", "Luto com uma espada."]
    },
    freeza: {
        nome: "Freeza",
        dicas: [
            "Sou um dos vilões mais temidos do universo.",
            "Fui derrotado por um Saiyajin em Namekusei."
        ]
    },
    vegeta: {
        nome: "Vegeta",
        dicas: [
            "Sou o príncipe dos Saiyajins.",
            "Treino incansavelmente para superar o Goku."
        ]
    },
    majinboo: {
        nome: "Boo",
        dicas: [
            "Tenho várias formas, algumas boas e outras malignas.",
            "Transformo inimigos em doces."
        ]
    },
    goten: {
        nome: "Goten",
        dicas: [
            "Sou o filho mais novo de Goku.",
            "Fiz a fusão com meu melhor amigo para lutar."
        ]
    },
    gotenks: {
        nome: "Gotenks",
        dicas: [
            "Sou a fusão de dois jovens Saiyajins.",
            "Uso ataques com nomes engraçados, como o Super Fantasma."
        ]
    },
    broly: {
        nome: "Broly",
        dicas: [
            "Minha fúria é quase incontrolável.",
            "Tenho um poder que supera os limites de um Saiyajin comum."
        ]
    },
    bardock: {
        nome: "Bardock",
        dicas: [
            "Sou um guerreiro Saiyajin e pai de um dos maiores heróis.",
            "Fui um dos primeiros a desconfiar das intenções de Freeza.",
            "Tentei salvar meu povo antes da destruição do planeta Vegeta."
        ]
    }

};

const personagensNaruto = {
    naruto: {
        nome: "Naruto",
        dicas: ["Tenho a raposa dentro de mim.", "Quero ser Hokage."]
    },
    sasuke: {
        nome: "Sasuke",
        dicas: ["Vingança pelo clã.", "Olhos especiais."]
    },
    itachi: {
        nome: "Itachi",
        dicas: ["Fiz um sacrifício por minha vila.", "Faço parte da Akatsuki."]
    },
    kakashi: {
        nome: "Kakashi",
        dicas: ["Uso uma máscara.", "Copio jutsus com meu Sharingan."]
    },
    lee: {
        nome: "Lee",
        dicas: [
            "Não uso ninjutsu nem genjutsu.",
            "Sou especialista em taijutsu.",
            "Tenho sobrancelhas grossas e muita determinação!"
        ]
    },
    madara: {
        nome: "Madara",
        dicas: [
            "Fundei o Clã Uchiha.",
            "Tenho o Sharingan mais poderoso.",
            "Busquei um mundo sem dor através do Tsukuyomi Infinito."
        ]
    },
    pain: {
        nome: "Pain",
        dicas: [
            "Lidero a Akatsuki com seis corpos.",
            "Carrego o Rinnegan.",
            "Minha filosofia é: 'A dor traz a paz'."
        ]
    }
};

//  DESCRIÇÕES DOS PERSONAGENS PARA O CARD 
const personagemDescricao = {
    dragonball: {
        goku: "Goku é um Saiyajin criado na Terra, conhecido por sua força incomparável e espírito alegre.",
        gohan: "Gohan é o filho de Goku, possui um poder incrível mesmo tentando viver em paz.",
        trunks: "Trunks é um guerreiro vindo do futuro, determinado a salvar seu tempo.",
        freeza: "Freeza é um dos vilões mais icônicos de Dragon Ball. Ele é um tirano intergaláctico conhecido por sua crueldade, poder e múltiplas transformações. Foi derrotado por Goku em Namekusei.",
        vegeta: "Vegeta é o príncipe dos Saiyajins. Orgulhoso e determinado, começou como vilão, mas se tornou um dos maiores aliados de Goku. Sua busca por poder e superação é incansável.",
        majinboo: "Majin Boo é uma criatura mágica poderosa que passou por diversas transformações, do mal puro até uma versão bondosa. É imprevisível, mas extremamente forte.",
        goten: "Goten é o filho caçula de Goku. Apesar da pouca idade, alcançou o Super Saiyajin com facilidade. É alegre e tem uma forte amizade com Trunks.",
        gotenks: "Gotenks é o resultado da fusão entre Goten e Trunks. Arrogante, criativo e poderoso, ele utiliza técnicas únicas e engraçadas em batalha, como o ataque dos fantasmas.",
        broly: "Broly é um Saiyajin com poder destrutivo avassalador. Em algumas versões, é um guerreiro calado e selvagem, cuja força ultrapassa todos os limites conhecidos.",
        bardock: "Bardock é o pai de Goku e um guerreiro de elite do planeta Vegeta. Corajoso e determinado, foi um dos primeiros Saiyajins a enfrentar Freeza ao perceber seus planos. Sua história trágica se tornou símbolo de resistência e bravura.",
    },
    naruto: {
        naruto: "Naruto é o protagonista da série, determinado a ser Hokage e proteger sua vila.",
        sasuke: "Sasuke busca vingança pelo clã Uchiha e trilha um caminho solitário.",
        itachi: "Itachi sacrificou tudo por sua vila, mesmo sendo visto como traidor.",
        kakashi: "Kakashi é um ninja habilidoso e estratégico, mestre de Naruto e Sasuke.",
        lee: "Rock Lee é um ninja da Vila da Folha que se destaca por sua incrível dedicação ao taijutsu. Incapaz de usar ninjutsu ou genjutsu, compensa com esforço incansável, força física e velocidade impressionante.",
        madara: "Madara Uchiha foi um dos fundadores da Vila da Folha e um dos ninjas mais poderosos da história. Com o Mangekyou Sharingan e o Rinnegan, buscava impor a paz por meio do controle absoluto, tornando-se uma grande ameaça ao mundo ninja.",
        pain: "Pain, nome usado por Nagato, é o líder da Akatsuki e usuário do Rinnegan. Utiliza o Caminho dos Seis Pain para controlar múltiplos corpos. Após sofrer grandes perdas, adotou uma filosofia radical: alcançar a paz por meio da dor e destruição."


    }
};
