
let defaultLayout = (slide) => {
    let width = 80
    let height = 18

    let bWidth = 80
    let bHeight = 35

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv = document.createElement('div')
    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)
    bodyDiv.style.position = 'absolute'

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPer(100)
    bodyTextArea.style.width = toPer(100)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Sub title')

    bodyDiv.appendChild(bodyTextArea)
}


let titleOnlyLayout = (slide) => {
    let width = 80
    let height = 18

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(40)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)
}

let titleBodyLayout = (slide) => {
    let width = 80
    let height = 18

    let bWidth = 80
    let bHeight = 55

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv = document.createElement('div')
    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)
    bodyDiv.style.position = 'absolute'

    bodyDiv.style.top = toPer(35)
    bodyDiv.style.left = toPer(10)

    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPer(100)
    bodyTextArea.style.width = toPer(100)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add Sub title')

    bodyDiv.appendChild(bodyTextArea)
}

let titleAndTwoCols = (slide) => {
    let width = 80
    let height = 18

    let bWidth = 38
    let bHeight = 55

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv1 = document.createElement('div')
    bodyDiv1.style.height = toPer(bHeight)
    bodyDiv1.style.width = toPer(bWidth)
    bodyDiv1.style.position = 'absolute'

    bodyDiv1.style.top = toPer(35)
    bodyDiv1.style.left = toPer(10)

    slide.appendChild(bodyDiv1)

    const body1TextArea = document.createElement('textarea')
    body1TextArea.style.height = toPer(100)
    body1TextArea.style.width = toPer(100)
    body1TextArea.classList.add('textareaBody')
    body1TextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv1.appendChild(body1TextArea)

    const bodyDiv2 = document.createElement('div')
    bodyDiv2.style.height = toPer(bHeight)
    bodyDiv2.style.width = toPer(bWidth)
    bodyDiv2.style.position = 'absolute'

    bodyDiv2.style.top = toPer(35)
    bodyDiv2.style.left = toPer(52)

    slide.appendChild(bodyDiv2)

    const body2TextArea = document.createElement('textarea')
    body2TextArea.style.height = toPer(100)
    body2TextArea.style.width = toPer(100)
    body2TextArea.classList.add('textareaBody')
    body2TextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv2.appendChild(body2TextArea)
}


let oneColumnLayout = (slide) => {
    let width = 40
    let height = 18

    let bWidth = 40
    let bHeight = 55

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv1 = document.createElement('div')
    bodyDiv1.style.height = toPer(bHeight)
    bodyDiv1.style.width = toPer(bWidth)
    bodyDiv1.style.position = 'absolute'

    bodyDiv1.style.top = toPer(35)
    bodyDiv1.style.left = toPer(10)

    slide.appendChild(bodyDiv1)

    const body1TextArea = document.createElement('textarea')
    body1TextArea.style.height = toPer(100)
    body1TextArea.style.width = toPer(100)
    body1TextArea.classList.add('textareaBody')
    body1TextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv1.appendChild(body1TextArea)

}


let mainPointLayout = (slide) => {
    let width = 80
    let height = 80

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)
}

let twoSectionLayout = (slide) => {
    let width = 38
    let height = 18

    let bWidth = 38
    let bHeight = 55

    let s2width = 38
    let s2height = 80

    const headingDiv = document.createElement('div')
    headingDiv.style.height = toPer(height)
    headingDiv.style.width = toPer(width)
    headingDiv.style.position = 'absolute'
    headingDiv.style.top = toPer(10)
    headingDiv.style.left = toPer(10)

    slide.appendChild(headingDiv)

    const headingTextArea = document.createElement('textarea')
    headingTextArea.style.height = toPer(100)
    headingTextArea.style.width = toPer(100)
    headingTextArea.classList.add('textareaHeading')
    headingTextArea.setAttribute('placeholder', 'Click to add Title')

    headingDiv.appendChild(headingTextArea)

    const bodyDiv1 = document.createElement('div')
    bodyDiv1.style.height = toPer(bHeight)
    bodyDiv1.style.width = toPer(bWidth)
    bodyDiv1.style.position = 'absolute'

    bodyDiv1.style.top = toPer(35)
    bodyDiv1.style.left = toPer(10)

    slide.appendChild(bodyDiv1)

    const body1TextArea = document.createElement('textarea')
    body1TextArea.style.height = toPer(100)
    body1TextArea.style.width = toPer(100)
    body1TextArea.classList.add('textareaBody')
    body1TextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv1.appendChild(body1TextArea)

    const bodyDiv2 = document.createElement('div')
    bodyDiv2.style.height = toPer(s2height)
    bodyDiv2.style.width = toPer(s2width)
    bodyDiv2.style.position = 'absolute'

    bodyDiv2.style.top = toPer(10)
    bodyDiv2.style.left = toPer(52)

    slide.appendChild(bodyDiv2)

    const body2TextArea = document.createElement('textarea')
    body2TextArea.style.height = toPer(100)
    body2TextArea.style.width = toPer(100)
    body2TextArea.classList.add('textareaBody')
    body2TextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv2.appendChild(body2TextArea)

}


let captionLayout = (slide) =>{

    let bWidth = 80
    let bHeight = 10

    const bodyDiv = document.createElement('div')
    bodyDiv.style.height = toPer(bHeight)
    bodyDiv.style.width = toPer(bWidth)
    bodyDiv.style.position = 'absolute'

    bodyDiv.style.top = toPer(80)
    bodyDiv.style.left = toPer(10)

    slide.appendChild(bodyDiv)

    const bodyTextArea = document.createElement('textarea')
    bodyTextArea.style.height = toPer(100)
    bodyTextArea.style.width = toPer(100)
    bodyTextArea.classList.add('textareaBody')
    bodyTextArea.setAttribute('placeholder', 'Click to add text')

    bodyDiv.appendChild(bodyTextArea)
}