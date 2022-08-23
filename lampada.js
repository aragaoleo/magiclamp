
const elementoResposta = document.querySelector("#resposta")

const inputdaPergunta = document.querySelector("#inputdaPergunta")

const lamp = document.querySelector("#lampadainversa")

const respostas = [
  'Com certeza!',
  'Não tenho tanta certeza.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem que não.',
  'Provavelmente...',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]


    function lampgenio() {
       lamp.src = 'https://i0.wp.com/www.skooterblog.com/wp-content/uploads/2009/04/akinator_1_defi1.png'

    }

    lamp.addEventListener ( 'click' , lampgenio )



function fazerPergunta() {
  
if(inputdaPergunta.value == "") {
  alert("Ainda não perguntou")
  return
}

const pergunta = "<div>"  + inputdaPergunta.value + "</div>"

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;



}

