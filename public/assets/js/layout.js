
// base structure for layout 

let createLayoutStructure = (slide) => {
    const headingDiv = document.createElement('div')
    headingDiv.style.position = 'absolute'
    headingDiv.style.padding = '2px'
    headingDiv.style.boxSizing = 'border-box'
    slide.appendChild(headingDiv)


    const headingTextArea = document.createElement('textarea')
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')
    headingTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    headingTextArea.addEventListener('mousedown', (e)=>{e.stopPropagation()})

    headingDiv.appendChild(headingTextArea)

    const bodyDiv = document.createElement('div')
    bodyDiv.style.padding = '2px'
    bodyDiv.style.boxSizing = 'border-box'
    bodyDiv.style.position = 'absolute'
    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Sub title')
    bodyTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv.appendChild(bodyTextArea)

    const bodyDiv2 = document.createElement('div')
    bodyDiv2.style.position = 'absolute'
    bodyDiv2.style.padding = '2px'
    bodyDiv2.style.boxSizing = 'border-box'
    
    slide.appendChild(bodyDiv2)

    const body2TextArea = document.createElement('textarea')
    body2TextArea.classList.add('textareaBody')
    body2TextArea.setAttribute('placeholder', 'Click to add text')
    body2TextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv2.appendChild(body2TextArea)

    return ([headingDiv, bodyDiv, bodyDiv2])
}


// structure the layouts 
let defaultLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 80)
    let height = percentageOfNum(slide.offsetHeight, 18)

    let bWidth = percentageOfNum(slide.offsetWidth, 80)
    let bHeight = percentageOfNum(slide.offsetHeight, 35)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)    
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)  
    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)
    
    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)
    
    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'none'

}


let titleOnlyLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 80)
    let height = percentageOfNum(slide.offsetHeight, 18)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)  
    headingDiv.style.top = toPer(40)
    headingDiv.style.left = toPer(10)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'none'
    bodyDiv2.style.display = 'none'

}

let titleBodyLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 80)
    let height = percentageOfNum(slide.offsetHeight, 18)

    let bWidth = percentageOfNum(slide.offsetWidth, 80)
    let bHeight = percentageOfNum(slide.offsetHeight, 35)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)  
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'none'
}

let titleAndTwoCols = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 80)
    let height = percentageOfNum(slide.offsetHeight, 18)

    let bWidth = percentageOfNum(slide.offsetWidth, 38)
    let bHeight = percentageOfNum(slide.offsetHeight, 55)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)  
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    bodyDiv2.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv2.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv2.style.top = toPer(35)
    bodyDiv2.style.left = toPer(52)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'inline-block'

}


let oneColumnLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 40)
    let height = percentageOfNum(slide.offsetHeight, 18)

    let bWidth = percentageOfNum(slide.offsetWidth, 40)
    let bHeight = percentageOfNum(slide.offsetHeight, 55)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width) 
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'none'

}


let mainPointLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 80)
    let height = percentageOfNum(slide.offsetHeight, 80)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)  
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'none'
    bodyDiv2.style.display = 'none'
}

let twoSectionLayout = (slide, headingDiv, bodyDiv, bodyDiv2) => {
    let width = percentageOfNum(slide.offsetWidth, 38)
    let height = percentageOfNum(slide.offsetHeight, 18)

    let bWidth = percentageOfNum(slide.offsetWidth, 38)
    let bHeight = percentageOfNum(slide.offsetHeight, 55)

    let s2width = percentageOfNum(slide.offsetWidth, 38)
    let s2height = percentageOfNum(slide.offsetHeight, 80)

    headingDiv.getElementsByClassName('textareaHeading')[0].style.height = toPx(height)
    headingDiv.getElementsByClassName('textareaHeading')[0].style.width = toPx(width)  
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    bodyDiv2.getElementsByClassName('textareaBody')[0].style.height = toPx(s2height)
    bodyDiv2.getElementsByClassName('textareaBody')[0].style.width = toPx(s2width)

    bodyDiv2.style.top = toPer(10)
    bodyDiv2.style.left = toPer(52)

    headingDiv.style.display = 'inline-block'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'inline-block'
}


let captionLayout = (slide, headingDiv, bodyDiv, bodyDiv2) =>{

    let bWidth = percentageOfNum(slide.offsetWidth, 80)
    let bHeight = percentageOfNum(slide.offsetHeight, 10)

    bodyDiv.getElementsByClassName('textareaBody')[0].style.height = toPx(bHeight)
    bodyDiv.getElementsByClassName('textareaBody')[0].style.width = toPx(bWidth)

    bodyDiv.style.top = toPer(80)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'none'
    bodyDiv.style.display = 'inline-block'
    bodyDiv2.style.display = 'none'
}