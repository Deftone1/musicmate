 // Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);

// Event Handler Function
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addSongContent(input.value);
    input.value = "";
  }
}

// Helpers
function addSongContent(lyric) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="lyric-content">${lyric}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add("lyric-list-item")
    ul.appendChild(li);
}
