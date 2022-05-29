let val = [7,4,6,8,3,9,5,2]

/*
for(let pos = 0 ;pos < val.length; pos++){
    console.log(`Estamos na posição ${pos} possui o valor ${val[pos]}`)
}*/

val.sort()
for (let pos in val){
    console.log(`A posição ${pos} tem o valor de ${val[pos]}`)
}