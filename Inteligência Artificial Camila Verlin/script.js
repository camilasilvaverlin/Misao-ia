const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        
    {
        enunciado: "Você percebe que há muito lixo acumulado em um parque da sua cidade. O que você faz?",
        alternativas: [
            {
                texto: "Ajudo a recolher o lixo e incentivo outras pessoas a manterem o local limpo.",
                afirmacao: "Compreendeu que preservar os espaços públicos é uma responsabilidade de todos."
            },
            {
                texto: "Deixo o lixo no local, pois a limpeza não é minha responsabilidade.",
                afirmacao: "Considerou que a preservação dos espaços públicos depende apenas dos profissionais da limpeza."
            }
        ]
    },
    {
        enunciado: "Você percebe que seus familiares deixam as luzes acesas em cômodos vazios. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Apago as luzes e explico a importância de economizar energia.",
                afirmacao: "Entendeu que economizar energia ajuda a preservar os recursos naturais."
            },
            {
                texto: "Não faço nada, pois a energia não está sendo desperdiçada por mim.",
                afirmacao: "Considerou que o consumo de energia é uma responsabilidade individual, sem relação com o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Ao visitar uma praia, você percebe que algumas pessoas estão jogando garrafas e sacolas plásticas na areia. O que você faz?",
        alternativas: [
            {
                texto: "Oriento as pessoas sobre o descarte correto e procuro uma lixeira.",
                afirmacao: "Reconheceu que o descarte incorreto de plástico prejudica os animais marinhos e os ecossistemas."
            },
            {
                texto: "Continuo aproveitando a praia sem me preocupar com o lixo.",
                afirmacao: "Não considerou os impactos que o lixo pode causar à natureza e aos animais."
            }
        ]
    },
    {
        enunciado: "Sua escola organiza uma atividade de plantio de árvores para ajudar na preservação ambiental. Como você participa?",
        alternativas: [
            {
                texto: "Participo do plantio e ajudo a cuidar das mudas.",
                afirmacao: "Compreendeu que as árvores são importantes para o equilíbrio ambiental e a qualidade de vida."
            },
            {
                texto: "Não participo, pois considero a atividade desnecessária.",
                afirmacao: "Não reconheceu a importância do plantio e da preservação das árvores."
            }
        ]
    },
    {
        enunciado: "Você percebe que em sua casa muitos materiais recicláveis, como papel, plástico e vidro, estão sendo jogados no lixo comum. O que você faz?",
        alternativas: [
            {
                texto: "Separo os materiais recicláveis para o descarte correto.",
                afirmacao: "Entendeu que a coleta seletiva contribui para a reciclagem e a redução da poluição."
            },
            {
                texto: "Jogo todos os materiais no mesmo lixo.",
                afirmacao: "Não considerou a importância da separação dos resíduos para a preservação do meio ambiente."
            }
        ]
    }
]ss

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
      caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


