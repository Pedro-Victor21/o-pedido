let btnNo = document.querySelector('#btnNo')
let tentativas = 0
btnNo.onmouseover = trocarLugar
//a função foi adicionada diretamente usando o nome da variável PONTO evento recebe (nome da function)
btnNo.onclick = naoama

let btnYes = document.querySelector('#btnYes')
//a função foi adicionada diretamente usando o nome da variável PONTO evento recebe (nome da function)
btnYes.onclick = Felicidade

function trocarLugar(){
    tentativas++
    btnNo.style.left = Math.floor(Math.random() * 75) + '%'
    btnNo.style.top = Math.floor(Math.random() * 90) + '%'
    console.log(btnNo.style.left)
    console.log(btnNo.style.top)
}

function Felicidade(){
    alert('Também te amo! ❤️')
}

function naoama(){
    alert('Realmente depois de tantas tentativas você não me ama mesmo.')
}