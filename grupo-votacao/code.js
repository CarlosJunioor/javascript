let segundos = 00
let minutos = 00 

let appendMinutos = document.getElementById("minutes")
let appendSegundos = document.getElementById("seconds")

let buttonStart = document.getElementById('button-start')
let buttonStop = document.getElementById('button-stop')
let buttonReset = document.getElementById('button-reset')
let Intervalo

buttonStart.onclick = function () {
    clearInterval(Intervalo)
    Intervalo = setInterval(startTimer, 10)
}

buttonStop.onclick = function () {
    clearInterval(Intervalo)
}

buttonReset.onclick = function () {
    clearInterval(Intervalo)
    minutos = "00"
    segundos = "00"
    appendMinutos.innerHTML = minutos
    appendSegundos.innerHTML = segundos
}

function startTimer () {
    minutos++; 
    
    if(minutos <= 9){
      appendMinutos.innerHTML = "0" + minutos;
    }
    
    if (minutos > 9){
      appendMinutos.innerHTML = minutos;
      
    } 
    
    if (minutos > 99) {
      console.log("seconds");
      segundos++;
      appendSegundos.innerHTML = "0" + segundos;
      minutos = 0;
      appendMinutos.innerHTML = "0" + 0;
    }
    
    if (segundos > 9){
      appendSegundos.innerHTML = segundos;
    }
  
  }
  
