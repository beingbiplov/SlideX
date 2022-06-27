
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
    const btnHeight = 15
    const btnWidth = 15

    const bodyDiv = document.createElement('div')
    bodyDiv.style.position = 'absolute'
    bodyDiv.style.padding = '2px'
    bodyDiv.classList.add('slide_textbox')
    bodyDiv.style.boxSizing = 'border-box'
    bodyDiv.style.display = 'inline-block'

    slide.appendChild(bodyDiv)

    const bodyCloseBtnDiv = document.createElement('div')
    bodyCloseBtnDiv.style.position = 'relative'
    bodyCloseBtnDiv.style.width = toPer(100)
    bodyCloseBtnDiv.style.height = toPx(btnHeight)
    bodyDiv.appendChild(bodyCloseBtnDiv)

    const bodyCloseBtn = document.createElement('img')
    bodyCloseBtn.src = './assets/images/close.png'
    bodyCloseBtn.style.cursor = 'pointer'
    bodyCloseBtn.style.position = 'absoulte'
    bodyCloseBtn.style.height = toPx(btnHeight)
    bodyCloseBtn.style.width = toPx(btnWidth)
    bodyCloseBtn.classList.add('element_close_btn')
    bodyCloseBtn.style.right = '0'
    bodyCloseBtn.style.top = '0'
    bodyCloseBtn.style.zIndex = '2'
    bodyCloseBtnDiv.appendChild(bodyCloseBtn)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPx(bHeight)
    bodyTextArea.style.width = toPx(bWidth)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Text')
    bodyTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv.appendChild(bodyTextArea)
    bodyTextArea.addEventListener('mousedown', (e)=>{e.stopPropagation()})

    return [bodyDiv, bodyTextArea, bodyCloseBtn]
}

let createImageDiv = (slide, img_url) =>{
    let bWidth = percentageOfNum(slide.offsetWidth, 25)
    let bHeight = percentageOfNum(slide.offsetHeight, 40)
    const btnHeight = 15
    const btnWidth = 15

    const imageDiv = document.createElement('div')
    imageDiv.style.position = 'absolute'
    imageDiv.style.padding = '2px'

    imageDiv.style.height= toPx(bHeight+ 50)
    imageDiv.style.width = toPx(bWidth)
    imageDiv.style.display = 'inline_block'
    // imageDiv.classList.add('slide_img_div')

    slide.appendChild(imageDiv)

    const imgCloseBtnDiv = document.createElement('div')
    imgCloseBtnDiv.style.position = 'relative'
    imgCloseBtnDiv.style.width = toPer(100)
    imgCloseBtnDiv.style.height = toPx(btnHeight)
    imageDiv.appendChild(imgCloseBtnDiv)

    const imgCloseBtn = document.createElement('img')
    imgCloseBtn.src = './assets/images/close.png'
    imgCloseBtn.style.cursor = 'pointer'
    imgCloseBtn.style.position = 'absoulte'
    imgCloseBtn.style.height = toPx(btnHeight)
    imgCloseBtn.style.width = toPx(btnWidth)
    imgCloseBtn.classList.add('element_close_btn')
    imgCloseBtn.style.right = '0'
    imgCloseBtn.style.top = '0'
    imgCloseBtn.style.zIndex = '2'
    imgCloseBtnDiv.appendChild(imgCloseBtn)

    const imageInnerDiv = document.createElement('div')
    imageInnerDiv.style.height= toPer(90)
    imageDiv.appendChild(imageInnerDiv)
    imageInnerDiv.classList.add('slide_img_div')
    imageInnerDiv.addEventListener('mousedown', (e)=>{e.stopPropagation()})

    let imageDivImg = document.createElement('img')
    imageDivImg.style.height = toPer(100)
    imageDivImg.style.width = toPer(100)
    imageDivImg.src = img_url

    imageInnerDiv.appendChild(imageDivImg)

    return [imageDiv, imageDivImg, imageInnerDiv, imgCloseBtn]

}

let createlinkDiv = (slide, linkText, linkUrl) => {
    const btnHeight = 15
    const btnWidth = 15

    if (!linkText){
        linkText = linkUrl
    }

    const linkDiv  = document.createElement('div')
    linkDiv.classList.add('linkDiv')
    linkDiv.style.position = 'absolute'
    linkDiv.style.padding = '10px'
    slide.appendChild(linkDiv)

    const linkCloseBtnDiv = document.createElement('div')
    linkCloseBtnDiv.style.position = 'relative'
    linkCloseBtnDiv.style.width = toPer(100)
    linkCloseBtnDiv.style.height = toPx(btnHeight)
    linkDiv.appendChild(linkCloseBtnDiv)

    const linkCloseBtn = document.createElement('img')
    linkCloseBtn.src = './assets/images/close.png'
    linkCloseBtn.style.cursor = 'pointer'
    linkCloseBtn.style.position = 'absoulte'
    linkCloseBtn.style.height = toPx(btnHeight)
    linkCloseBtn.style.width = toPx(btnWidth)
    linkCloseBtn.classList.add('element_close_btn')
    linkCloseBtn.style.right = '0'
    linkCloseBtn.style.top = '0'
    linkCloseBtn.style.zIndex = '2'
    linkCloseBtnDiv.appendChild(linkCloseBtn)

    const linkDivLink = document.createElement('a')
    linkDiv.classList.add('link_div_link')
    linkDivLink.style.color = 'blue'
    linkDivLink.setAttribute('target', '_blank')
    linkDivLink.href = linkUrl
    linkDivLink.innerText=linkText

    linkDiv.appendChild(linkDivLink)

    return [linkDiv, linkCloseBtn]
}


// handle close button events
function handlecloseBtnDisplay(elementDiv, btn){
    elementDiv.addEventListener('mouseover', ()=>{
        btn.style.display = 'block'
    })
    elementDiv.addEventListener('mouseout', ()=>{
        btn.style.display = 'none'
    })

    btn.addEventListener('click', function(){
        this.closeBtnAction(elementDiv)
    }.bind(this))
}

function closeBtnAction(elementDiv){
    elementDiv.remove()
}


// handle typography icons background
function handleTypographyIconBG(typoEvent, icon){
    if (typoEvent){
        icon.style.backgroundColor = '#fde293'
    }
    else{
        icon.style.backgroundColor = ''
    }  
}

function handleFontSizeInputValue(fontSize, fontSizeInput){
    fontSizeInput.value = fontSize

}

function handleFontFamily(font, fontSelector){
    fontSelector.value = font
}


//to change theme of slides 
function changeSlidesTheme(slides, activeThemeIdx, themeIdx){
    let themeClass = themeList[themeIdx]
    let activeThemeClass = themeList[activeThemeIdx]
    
    for (slideClass of slides){
        slideClass.newSlideDiv.classList.remove(activeThemeClass)
        slideClass.newSlideDiv.classList.add(themeClass)
        slideClass.updatePreviewWindow(slideClass.newSlideDiv)
    }
}