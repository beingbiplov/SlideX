
class textBox{
    constructor(slide){
        this.slide = slide
        this.textboxDiv
        this.contextMenu
        this.contextMenuItem
        this.bodyTextArea,
        this.bodyCloseBtn
        this.textBold = false
        this.textItalic = false
        this.textUnderline = false
        this.fontSize = 32
        this.textFont = 'Roboto'
    }

    create(){
        [this.textboxDiv, this.bodyTextArea, this.bodyCloseBtn] = createTextBox(this.slide)
        
        handlecloseBtnDisplay(this.textboxDiv, this.bodyCloseBtn)

        this.handleTextAreaDrag()
        // this.handleTypography()
        return this.bodyTextArea
    }

    handleTextAreaDrag(){
        handleDrag(this.slide, this.textboxDiv)
    }

    changeTextFontWeight(){
        if (this.textBold){
            this.bodyTextArea.style.fontWeight = 'normal'
            this.textBold = false
            handleTypographyIconBG(this.textBold, boldTextBtn)
        }
        else{
            this.bodyTextArea.style.fontWeight = 'bold'
            this.textBold = true
            handleTypographyIconBG(this.textBold, boldTextBtn)
        }
    }

    changeTextFontSize(){
        let fontSizeVal = fontSizeInput.value
        if (fontSizeVal > 5 && fontSizeVal <= 96){
            this.fontSize = fontSizeVal
            this.bodyTextArea.style.fontSize = toPx(this.fontSize)
        }
        else if(fontSizeVal < 6){
            this.fontSize = 6
            this.bodyTextArea.style.fontSize = toPx(this.fontSize)
            handleFontSizeInputValue(this.fontSize, fontSizeInput)
        }else{
            this.fontSize = 96
            this.bodyTextArea.style.fontSize = toPx(this.fontSize)
            handleFontSizeInputValue(this.fontSize, fontSizeInput)
        }
    }
    changeTextFontStyle(){
        if (this.textItalic){
            this.bodyTextArea.style.fontStyle = 'normal'
            this.textItalic = false
            handleTypographyIconBG(this.textItalic, italicTextBtn)
        }
        else{
            this.bodyTextArea.style.fontStyle = "italic"
            this.textItalic = true
            handleTypographyIconBG(this.textItalic, italicTextBtn)
        }
    }

    changeTextFontDecor(){
        if (this.textUnderline){
            this.bodyTextArea.style.textDecoration = 'normal'
            this.textUnderline = false
            handleTypographyIconBG(this.textUnderline, underlineTextBtn)
        }
        else{
            this.bodyTextArea.style.textDecoration = "underline"
            this.textUnderline = true
            handleTypographyIconBG(this.textUnderline, underlineTextBtn)
        }
    }

    changeTextFont(){
        let selectedFont = fontSelector.value
        if(this.textFont != selectedFont){
            this.bodyTextArea.style.fontFamily = selectedFont
            this.textFont = selectedFont
        }
    }
}