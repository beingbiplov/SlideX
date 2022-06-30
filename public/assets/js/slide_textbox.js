
class textBox{
    constructor(slide, textBoxList, textBoxIdx){
        this.slide = slide
        this.textBoxList = textBoxList
        this.textBoxIdx = textBoxIdx
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
        this.fontColor = "#000000"
        this.bgColor = "#00FFFFFF"
        this.textRightAlign = false
        this.textLeftAlign = false
        this.textCenterAlign = false
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
        
        handlecloseBtnDisplay(this.textboxDiv, this.bodyCloseBtn, this.textBoxList, this.textBoxIdx)

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

    changeFontColor(){
        let fontColorVal = colorPicker.value
        this.bodyTextArea.style.color = fontColorVal
        this.fontColor = fontColorVal
        handleFontSizeInputValue(this.fontColor, colorPicker)
    }

    changeBGColor(){
        let bgColorVal = bgColorPicker.value
        this.bodyTextArea.style.backgroundColor = bgColorVal
        this.bgColor = bgColorVal
        handleFontSizeInputValue(this.bgColor, bgColorPicker)
    }

    changeTextRightAlign(){
        if (this.textRightAlign){
            this.bodyTextArea.style.textAlign = 'left'
            this.textRightAlign = false
            handleTypographyIconBG(this.textRightAlign, alignTextRightBtn)
        }
        else{
            this.bodyTextArea.style.textAlign = 'right'
            this.textRightAlign = true
            this.textLeftAlign = false
            this.textCenterAlign = false
            handleTypographyIconBG(this.textRightAlign, alignTextRightBtn)
            handleTypographyIconBG(this.textLeftAlign, alignTextLeftBtn)
            handleTypographyIconBG(this.textCenterAlign, alignTextCenterBtn)
        }
    }

    changeTextLeftAlign(){
        if (this.textLeftAlign){
            this.bodyTextArea.style.textAlign = 'left'
            this.textLeftAlign = true
            handleTypographyIconBG(this.textLeftAlign, alignTextLeftBtn)
        }
        else{
            this.bodyTextArea.style.textAlign = 'left'
            this.textLeftAlign = true
            this.textRightAlign = false
            this.textCenterAlign = false
            handleTypographyIconBG(this.textRightAlign, alignTextRightBtn)
            handleTypographyIconBG(this.textLeftAlign, alignTextLeftBtn)
            handleTypographyIconBG(this.textCenterAlign, alignTextCenterBtn)
        }
    }

    changeTextCenterAlign(){
        if (this.textCenterAlign){
            this.bodyTextArea.style.textAlign = 'left'
            this.textCenterAlign = false
            handleTypographyIconBG(this.textCenterAlign, alignTextCenterBtn)
        }
        else{
            this.bodyTextArea.style.textAlign = 'center'
            this.textCenterAlign = true
            this.textLeftAlign = false
            this.textRightAlign = false
            handleTypographyIconBG(this.textRightAlign, alignTextRightBtn)
            handleTypographyIconBG(this.textLeftAlign, alignTextLeftBtn)
            handleTypographyIconBG(this.textCenterAlign, alignTextCenterBtn)
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
                'underline': this.textUnderline,
                'fontColor' : this.fontColor,
                'bgColor': this.bgColor,
                'textRightAlign': this.textRightAlign,
                'textLeftAlign': this.textLeftAlign,
                'textCenterAlign': this.textCenterAlign,
            },
            'position' :this.bodyPosition,
            'content' : this.bodyTextArea.value,
            'dimension': {
                'height' : this.bodyTextArea.offsetHeight,
                'width' : this.bodyTextArea.offsetWidth
            }
        }
        return(data)
    }
}