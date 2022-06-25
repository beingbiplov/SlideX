
class slideLink{
    constructor(slide, urlText, urlLink){
        this.slide = slide
        this.linkDiv
        this.urlLink = urlLink
        this.urlText = urlText
        this.linkCloseBtnDiv
        this.create()
    }

    create(){
        [this.linkDiv, this.linkCloseBtnDiv] = createlinkDiv(this.slide,this.urlText, this.urlLink)
        
        handlecloseBtnDisplay(this.linkDiv, this.linkCloseBtnDiv)
        this.handleLinkDrag()
        return this.linkDiv
    }

    handleLinkDrag(){
        handleDrag(this.slide, this.linkDiv)
    }
}