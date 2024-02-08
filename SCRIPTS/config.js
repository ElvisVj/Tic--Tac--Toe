function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
}
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("playername").trim();
    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add("error")
        errorsOutputElement.textContent = "Please enter a valid name!"
        return;
    }

}
