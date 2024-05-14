const formElement =  document.querySelector("form")
const containerElement = document.querySelector(".container")
const notificationElement = document.querySelector(".notification")
formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    containerElement.classList.add("hide")
    notificationElement.classList.remove("hide")
})