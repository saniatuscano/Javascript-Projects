const notesContainer = document.querySelector("container");
const addNoteButton= notesContainer.querySelector("add-note");

function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes")|| "[]");
}

function saveNotes(){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id,content){

}

function addNote(){

}

function updateNote(){

}

function deleteNote(){

}