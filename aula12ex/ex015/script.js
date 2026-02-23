function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'chomem.jpg')
            } else if (idade < 21) {
               img.setAttribute('src', 'jhomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'ahomem.jpg')
            } else {
                img.setAttribute('src', 'ihomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'cmulher.jpg')
            } else if (idade < 21) {
               img.setAttribute('src', 'jmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'amulher.jpg')
            } else {
                img.setAttribute('src', 'imulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}