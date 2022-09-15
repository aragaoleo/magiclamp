
const elementoResposta = document.querySelector("#resposta")

const input = document.querySelector("#inputdaPergunta")

const lamp = document.querySelector("#lampadainversa")

const button = document.querySelector("#button")

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
    

    function esfregueLampada() {
       lamp.src = 'https://i0.wp.com/www.skooterblog.com/wp-content/uploads/2009/04/akinator_1_defi1.png'
       document.getElementById('tittle').innerHTML = "Você tem 3 desejos"
       input.style.opacity = 1;
       button.style.opacity = 1; 
    }

    lamp.addEventListener ( 'click' , esfregueLampada )


function fazerPergunta() {
  
if(input.value == "") {
  alert("Ainda não perguntou")
  return
}

const pergunta = "<div>"  + input.value + "</div>"

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = respostas[numeroAleatorio]
elementoResposta.style.opacity = 1;

}

