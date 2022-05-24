

function verificar(){

    let data = new Date()
    let anoo = data.getFullYear()


    let fano = document.getElementById('nasci')
    let res = document.getElementById('res')
    
    if (fano.value.lenght == 0 || fano.value > anoo){
        window.alert('[ERROR] Digite os dados novamente')
    } else {
         let  fsex = document.getElementsByName('sex')
         let idade = anoo - Number(fano.value)
         let gen = ''
         if (fsex[0].checked) {
             gen = 'Homem'
         } else {
             gen = 'Mulher'
         }
         res.innerHTML = `Detectamos ${gen} e ${idade}`

    }

  
}
