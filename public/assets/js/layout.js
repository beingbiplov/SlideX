
// base structure for layout 

let createLayoutStructure = (slide) => {
    const headingDiv = document.createElement('div')
    headingDiv.style.position = 'absolute'
    slide.appendChild(headingDiv)


    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')
    headingTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv = document.createElement('div')
    bodyDiv.style.position = 'absolute'
    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPer(100)
    bodyTextArea.style.width = toPer(100)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Sub title')
    bodyTextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv.appendChild(bodyTextArea)

    const bodyDiv2 = document.createElement('div')
    bodyDiv2.style.position = 'absolute'
    slide.appendChild(bodyDiv2)

    const body2TextArea = document.createElement('textarea')
    body2TextArea.style.height = toPer(100)
    body2TextArea.style.width = toPer(100)
    body2TextArea.classList.add('textareaBody')
    body2TextArea.setAttribute('placeholder', 'Click to add text')
    body2TextArea.setAttribute('oninput', 'resizeTextarea(this)')

    bodyDiv2.appendChild(body2TextArea)

    return ([headingDiv, bodyDiv, bodyDiv2])
}


// structure the layouts 
let defaultLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 80
    let height = 18

    let bWidth = 80
    let bHeight = 35

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)    
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)  

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)
    
    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)
    
    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'none'

}


let titleOnlyLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 80
    let height = 18

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(40)
    headingDiv.style.left = toPer(10)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'none'
    bodyDiv2.style.display = 'none'

}

let titleBodyLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 80
    let height = 18

    let bWidth = 80
    let bHeight = 55

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'none'
}

let titleAndTwoCols = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 80
    let height = 18

    let bWidth = 38
    let bHeight = 55

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    bodyDiv2.style.height = toPer(bHeight)
    bodyDiv2.style.width = toPer(bWidth)

    bodyDiv2.style.top = toPer(35)
    bodyDiv2.style.left = toPer(52)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'block'

}


let oneColumnLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 40
    let height = 18

    let bWidth = 40
    let bHeight = 55

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'none'

}


let mainPointLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 80
    let height = 80

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'none'
    bodyDiv2.style.display = 'none'
}

let twoSectionLayout = (headingDiv, bodyDiv, bodyDiv2) => {
    let width = 38
    let height = 18

    let bWidth = 38
    let bHeight = 55

    let s2width = 38
    let s2height = 80

    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    bodyDiv2.style.height = toPer(s2height)
    bodyDiv2.style.width = toPer(s2width)

    bodyDiv2.style.top = toPer(10)
    bodyDiv2.style.left = toPer(52)

    headingDiv.style.display = 'block'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'block'
}


let captionLayout = (headingDiv, bodyDiv, bodyDiv2) =>{

    let bWidth = 80
    let bHeight = 10

    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)

    bodyDiv.style.top = toPer(80)
    bodyDiv.style.left = toPer(10)

    headingDiv.style.display = 'none'
    bodyDiv.style.display = 'block'
    bodyDiv2.style.display = 'none'
}