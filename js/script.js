// Seleciona o elemento <select> do anime
const animeSelecionado = document.getElementById('animeSelect');
// Seleciona o campo de input onde o usuário digita o nome do personagem
const nomePersonagem = document.getElementById('personagemInput');
// Seleciona o primeiro elemento <p> da página para exibir dicas
const btn = document.getElementById('btnResp');

const btnDicas = document.getElementById('btnDicas');

const dicas = document.getElementById('dicas');
// Seleciona o elemento <p> que contém a descrição do personagem
const textCard = document.getElementsByClassName('card-text')[0];



btnDicas.addEventListener('click', (e) => {
    e.preventDefault()
    // Função responsável por escolher o anime e embaralhar os nomes dos personagens
    dicas.classList.remove('d-none')
    function escolheAnime() {
        if (animeSelecionado.value === "dragonball") { // Se o anime selecionado for Dragon Ball
            const nomesEmbaralhados = embaralharNomes(nomes); // Embaralha os nomes dos personagens
            personagemEscolhido(); // Chama a função para mostrar as dicas do personagem sorteado
        }
        else {
            dicas.innerText = ' '
            return; // Sai da função se não for Dragon Ball
        }
    }
    escolheAnime()

    function resetarJogo() {
        dicas.innerText = '';
        nomePersonagem.value = '';
        const cardResp = document.getElementById('card');
        cardResp.classList.add('d-none'); // Esconde o card
        textCard.innerText = '';
        // Sorteia novamente os nomes (embaralha e reinicia)
        embaralharNomes(nomes);
        if (animeSelecionado.value === 'dragonball') {
            personagemEscolhido();
        }

    }
    resetarJogo()
})

// Função que embaralha um array de nomes aleatoriamente
function embaralharNomes(nomes) {
    return nomes.sort(() => Math.random() - 0.5); // Retorna o array embaralhado
}

// Array com os nomes dos personagens de Dragon Ball
const nomes = ["goku", "goku black", "gohan", "trunks", "freeza", "piccolo", "vegeta", "jiren", "broly"];

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
    },
    freeza: {
        nome: "Freeza",
        dicas: [
            "Sou considerado um dos maiores vilões do universo.",
            "Minha aparência muda drasticamente conforme aumento meu poder.",
            "Comandei um exército que aterrorizou planetas inteiros.",
            "Tenho uma rivalidade mortal com os Saiyajins.",
            "Fui responsável pela destruição do planeta Vegeta.",
            "Minha forma final é pequena, mas extremamente poderosa.",
            "Já fui derrotado mais de uma vez, mas sempre retorno.",
            "Tenho uma risada marcante e gosto de humilhar meus inimigos.",
            "Meu irmão e meu pai também são temidos no universo.",
            "Meu maior medo é o potencial dos Saiyajins."
        ]
    },
    vegeta: {
        nome: "Vegeta",
        dicas: [
            "Sou o príncipe de uma raça guerreira extinta.",
            "Minha rivalidade com Goku é lendária.",
            "No início, fui um grande vilão, mas mudei com o tempo.",
            "Tenho muito orgulho e não aceito derrotas facilmente.",
            "Meu cabelo permanece igual, não importa a transformação.",
            "Casei-me com uma das mulheres mais inteligentes da Terra.",
            "Meu filho veio do futuro para nos alertar sobre um perigo.",
            "Treino incansavelmente para superar meus limites.",
            "Já fui controlado por um mago, mas lutei contra isso.",
            "Meu grito de guerra é 'Eu sou o príncipe dos Saiyajins!'"
        ]
    },
    piccolo: {
        nome: "Piccolo",
        dicas: [
            "Minha origem está ligada a um antigo vilão da Terra.",
            "Fui inimigo de Goku, mas me tornei um de seus maiores aliados.",
            "Tenho a habilidade de regenerar partes do meu corpo.",
            "Treinei o filho de Goku quando ele era apenas uma criança.",
            "Sou conhecido por minha sabedoria e estratégias em batalha.",
            "Posso aumentar meu tamanho durante as lutas.",
            "Minha fusão com outros Namekuseijins aumentou muito meu poder.",
            "Sou um dos poucos guerreiros que não depende de transformações.",
            "Tenho grande respeito pelos meus companheiros de equipe.",
            "Meu nome vem de um instrumento musical."
        ]
    },
    broly: {
        nome: "Broly",
        dicas: [
            "Sou conhecido como o lendário Super Saiyajin.",
            "Meu poder aumenta de forma descontrolada durante as batalhas.",
            "Fui exilado de meu planeta natal devido ao meu potencial assustador.",
            "Tenho uma rivalidade intensa com Goku e Vegeta.",
            "Minha fúria é quase impossível de conter.",
            "Meu pai tentou me controlar por toda a vida.",
            "Minha força supera a de muitos guerreiros do universo.",
            "Minha aparência muda drasticamente quando perco o controle.",
            "Fui manipulado e usado como arma por outros.",
            "Apesar de minha brutalidade, busco meu próprio caminho."
        ]
    },
    jiren: {
        nome: "Jiren",
        dicas: [
            "Sou um dos guerreiros mais poderosos do Universo 11.",
            "Faço parte das Tropas do Orgulho.",
            "Minha força é resultado de um treinamento intenso e solitário.",
            "Busco a justiça acima de tudo.",
            "Poucos conseguem me fazer lutar a sério.",
            "Meu passado é marcado por tragédias e perdas.",
            "Enfrentei Goku em uma batalha épica no Torneio do Poder.",
            "Acredito que confiar nos outros é uma fraqueza.",
            "Meu olhar sério intimida até os mais fortes.",
            "Sou conhecido por derrotar inimigos com apenas um golpe."
        ]
    }
};



