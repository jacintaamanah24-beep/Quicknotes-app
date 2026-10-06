const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

let notes = [];

function render() {
    notesList.textContent = "";

    notes.forEach(function (note) {
        const listItem = document.createElement("li");
        listItem.classList.add("note-card");
        listItem.classList.add(`category-${note.category}`);

        const noteText = document.createElement("p");
        noteText.textContent = note.text;

        const categoryLabel = document.createElement("small");
        categoryLabel.textContent = note.category;

        const date = document.createElement("small");
        date.textContent = note.createdAt;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        listItem.appendChild(noteText);
        listItem.appendChild(categoryLabel);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(date);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(deleteButton);

        notesList.appendChild(listItem);
    });
}

noteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = noteInput.value.trim();
    const category = noteCategory.value;

    const note = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    notes.push(note);

    render();

    noteInput.value = "";
    noteInput.focus();
});