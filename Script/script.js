largura = 0
altura = 0
vidas = 1
tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if (nivel ==='Normal') {
    criaMosquitoTempo = 1500 
}

if (nivel ==='Difícil') {
    criaMosquitoTempo = 1000 
}

if (nivel ==='ChuckNorris') {
    criaMosquitoTempo = 750 
}

function resize () {

    altura = window.innerHeight
    largura  = window.innerWidth
}

resize()

let cronometro = setInterval(function(){
    tempo --
    if(tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
        
    }   
    document.getElementById('cronometro').innerHTML = tempo 

}, criaMosquitoTempo)


function mosca () {

//Remover mosquito
if (document.getElementById('mosquito')) {

    document.getElementById('mosquito').remove()
    
    if(vidas > 3) {
       window.location.href='Game Over.html'
    }

    else {
        document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"
        vidas++
    }
    
}

let posicaoX = Math.floor(Math.random() * largura) -90
let posicaoY = Math.floor(Math.random() * altura)  -90
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//Criação mosquito

let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanho() + ' ' + ladotela()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
   this.remove()
}

document.body.appendChild(mosquito)

}

function tamanho () {

    let classe = Math.floor(Math.random() * 3)

    switch (classe) {

        case 0:
            return 'mosquito1'

        case 1: 
            return 'mosquito2'

        case 2: 
            return 'mosquito3'

    }
}

function ladotela () {
        
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {

        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
        }
}






