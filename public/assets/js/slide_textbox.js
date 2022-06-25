
class textBox{
    constructor(slide){
        this.slide = slide
        this.textboxDiv
        this.contextMenu
        this.contextMenuItem
        this.bodyTextArea,
        this.bodyCloseBtn
    }

    create(){
        [this.textboxDiv, this.bodyTextArea, this.bodyCloseBtn] = createTextBox(this.slide)
        
        handlecloseBtnDisplay(this.textboxDiv, this.bodyCloseBtn)

        this.handleTextAreaDrag()
        return this.textboxDiv
    }

    handleTextAreaDrag(){
        handleDrag(this.slide, this.textboxDiv)
    }
}