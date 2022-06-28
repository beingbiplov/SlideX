
class CreateSlide{
    constructor(workspace, slideCls, previewWindow, themeIdx, slideListIdx){
        this.newSlideDiv
        this.slideCls = slideCls
        this.workspace = workspace
        this.newPreview
        this.previewWindow = previewWindow
        this.previewSN
        this.slideListIdx = slideListIdx
        this.previewSectionWin
        this.textBoxList = []
        this.imageList = []
        this.linkList = []
        this.listItemList = []
        this.heading1
        this.body1
        this.body2
        this.closeBtnHeading
        this.closeBtnBody1
        this.closeBtnBody2
        this.activeTextBoxCls
        this.headingTextArea
        this.bodyTextArea
        this.body2TextArea
        this.headingTextAreaTypography = {
            'bold': false,
            'italic': false,
            'fontSize': 48,
            'fontFamily': 'Roboto',
            'underline': false,
            'fontColor' : '#000000'
        }
        this.bodyTextAreaTypography = {
            'bold': false,
            'italic': false,
            'fontSize': 32,
            'fontFamily': 'Roboto',
            'underline': false,
            'fontColor' : '#000000'
        }
        this.body2TextAreaTypography = {
            'bold': false,
            'italic': false,
            'fontSize': 32,
            'fontFamily': 'Roboto',
            'underline': false,
            'fontColor' : '#000000'
        }
        this.activeLayout,
        this.activeThemeIdx = themeIdx
    }

    create(){
        this.newSlideDiv = document.createElement('div')
        this.newSlideDiv.classList.add('content_section__main--slide', 'active')
        this.workspace.appendChild(this.newSlideDiv)
        
        let createdLayouts = createLayoutStructure(this.newSlideDiv)
        this.heading1 = createdLayouts[0]
        this.body1 = createdLayouts[1]
        this.body2 = createdLayouts[2]
        this.closeBtnHeading = createdLayouts[3]
        this.closeBtnBody1 = createdLayouts[4]
        this.closeBtnBody2 = createdLayouts[5]
        this.headingTextArea = createdLayouts[6]
        this.bodyTextArea = createdLayouts[7]
        this.body2TextArea = createdLayouts[8]

        
        defaultLayout(
            this.newSlideDiv, 
            this.heading1, 
            this.body1, 
            this.body2, 
        )

        this.activeLayout = defaultLayout
        
        this.addSlideTOPreview(this.newSlideDiv)
        this.handleDragDrop(this.heading1, this.body1, this.body2)
        handlecloseBtnDisplay(this.heading1, this.closeBtnHeading)
        handlecloseBtnDisplay(this.body1, this.closeBtnBody1)
        handlecloseBtnDisplay(this.body2, this.closeBtnBody2)

        this.setSlideTheme(this.activeThemeIdx)
       
        return this.newSlideDiv
    }

