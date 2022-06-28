let savedSlide

getSlides().then(data => {
   slide_r = data[data.length-1]

   getSlide(slide_r.id).then(data =>{
        savedSlide = data
        if (savedSlide && savedSlide.slideData.length >= 1) {
            loadSlideData(savedSlide)
        }
   })

}).catch(err => {
    console.log(err);
})

const slide1 = new slide(workspace, previewWindow)


function loadSlideData(savedSlide) {
    let themeIdx = savedSlide.theme
    for (let slide of savedSlide.slideData) {
        let textboxes = slide.textbox
        let images = slide.image
        let links = slide.link
        let lists = slide.list
        let layouts = slide.layout
        createSlidesFromData(textboxes, images, links, lists, layouts, themeIdx)
    }
    slide1.selectTheme(themeIdx)
}


function createSlidesFromData(textboxes, images, links, lists, layout) {
    createSavedSlide()
    createSavedLayouts(layout)
    createSavedTextBox(textboxes)
    createSavedLinks(links)
    createSavedImage(images)
}

function createSavedSlide(themeIdx) {
    slide1.newSlide()
}

function addTypography(element, typography){
    if (typography.bold){
        element.style.fontWeight = 'bold'
    }
    if (typography.italic){
        element.style.fontStyle = "italic"
    }
    if (typography.underline){
        element.style.textDecoration = "underline"
    }

    element.style.fontFamily = typography.fontFamily

    element.style.color = typography.fontColor

    let fontSizeVal = typography.fontSize
    if (fontSizeVal > 5 && fontSizeVal <= 96){
        element.style.fontSize = toPx(fontSizeVal)
    }
    else if(fontSizeVal < 6){
        element.style.fontSize = toPx(fontSizeVal)
    }else{
        fontSizeVal = 96
        element.style.fontSize = toPx(fontSizeVal)
    }


}

function createSavedLayouts(layout) {
    let headingDiv = layout.headingDiv
    let body1Div = layout.body1Div
    let body2Div = layout.body2Div
    
    slideHeading = slide1.activeSlideCls.heading1
    slideHeadingTextArea = slide1.activeSlideCls.headingTextArea
    slideHeading.style.top = toPx(headingDiv.top)
    slideHeading.style.left = toPx(headingDiv.left)
    slideHeadingTextArea.style.height = toPx(headingDiv.height)
    slideHeadingTextArea.style.width = toPx(headingDiv.width)
    slideHeadingTextArea.value = headingDiv.content
    addTypography(slideHeadingTextArea, headingDiv.typography)
    slide1.activeSlideCls.headingTextAreaTypography = headingDiv.typography

    slideBody1Div = slide1.activeSlideCls.body1
    body1TextArea = slide1.activeSlideCls.bodyTextArea  
    slideBody1Div.style.top = toPx(body1Div.top)
    slideBody1Div.style.left = toPx(body1Div.left)
    body1TextArea.style.height = toPx(body1Div.height)
    body1TextArea.style.width = toPx(body1Div.width)
    body1TextArea.value = body1Div.content
    addTypography(body1TextArea, body1Div.typography)
    slide1.activeSlideCls.bodyTextAreaTypography = body1Div.typography

    slideBody2Div = slide1.activeSlideCls.body2
    body2TextArea = slide1.activeSlideCls.body2TextArea  
    slideBody2Div.style.top = toPx(body1Div.top)
    slideBody2Div.style.left = toPx(body1Div.left)
    body2TextArea.style.height = toPx(body1Div.height)
    body2TextArea.style.width = toPx(body1Div.width)
    body2TextArea.value = body2Div.content
    addTypography(body2TextArea, body2Div.typography)
    slide1.activeSlideCls.body2TextAreaTypography = body2Div.typography
}

function createSavedTextBox(textBoxes){
    for (let textbox of textBoxes){
        textBoxClass = slide1.activeSlideCls.addTextBoxToSlide()
        
        textBoxClass.textboxDiv.style.top = toPx(textbox.position.top)
        textBoxClass.textboxDiv.style.left = toPx(textbox.position.left)
        textBoxClass.bodyTextArea.style.height = toPx(textbox.dimension.height)
        textBoxClass.bodyTextArea.style.width = toPx(textbox.dimension.width)
        textBoxClass.bodyTextArea.textAreaContent = textbox.content
        textBoxClass.bodyTextArea.value = textbox.content
        addTypography(textBoxClass.bodyTextArea, textbox.typography)
        textBoxClass.textBold = textbox.typography.bold
        textBoxClass.textItalic = textbox.typography.italic
        textBoxClass.textUnderline = textbox.typography.underline
        textBoxClass.fontSize = textbox.typography.fontSize
        textBoxClass.textFont = textbox.typography.fontFamily
        textBoxClass.fontColor = textbox.typography.fontColor
        textBoxClass.bodyPosition['top'] = textbox.position.top
        textBoxClass.bodyPosition['left'] = textbox.position.left
    }
}

function createSavedLinks(links){
    for (link of links){
        
        linkClass = slide1.activeSlideCls.addLinkToSlide(link.urlText, link.urlLink)
        linkDiv = linkClass.linkDiv

        linkDiv.style.top = toPx(link.position.top)
        linkDiv.style.left = toPx(link.position.left)
        // linkDiv.style.height = toPx(link.dimension.height)
        // linkDiv.style.width = toPx(link.dimension.width)
        linkClass.bodyPosition['top'] = link.position.top
        linkClass.bodyPosition['left'] = link.position.left
    }
}

function createSavedImage(images){
    for (image of images){
        imageClass = slide1.activeSlideCls.addImageToSlide(image.imgURL)
        imageDiv = imageClass.imageDiv
        imageDiv.style.top = toPx(image.position.top)
        imageDiv.style.left = toPx(image.position.left)
        imageClass.imageInnerDiv.style.height = toPx(image.dimension.height)
        imageClass.imageInnerDiv.style.width = toPx(image.dimension.width)
        imageDiv.style.height = toPx(image.dimension.height)
        imageDiv.style.width = toPx(image.dimension.width)
        imageClass.bodyPosition['top'] = image.position.top
        imageClass.bodyPosition['left'] = image.position.left
    }
}