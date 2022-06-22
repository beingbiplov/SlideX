
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


let createTextInput = (h, w, t, l) => {
    const newTextArea = document.createElement('textarea')
    newTextArea.setAttribute('rows', `${h}`)
    newTextArea.setAttribute('cols', w)
    newTextArea.style.position = 'absolute'
    newTextArea.style.top = toPx(t)
    newTextArea.style.left = toPx(l)
    return newTextArea
}