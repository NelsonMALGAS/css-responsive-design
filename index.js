
let notesContainer = document.getElementById("notes")
const form = document.getElementById("add-note-form")
let title = document.getElementById("note-title")
const content = document.getElementById("note-content")

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    
    const note = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
     
    note.classList.add("note")
    h1.textContent = title.value
    p.textContent = content.value
    note.appendChild(h1)
    note.appendChild(p)
    notesContainer.appendChild(note)
    
})






