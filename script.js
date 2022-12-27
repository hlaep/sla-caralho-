const homin = document.querySelector('.character')
let y = 0
let x = 0

function jump() {
  let timerId = setInterval(function () {
    y += 30
    x += 10
    if (y > 250) {
      clearInterval(timerId)
      let timerIdDown = setInterval(function () {
        y -= 5
        homin.style.transform = `translate(${x}px,${y}px)`
      }, 20)
    }
    homin.style.transform = `translate(${x}px,-${y}px)`
  }, 20)
}

function control(e) {
  if (e.key === 'w') jump()
}
document.addEventListener('keydown', control)
// div.style.transform = "translate(x,y)"
