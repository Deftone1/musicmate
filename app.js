// Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);


// Event Handler Function
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    if (input.value != "") {
        addSongContent(input.value);
        input.value = ";"
    }

}

// Helpers
function addSongContent(lyric){
    let ul = document.querySelector("ul");
    let li = document.querySelector("li");


}
