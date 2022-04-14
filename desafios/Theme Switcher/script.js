function switchTheme() {
    const body = document.querySelector("body");
    const button = document.getElementById("switch")

    body.classList.toggle("night")
    button.classList.toggle("activated")
}