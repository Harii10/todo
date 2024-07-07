const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const message = document.getElementById('alert-msg')

function addTask() {
    if(inputBox.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Invalid",
            text: "Please Enter a Task Name",
          })
    }
    else{
        let li = document.createElement('li')
        li.innerText = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerText = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = " "   
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})



function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()


