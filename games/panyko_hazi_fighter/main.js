let x = 150
let y = 0

const keyCodeText = document.querySelector('.demo')
const square = document.querySelector('.square')

function bill(e) {
  let code = e.which

  keyCodeText.textContent = code + ' a kódja a leütött billentyűnek.'

  switch (code) {
    case 39:
      square.style.left = `${(x += 10)}px`
      break

    case 40:
      square.style.top = `${(y += 10)}px`
      break

    case 37:
      square.style.left = `${(x -= 10)}px`
      break

    case 38:
      square.style.top = `${(y -= 10)}px`
      break
  }
}

document.addEventListener('keydown', e => bill(e))
