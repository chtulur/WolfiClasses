const canvas = document.querySelector('.screen')
const ctx = canvas.getContext('2d')

const skew = 0.4

canvas.width = window.innerWidth * skew
canvas.height = window.innerHeight * skew

let requestAnimationID
let lastFrameTime = performance.now()
let frameCount = 0
let accumulatedTime = 0
let i = 0

const fps = 5
const desiredTimeBetweenFrames = Math.round(1000 / fps)

//gamescreen
const WIDTH = 300,
  HALF_WIDTH = 150
const HEIGHT = 200,
  HALF_HEIGHT = 100

const render = fps => {
  //background
  ctx.fillStyle = 'Black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  //render fps
  ctx.fillStyle = 'White'
  ctx.font = '20px Monospace'
  ctx.fillText('FPS: ' + fps, 0, 20)

  //gamescreen
  ctx.fillStyle = 'White'
  ctx.fillRect(
    canvas.width / 2 - HALF_WIDTH,
    canvas.height / 2 - HALF_HEIGHT,
    WIDTH,
    HEIGHT
  )

  //random box
  ctx.fillStyle = 'Blue'
  ctx.fillRect(i * 32, 30, 32, 32)
  if (i >= 32) i = 0
  i++
}

const calcTime = currentFrameTime => {
  const ΔTime = currentFrameTime - lastFrameTime
  accumulatedTime += ΔTime
}

const resetCounters = () => {
  frameCount = 0
  accumulatedTime = 0
}

const gameLoop = () => {
  const currentFrameTime = performance.now()
  calcTime(currentFrameTime)

  if (accumulatedTime >= desiredTimeBetweenFrames) {
    frameCount++
    render(Math.round(frameCount * fps))
    resetCounters()
  }

  lastFrameTime = currentFrameTime
  requestAnimationID = requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
