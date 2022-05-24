

function verificar(){

    let data = new Date()
    let anoo = data.getFullYear()

    var genero = document.querySelector('input[name="sex"]:checked').value

    let fano = document.getElementById('nasci')
    let res = document.getElementById('res')

    let img = document.createElement("img")
   


    if (fano.value.lenght == 0 || fano.value > anoo){
        window.alert('[ERROR] Digite os dados novamente')
    } else {
         let idade = anoo - Number(fano.value)
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} e ${idade}<br>`
         
         if ( genero == "Masculino" ){ 
             
            if (idade <=10){
                img.src = "img/foto-bebe-m.png"
         }else if (idade > 10 && idade <=21) {
                img.src ="img/foto-jovem-m.png"

         } else if (idade >21 && idade <=60){
                img.src = "img/foto-adulto-m.png"
         } else {
                img.src = "img/foto-idoso-m.png"
         }

             
            } else if (idade <=10){
                img.src = "img/foto-bebe-f.png"
        }else if (idade > 10 && idade <=21) {
                img.src ="img/foto-jovem-f.png"

        } else if (idade >21 && idade <=60){
                img.src = "img/foto-adulto-f.png"
        } else {
                img.src = "img/foto-idoso-f.png"
        }
            
         
         
         res.appendChild(img)
    } 
  
}
