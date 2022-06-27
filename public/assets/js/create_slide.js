
class CreateSlide{
    constructor(workspace, slideCls, previewWindow){
        this.newSlideDiv
        this.slideCls = slideCls
        this.workspace = workspace
        this.newPreview
        this.previewWindow = previewWindow
        this.previewSectionWin
        this.textBoxList = []
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
            'fontSize': 32,
            'fontFamily': 'Roboto',
            'underline': false
        }
        this.bodyTextAreaTypography = {
            'bold': false,
            'italic': false,
            'fontSize': 32,
            'fontFamily': 'Roboto',
            'underline': false
        }
        this.body2TextAreaTypography = {
            'bold': false,
            'italic': false,
            'fontSize': 32,
            'fontFamily': 'Roboto',
            'underline': false
        }
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

        this.handleDragDrop(this.heading1, this.body1, this.body2)
        handlecloseBtnDisplay(this.heading1, this.closeBtnHeading)
        handlecloseBtnDisplay(this.body1, this.closeBtnBody1)
        handlecloseBtnDisplay(this.body2, this.closeBtnBody2)

        defaultLayout(this.newSlideDiv, this.heading1, this.body1, this.body2)
        
        this.addSlideTOPreview(this.newSlideDiv)
        return this.newSlideDiv
    }

    addSlideTOPreview(newSlideDiv){
        this.newPreview = document.createElement('div')
        this.newPreview.classList.add('slide_preview')
        this.previewWindow.appendChild(this.newPreview)

        const previewSN = document.createElement('div')
        previewSN.classList.add('preview_section__sn')
        previewSN.innerHTML = `${this.slideCls.length+1}`
        this.newPreview.appendChild(previewSN)

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
        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = slide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)

    }

    selectLayout(layout) {
        // this.newSlideDiv.innerHTML = ''
        layout(this.newSlideDiv, this.heading1, this.body1, this.body2)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    changeSlideTheme(themeIdx){
        let themeClass = themeList[themeIdx]

        for (let theme of themeList){
            if (this.newSlideDiv.classList.contains(theme)){
                this.newSlideDiv.classList.remove(theme)
            }

        }

        this.newSlideDiv.classList.add(themeClass)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    removeDiv(){
        this.newSlideDiv.remove()
    }

    addTextBoxToSlide(){
        let textboxCls = new textBox(this.newSlideDiv)
        let bodyTextArea = textboxCls.create()
        this.updatePreviewWindow(this.newSlideDiv)

        bodyTextArea.addEventListener('focus', (e)=>{
            this.activeTextBoxCls = textboxCls
            handleTypographyIconBG(textboxCls.textBold, boldTextBtn)
            handleFontSizeInputValue(textboxCls.fontSize, fontSizeInput)
            handleTypographyIconBG(textboxCls.textItalic, italicTextBtn)
            handleTypographyIconBG(textboxCls.textUnderline, underlineTextBtn)
            handleFontFamily(textboxCls.textFont, fontSelector)
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
        })
        
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

    addImageToSlide(img_url){
        let imageDiv = new slideImage(this.newSlideDiv, img_url)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    addLinkToSlide(linkText, linkUrl){
        let linkDiv = new slideLink(this.newSlideDiv, linkText, linkUrl)
    }

    addListToSlide(listType){
        let listDiv = new slideList(this.newSlideDiv, listType)
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
            console.log('und')
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
}