    addSlideTOPreview(newSlideDiv){
        this.newPreview = document.createElement('div')
        this.newPreview.classList.add('slide_preview')
        this.previewWindow.appendChild(this.newPreview)
        
        this.previewSN = document.createElement('div')
        this.previewSN.classList.add('preview_section__sn')
        this.previewSN.innerHTML = `${this.slideListIdx+1}`
        this.newPreview.appendChild(this.previewSN)

        const previewBox = document.createElement('div')
        previewBox.classList.add('preview_section__box')
        this.newPreview.append(previewBox)

        this.previewSectionWin = document.createElement('div')
        this.previewSectionWin.classList.add('preview_section__window')
        previewBox.appendChild(this.previewSectionWin)

        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = newSlideDiv.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)
        
    }

    removePreview() {
        this.newPreview.remove()        
    }

    updatePreviewWindow(slide) {
        this.previewSN.innerHTML = `${this.slideListIdx+1}`
        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = slide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.newSLideClone.style.display = 'block'
        this.previewSectionWin.appendChild(this.newSLideClone)

    }

    selectLayout(layout) {
        // this.newSlideDiv.innerHTML = ''
        layout(this.newSlideDiv, this.heading1, this.body1, this.body2)
        this.activeLayout = layout
        this.updatePreviewWindow(this.newSlideDiv)
    }

    setSlideTheme(themeIdx){
        let themeClass = themeList[themeIdx]

        this.newSlideDiv.classList.add(themeClass)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    removeDiv(){
        this.newSlideDiv.remove()
    }

    addTextBoxToSlide(){
        let textboxCls = new textBox(this.newSlideDiv, this.textBoxList, this.textBoxList.length)
        let bodyTextArea = textboxCls.create()
        this.updatePreviewWindow(this.newSlideDiv)
        this.textBoxList.push(textboxCls)

        bodyTextArea.addEventListener('focus', (e)=>{
            this.activeTextBoxCls = textboxCls
            handleTypographyIconBG(textboxCls.textBold, boldTextBtn)
            handleFontSizeInputValue(textboxCls.fontSize, fontSizeInput)
            handleTypographyIconBG(textboxCls.textItalic, italicTextBtn)
            handleTypographyIconBG(textboxCls.textUnderline, underlineTextBtn)
            handleFontFamily(textboxCls.textFont, fontSelector)
            handleFontSizeInputValue(textboxCls.fontColor, colorPicker)
        })

        bodyTextArea.addEventListener('click', (e)=>{
            e.stopPropagation()
        })

        document.addEventListener('click', () =>{
            this.activeTextBoxCls = ''
            handleTypographyIconBG(false, boldTextBtn)
            handleFontSizeInputValue(16, fontSizeInput)
            handleTypographyIconBG(false, italicTextBtn)
            handleTypographyIconBG(false, underlineTextBtn)
            handleFontFamily('Arial', fontSelector)
            handleFontSizeInputValue("#000000", colorPicker)
        })
        return textboxCls
    }

    changeFontWeight(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeTextFontWeight()
        }
    }

    changeFontSize(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeTextFontSize()
        }
    }

    changeFontStyle(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeTextFontStyle()
        }
    }

    changeFontDecor(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeTextFontDecor()
        }
    }

    changeTextFont(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeTextFont()
        }
    }

    changeFontColor(){
        if (this.activeTextBoxCls){
            this.activeTextBoxCls.changeFontColor()
        }
    }

    addImageToSlide(img_url){
        let imageDiv = new slideImage(this.newSlideDiv, img_url, this.imageList, this.imageList.length)
        this.imageList.push(imageDiv)
        this.updatePreviewWindow(this.newSlideDiv)

        return imageDiv
    }

    addLinkToSlide(linkText, linkUrl){
        let linkDiv = new slideLink(this.newSlideDiv, linkText, linkUrl, this.linkList, this.linkList.length)
        this.linkList.push(linkDiv)
        return linkDiv
    }

    addListToSlide(listType){
        let listDiv = new slideList(this.newSlideDiv, listType)
        this.listItemList.push(listDiv)
    }

    handleDragDrop(heading1, body1, body2){
        handleDrag(this.newSlideDiv, heading1)
        handleDrag(this.newSlideDiv, body1)
        handleDrag(this.newSlideDiv, body2)
    }

    getTypography(activeTextarea){
        let typography
        if (activeTextarea == this.headingTextArea){
            typography = this.headingTextAreaTypography
        }else if(activeTextarea = this.bodyTextArea){
            typography = this.bodyTextAreaTypography
        }
        else if(activeTextarea = this.body2TextArea){
            typography = this.body2TextAreaTypography
        }
        return typography
    }

    changeLayoutTextareaFontWeight(activeTextarea){
        
        let typography = this.getTypography(activeTextarea)
        
        if (typography['bold']){
            activeTextarea.style.fontWeight = 'normal'
            typography['bold'] = false
            handleTypographyIconBG(typography['bold'], boldTextBtn)
        }
        else{
            activeTextarea.style.fontWeight = 'bold'
            typography['bold'] = true
            handleTypographyIconBG(typography['bold'], boldTextBtn)
        }
    }

    changeLayoutTextareaFontSize(activeTextarea){

        let typography = this.getTypography(activeTextarea)
        let fontSizeVal = fontSizeInput.value
        
        if (fontSizeVal > 5 && fontSizeVal <= 96){
            typography['fontSize'] = fontSizeVal
            activeTextarea.style.fontSize = toPx(typography['fontSize'])
        }
        else if(fontSizeVal < 6){
            typography['fontSize'] = 6
            activeTextarea.style.fontSize = toPx(typography['fontSize'])
            handleFontSizeInputValue(typography['fontSize'], fontSizeInput)
        }else{
            typography['fontSize'] = 96
            activeTextarea.style.fontSize = toPx(typography['fontSize'])
            handleFontSizeInputValue(typography['fontSize'], fontSizeInput)
        }
    }
    changeLayoutTextareaFontStyle(activeTextarea){
        let typography = this.getTypography(activeTextarea)
        
        if (typography['italic']){
            activeTextarea.style.fontStyle = 'normal'
            typography['italic'] = false
            handleTypographyIconBG(typography['italic'], italicTextBtn)
        }
        else{
            activeTextarea.style.fontStyle = 'italic'
            typography['italic'] = true
            handleTypographyIconBG(typography['italic'], italicTextBtn)
        }
    }

    changeLayoutTextareaFontDecor(activeTextarea){
        
        let typography = this.getTypography(activeTextarea)
        
        if (typography['underline']){
            activeTextarea.style.textDecoration = 'none'
            typography['underline'] = false
            handleTypographyIconBG(typography['underline'], underlineTextBtn)
        }
        else{
            activeTextarea.style.textDecoration = 'underline'
            typography['underline'] = true
            handleTypographyIconBG(typography['underline'], underlineTextBtn)
        }
    }

    changeLayoutTextareaFont(activeTextarea){
        let typography = this.getTypography(activeTextarea)
        
        let selectedFont = fontSelector.value
        if(typography['fontFamily'] != selectedFont){
            activeTextarea.style.fontFamily = selectedFont
            typography['fontFamily'] = selectedFont
        }
    }

    changeLayoutTextareaFontColor(activeTextarea){
        let typography = this.getTypography(activeTextarea)
        
        let selectedFontColor = colorPicker.value
        if(typography['fontColor'] != selectedFontColor){
            activeTextarea.style.color = selectedFontColor
            typography['fontColor'] = selectedFontColor
        }
    }

    getSlideData(){
        let data = {
            'textbox' : [],
            'image' : [],
            'link': [],
            'list' : [],
            'layout' :{
                'active' : this.activeLayout,
                'headingDiv': {
                        'height': this.headingTextArea.offsetHeight,
                        'width': this.headingTextArea.offsetWidth,
                        'top': this.heading1.offsetTop,
                        'left': this.heading1.offsetLeft,
                        'content': this.headingTextArea.value,
                        'typography' : this.headingTextAreaTypography
                    },
                'body1Div': {
                        'height': this.bodyTextArea.offsetHeight,
                        'width': this.bodyTextArea.offsetWidth,
                        'top': this.body1.offsetTop,
                        'left': this.body1.offsetLeft,
                        'content': this.bodyTextArea.value,
                        'typography' : this.bodyTextAreaTypography
                    },
                'body2Div': {
                        'height': this.body2TextArea.offsetHeight,
                        'width': this.body2TextArea.offsetWidth,
                        'top': this.body2.offsetTop,
                        'left': this.body2.offsetLeft,
                        'content': this.body2TextArea.value,
                        'typography' : this.body2TextAreaTypography
                    }
            }
        }

        for (let textbox of this.textBoxList){
            data['textbox'].push(textbox.getData())
        }
        for (let img of this.imageList){
            data['image'].push(img.getData())
        }
        for (let link of this.linkList){
            data['link'].push(link.getData())
        }
        for (let list of this.listItemList){
            data['list'].push(list.getData())
        }

        return(data)
    }
}