
class slideLink{
    constructor(slide, urlText, urlLink){
        this.slide = slide
        this.linkDiv
        this.urlLink = urlLink
        this.urlText = urlText
        this.linkCloseBtnDiv
        this.bodyPosition = {
            'top' : getRandomInt(10,30),
            'left': getRandomInt(10,100)
        }

        this.create()
    }

    create(){
        [this.linkDiv, this.linkCloseBtnDiv] = createlinkDiv(this.slide,this.urlText, this.urlLink)
        
        this.linkDiv.style.top = toPx(this.bodyPosition['top'])
        this.linkDiv.style.left = toPx(this.bodyPosition['left'])

        handlecloseBtnDisplay(this.linkDiv, this.linkCloseBtnDiv)
        this.handleLinkDrag()
        this.getData()
        return this.linkDiv
    }

    handleLinkDrag(){
        handleDrag(this.slide, this.linkDiv, this.bodyPosition)
    }

    getData(){
        let position = this.bodyPosition
        let data = {
            'position' :position,
            'urlLink': this.urlLink,
            'urlText' : this.urlText,
            'dimension': {
                'height' : this.linkDiv.offsetHeight,
                'width' : this.linkDiv.offsetWidth
            }
        }
        return(data)
    }
}