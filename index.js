const button = document.querySelector('.ball-button')
const ballTop = document.querySelector('.ball-top')
const ballBottom = document.querySelector('.ball-bottom')
const ball = document.querySelector('.main')
const h_left = document.querySelector('.heart_left')
const h_right = document.querySelector('.heart_right')

const shake = () => {
  return new Promise(resolve => {
    ball.classList.add('shake')
    setTimeout(() => {
      resolve()
    }, 800)
  })
}

const h1 = () => {
  return new Promise(resolve => {
    h_left.style.width = '50px'
    h_left.style.height = '100px'
    h_left.style.backgroundColor = 'black'
    h_left.style.borderRadius = '25px 25px 0 0'
    h_left.style.transform = 'rotate(-45deg)'
    setTimeout(() => resolve(), 800)
  })
}

const h2 = () => {
  return new Promise(resolve => {
    h_right.style.width = '50px'
    h_right.style.height = '100px'
    h_right.style.backgroundColor = 'black'
    h_right.style.borderRadius = '25px 25px 0 0'
    h_right.style.transform = 'rotate(45deg)'
    setTimeout(() => resolve(), 800)
  })
}

button.addEventListener('click', async () => {
  await shake()
  ballTop.classList.add('opened')
  ballBottom.classList.add('opened')
  button.classList.add('hide')
  await h1()
  h2()
})
