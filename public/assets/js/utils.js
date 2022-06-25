
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
//  find percentage of num 
function percentageOfNum(num, per)
{
  return (num/100)*per;
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
    let bWidth = percentageOfNum(slide.offsetWidth, 80)
    let bHeight = percentageOfNum(slide.offsetHeight, 20)

    const bodyDiv = document.createElement('div')
    bodyDiv.style.position = 'absolute'
    bodyDiv.style.padding = '2px'
    bodyDiv.classList.add('slide_textbox')
    bodyDiv.style.boxSizing = 'border-box'
    bodyDiv.style.display = 'inline-block'

    bodyDiv.style.top = toPer(getRandomInt(18,70))
    bodyDiv.style.left = toPer(10)

    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPx(bHeight)
    bodyTextArea.style.width = toPx(bWidth)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Text')
    bodyTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv.appendChild(bodyTextArea)

    return [bodyDiv, bodyTextArea]
}

let createImageDiv = (slide, img_url) =>{
    let bWidth = percentageOfNum(slide.offsetWidth, 25)
    let bHeight = percentageOfNum(slide.offsetHeight, 40)

    const imageDiv = document.createElement('div')
    imageDiv.style.position = 'absolute'
    imageDiv.style.padding = '2px'
    imageDiv.style.top = toPer(getRandomInt(1,5))
    imageDiv.style.left = toPer(getRandomInt(1,10))

    imageDiv.style.height= toPx(bHeight)
    imageDiv.style.width = toPx(bWidth)
    imageDiv.classList.add('slide_img_div')
    imageDiv.style.resize =  'both'

    slide.appendChild(imageDiv)

    let imageDivImg = document.createElement('img')
    imageDivImg.style.height = toPer(100)
    imageDivImg.style.width = toPer(100)
    imageDivImg.src = img_url
    imageDivImg.addEventListener('mousedown', (e)=>{e.preventDefault()})

    imageDiv.appendChild(imageDivImg)

    return imageDiv

}

let createlinkDiv = (slide, linkText, linkUrl) => {
    if (!linkText){
        linkText = linkUrl
    }

    const linkDiv  = document.createElement('div')
    linkDiv.classList.add('linkDiv')
    linkDiv.style.position = 'absolute'
    linkDiv.style.padding = '2px'
    linkDiv.style.top = toPer(getRandomInt(1,5))
    linkDiv.style.left = toPer(getRandomInt(1,10))
    slide.appendChild(linkDiv)

    const linkDivLink = document.createElement('a')
    linkDiv.classList.add('link_div_link')
    linkDivLink.style.color = 'blue'
    linkDivLink.setAttribute('target', '_blank')
    linkDivLink.href = linkUrl
    linkDivLink.innerText=linkText

    linkDiv.appendChild(linkDivLink)

    return linkDiv
}