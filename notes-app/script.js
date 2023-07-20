const addBtn = document.getElementById('add')

// Load existing notes from the local storage and parse them as an array objects
const notes = JSON.parse(localStorage.getItem('notes'))

addBtn.addEventListener('click', () => addNewNote())

// If there are existing notes in the local storage 
if(notes) {
    notes.forEach(note => addNewNote(note))
}

//Function to add a new note element to the page
function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = note.querySelector(".edit")
    const deleteBtn = note.querySelector(".delete")
    const main = note.querySelector(".main")
    const textArea = note.querySelector('textarea')

    // start line number - 29..
    textArea.value = text
    main.innerHTML = marked(text)

    // add a click event listener to the delete button to remove the page and update the local storage    
    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })

   
    editBtn.addEventListener("click", () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle("hidden")
    })
    
    textArea.addEventListener("input", (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)

        updateLS()
    })
    
    document.body.appendChild(note)
}

// Function to update the local storage with the content of all the textarea elements on the page
function updateLS() {
    const notesText = document.querySelectorAll("textarea")

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}

