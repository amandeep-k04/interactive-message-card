// Select elements
const input = document.getElementById("messageInput");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const removeNoteBtn = document.getElementById("removeNoteBtn");
const resetBtn = document.getElementById("resetBtn");
const card = document.getElementById("card");


// PART 1: Show Message
showBtn.addEventListener("click", function () {
    card.textContent = input.value;      // change text
    card.style.display = "block";        // make visible
});


// PART 2: Change Card Color
colorBtn.addEventListener("click", function () {
    card.style.backgroundColor = "lightblue";  // change background
    card.style.color = "darkblue";             // change text color
});


// PART 3: Add Note
addNoteBtn.addEventListener("click", function () {

    let existingNote = document.getElementById("note");

    if (!existingNote) {
        let note = document.createElement("p");  // create element
        note.textContent = "This is a small note."; // add text
        note.id = "note";  // give it an ID

        card.appendChild(note);  // append inside card
    }
});


// PART 4: Remove Note
removeNoteBtn.addEventListener("click", function () {

    let note = document.getElementById("note");

    if (note) {
        note.remove();  // remove element
    }
});


// PART 5: Reset
resetBtn.addEventListener("click", function () {

    card.textContent = "";              // clear message
    card.style.display = "none";        // hide card
    card.style.backgroundColor = "";    // reset color
    card.style.color = "";              // reset text color

    let note = document.getElementById("note");
    if (note) {
        note.remove();
    }

    input.value = ""; // clear input field
});