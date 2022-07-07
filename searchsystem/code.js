let carFile = [["carfile1", "carfile2"] , ["carfile3", "carfile4"], ["carfile5", "carfile6"]]

document.getElementById("showTable").innerHTML = showArray(carFile)


 function showArray() {

    document.getElementById("myTable").innerHTML = ""

    let table = document.getElementById("myTable")
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = 'titulo'
    cell2.innerHTML = 'titulo2'
    
     for (let i = 0; i < carFile.length; i++){

        row = table.insertRow(-1)
        cell1 = row.insertCell(0)
        cell2 = row.insertCell(1)

        cell1.innerHTML = carFile[i][0]
        cell2.innerHTML = carFile[i][1]
     }

}

function getData(){

   let fileName = document.getElementById("fname").value 
   let downLink = document.getElementById("fdown").value
   let carData = [fileName,downLink]
   carFile.push(carData)
    return getData
}
