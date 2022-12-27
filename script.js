const homin = document.querySelector('.character')

document.addEventListener('keydown', control)
function control(e) {
  switch (e.key) {
    case 'w':
      jump()
      break
    case 'd':
      slide()
      break
  }
  if (e.key === 'w') jump()
}

let gravity = 0.9
let isJumping = false

let x = 5
let y = 0
function jump() {
  if (isJumping) return
  let timerId = setInterval(function () {
    if (y > 120) {
      clearInterval(timerId)
      let timerIdDown = setInterval(function () {
        if (y < 0) {
          clearInterval(timerIdDown)
          isJumping = false
        }
        x += 5
        y -= 10
        homin.style.transform = `translate(${x}px,-${y}px)`
      }, 20)
    }
    x += 5
    isJumping = true
    y += 15
    y = y * gravity
    homin.style.transform = `translate(${x}px,-${y}px)`
  }, 20)
}

// let x = 5
// function slide() {
//     x += 5
//     homin.style.transform = `translate(${x}px ,0px)`
// }
