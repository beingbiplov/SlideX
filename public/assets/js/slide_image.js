
class slideImage{
    constructor(slide, imgUrl){
        this.slide = slide
        this.imageDiv
        this.imgUrl = imgUrl
        this.imageDivImg
        this.imgCloseBtn
        this.imageInnerDiv
        this.create()
    }

    create(){
        [this.imageDiv, this.imageDivImg, this.imageInnerDiv, this.imgCloseBtn] = createImageDiv(this.slide, this.imgUrl)
        
        handlecloseBtnDisplay(this.imageDiv, this.imgCloseBtn)
        
        this.handleImageDrag()
        return this.imageDiv
    }

    handleImageDrag(){
        handleDrag(this.slide, this.imageDiv)
    }
}