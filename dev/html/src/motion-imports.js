import { animate, scroll } from "motion"

const box = document.querySelector("#box")
const status = document.querySelector("#status")
let toggled = false

// animate(): toggle the box between two states
document.querySelector("#play").addEventListener("click", () => {
    toggled = !toggled
    animate(
        box,
        { x: toggled ? 150 : 0, rotate: toggled ? 180 : 0 },
        { type: "spring", bounce: 0.3 }
    )
})

// scroll(): link an animation to page scroll
scroll(animate("#progress", { scaleX: [0, 1] }, { ease: "linear" }))

// scroll(): read raw page progress (0 - 1)
scroll((progress) => {
    status.textContent = `Scroll progress: ${progress.toFixed(2)}`
})

// scroll(): fade each card in as it crosses the viewport
document.querySelectorAll(".card").forEach((card) => {
    scroll(animate(card, { opacity: [0, 1], scale: [0.8, 1] }), {
        target: card,
        offset: ["start end", "center center"],
    })
})
