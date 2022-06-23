
const toPx = x => {
    return `${x}px`
}

const toPer = x => {
    return `${x}%`
}

const toEm = x => {
    return `${x}em`
}

const toRem = x => {
    return `${x}rem`
}

// generate random int 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let createTextInput = (h, w, t, l) => {
    const newTextArea = document.createElement('textarea')
    newTextArea.setAttribute('rows', `${h}`)
    newTextArea.setAttribute('cols', w)
    newTextArea.style.position = 'absolute'
    newTextArea.style.top = toPx(t)
    newTextArea.style.left = toPx(l)
    return newTextArea
}

let createTextBox = (slide) =>{
    let bWidth = 80
    let bHeight = 20

    const bodyDiv = document.createElement('div')
    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)
    bodyDiv.style.position = 'absolute'

    bodyDiv.style.top = toPer(getRandomInt(18,70))
    bodyDiv.style.left = toPer(10)

    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPer(100)
    bodyTextArea.style.width = toPer(100)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Sub title')
    bodyTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv.appendChild(bodyTextArea)
}