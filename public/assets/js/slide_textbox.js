
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
        this.bodyPosition = {
            'top' :getRandomInt(200,300),
            'left': getRandomInt(10,50)
        }
        this.textAreaContent
    }

    create(){
        [this.textboxDiv, this.bodyTextArea, this.bodyCloseBtn] = createTextBox(this.slide)

        this.textboxDiv.style.top = toPx(this.bodyPosition['top'])
        this.textboxDiv.style.left = toPx(this.bodyPosition['left'])
        
        handlecloseBtnDisplay(this.textboxDiv, this.bodyCloseBtn)

        this.bodyTextArea.addEventListener('change', function(){
            this.textAreaContent = this.bodyTextArea.value
        }.bind(this))

        this.handleTextAreaDrag()
        // this.handleTypography()
        return this.bodyTextArea
    }

    handleTextAreaDrag(){
       handleDrag(this.slide, this.textboxDiv, this.bodyPosition)
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
            this.bodyTextArea.style.textDecoration = 'none'
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

    getData(){
        let position = this.bodyPosition
        let data = {
            'typography' : {
                'bold': this.textBold,
                'italic': this.textItalic,
                'fontSize': this.fontSize,
                'fontFamily': this.textFont,
                'underline': this.textUnderline
            },
            'position' :position,
            'content' : this.textAreaContent,
            'dimension': {
                'height' : this.textboxDiv.offsetHeight,
                'width' : this.textboxDiv.offsetWidth
            }
        }
        return(data)
    }
}