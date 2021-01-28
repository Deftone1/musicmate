// Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleClickDeleteOrCheck);
document.getElementById("clearAll").addEventListener("click", handleClearAll);


// Event Handler Function
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addSongContent(input.value);
    input.value = "";
  }
}

function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") crossedLyric(e);

  if (e.target.name == "deleteButton") deleteLyric(e);
}

function handleClearAll(e) {
    document.querySelector("ul").innerHTML = "";
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

  li.classList.add("lyric-list-item");
  ul.appendChild(li);
}

function crossedLyric(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
}

function deleteLyric(e) {
  let item = e.target.parentNode;
  item.classList.add("lyric-list-item-fall");
  item.addEventListener("transitionend", function () {
    item.remove();
  });
}


