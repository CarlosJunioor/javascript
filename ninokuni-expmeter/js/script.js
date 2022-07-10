const list = document.getElementById('taskBox')

function writeTask (){
    
    const entry = document.createElement('li')
    let inputUser = document.getElementById('inputN').value
    entry.appendChild(document.createTextNode(inputUser))
    list.appendChild(entry)
}

function deleteTask (){
    let child = document.getElementById("child")
    list.removeChild(child)

}