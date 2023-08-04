const ヤバい = document.getElementById("ヤバい")
const two = document.querySelector("2")

const error = new Audio("Error.mp3")
error.volume = 0.2

const dumbass = () => {
    window.addEventListener("load", () => {
        error.play()
        alert("Dumbass")
        location.reload()
    })
}

two.addEventListener("click", dumbass)

/*const dumbass2 = () => {
    error.play()
    alert("Dumbass")
    location.reload()
}

window.addEventListener("load", () => {
    error.play()
    alert("Dumbass")
    location.reload()
})*/