const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//note taking area
const CreateTextArea = document.querySelector('.create-note-area .icons')
const AddText = document.querySelector('.write-note-area')
const NoteArea = '<textarea id ="new-note" rows="40" cols="80"></textarea>'

//Save 
const saveButton = document.createElement('button')
saveButton.innerHTML = 'Save'
saveButton.id = 'save-button';
const noteList = document.querySelector('.notes-list')

//Cancel 
const cancelButton = document.createElement('button')
cancelButton.innerHTML = 'Cancel'
cancelButton.id = 'cancel-button'

//Create Text area
function CreateTextNewArea() {
  AddText.insertAdjacentHTML('afterbegin', NoteArea)
  AddText.appendChild(saveButton)
  AddText.appendChild(cancelButton)
  CreateTextArea.remove()
}

CreateTextArea.addEventListener('click', CreateTextNewArea)

//Cancel Text Area
const CreateNotearea = document.querySelector('.create-note-area')

function CancelText() {
  saveButton.remove()
  cancelButton.remove()
  let notes = document.getElementById("new-note");
  if (notes.parentNode) {
    notes.parentNode.removeChild(notes)
  }
  CreateNotearea.appendChild(CreateTextArea)
}

cancelButton.addEventListener('click', CancelText)

function saveText() {
const textToSave = writeText
noteList.insertAdjacentHTML('afterbegin', textToSave )
NoteArea.innerHTML =''
}

saveButton.addEventListener('click' ,saveText)
