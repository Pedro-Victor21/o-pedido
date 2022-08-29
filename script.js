let btnNo = document.querySelector('#btnNo')
let tentativas = 0
btnNo.onmouseover = trocarLugar
btnNo.onclick = naoama

let btnYes = document.querySelector('#btnYes')
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