

function verificar(){

    let data = new Date()
    let anoo = data.getFullYear()

    var genero = document.querySelector('input[name="sex"]:checked').value

    let fano = document.getElementById('nasci')
    let res = document.getElementById('res')

    if (fano.value.lenght == 0 || fano.value > anoo){
        window.alert('[ERROR] Digite os dados novamente')
    } else {
         let idade = anoo - Number(fano.value)
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} e ${idade}`
    }
  
}