// Função que verifica qual personagem foi sorteado e exibe suas dicas
function personagemEscolhido() {
    btn.classList.remove('d-none')
    btnDicas.classList.add('d-none')
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
    if (nomes[0].toLowerCase() === 'vegeta') {
        textoDicas = personagens.vegeta.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'piccolo') {
        textoDicas = personagens.piccolo.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'freeza') {
        textoDicas = personagens.freeza.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'broly') {
        textoDicas = personagens.broly.dicas.join('\n');
    }
    if (nomes[0].toLowerCase() === 'jiren') {
        textoDicas = personagens.jiren.dicas.join('\n');
    }
    digitarTexto(dicas, textoDicas, 20); // 20ms por letra, ajuste como quiser
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
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none')
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
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
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
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
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000);
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
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
        return;
    }
    if (nomes[0].toLowerCase() === 'vegeta' && nomePersonagem.value.toLowerCase() === 'vegeta') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Vegeta é o príncipe dos Saiyajins, famoso por seu orgulho, rivalidade com Goku e determinação em superar seus limites. Inicialmente um vilão, tornou-se um dos maiores heróis e protetores da Terra.";
        imgPersonagem.src = 'img/dragonball/vegeta.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: vegeta");
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
        return;
    }
    if (nomes[0].toLowerCase() === 'piccolo' && nomePersonagem.value.toLowerCase() === 'piccolo') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Piccolo é um guerreiro Namekuseijin que começou como inimigo de Goku, mas se tornou um de seus maiores aliados. É conhecido por sua sabedoria, habilidades de regeneração e papel fundamental como mentor de Gohan.";
        imgPersonagem.src = 'img/dragonball/piccolo.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: piccolo");
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
        return;
    }
    if (nomes[0].toLowerCase() === 'freeza' && nomePersonagem.value.toLowerCase() === 'freeza') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Freeza é um dos vilões mais temidos do universo Dragon Ball, conhecido por sua crueldade, inteligência e múltiplas transformações. Ele foi responsável pela destruição do planeta Vegeta e é o maior inimigo dos Saiyajins.";
        imgPersonagem.src = 'img/dragonball/freeza.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: freeza");
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
        return;
    }
    if (nomes[0].toLowerCase() === 'broly' && nomePersonagem.value.toLowerCase() === 'broly') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Broly é conhecido como o lendário Super Saiyajin. Seu poder cresce de forma descontrolada durante as batalhas, tornando-o um dos guerreiros mais fortes do universo. Apesar de sua fúria, busca seu próprio caminho.";
        imgPersonagem.src = 'img/dragonball/broly.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: broly");
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
        return;
    }
    if (nomes[0].toLowerCase() === 'jiren' && nomePersonagem.value.toLowerCase() === 'jiren') {
        dicas.innerText = ' ' // Limpa as dicas
        const cardResp = document.getElementById('card');
        cardResp.classList.remove('d-none'); // Remove a classe 'd-none' para mostrar o card de resposta
        const imgPersonagem = document.getElementById('imgResp');
        textCard.innerText = "Jiren é um dos guerreiros mais poderosos do Universo 11 e membro das Tropas do Orgulho. Conhecido por sua força imensa e disciplina, ele busca a justiça acima de tudo e raramente encontra adversários à sua altura.";
        imgPersonagem.src = 'img/dragonball/jiren.png'; // Define a imagem do Trunks
        alert("Parabéns! Você acertou o personagem: jiren");
        btn.classList.add('d-none');
        btnDicas.classList.remove('d-none')
        dicas.classList.add('d-none');
        //setTimeout(resetarJogo, 7000); // Reseta o jogo após 3 segundos
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

let timeoutDigitar = null;

function digitarTexto(elemento, texto, velocidade = 20) {
    if (timeoutDigitar) clearTimeout(timeoutDigitar); // cancela a digitação anterior
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
            timeoutDigitar = setTimeout(escrever, velocidade);
        } else {
            timeoutDigitar = null;//limpa ao terminar
        }
    }
    escrever();
}
