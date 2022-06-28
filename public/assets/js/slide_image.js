
class slideImage{
    constructor(slide, imgUrl, imageList, listIdx){
        this.slide = slide
        this.imageDiv
        this.imgUrl = imgUrl
        this.imageList = imageList
        this.listIdx = listIdx
        this.imageDivImg
        this.imgCloseBtn
        this.imageInnerDiv
        this.bodyPosition = {
            'top' : getRandomInt(10,30),
            'left': getRandomInt(10,100)
        }

        this.create()
    }

    create(){
        [this.imageDiv, this.imageDivImg, this.imageInnerDiv, this.imgCloseBtn] = createImageDiv(this.slide, this.imgUrl)
        
        this.imageDiv.style.top = toPx(this.bodyPosition['top'])
        this.imageDiv.style.left = toPx(this.bodyPosition['left'])

        handlecloseBtnDisplay(this.imageDiv, this.imgCloseBtn, this.imageList, this.listIdx)
        this.getData()
        this.handleImageDrag()
        return this.imageDiv
    }

    handleImageDrag(){
        handleDrag(this.slide, this.imageDiv, this.bodyPosition)
    }

    getData(){
        let position = this.bodyPosition
        let data = {
            'position' :position,
            'imgURL': this.imgUrl,
            'dimension': {
                'height' : this.imageInnerDiv.offsetHeight,
                'width' : this.imageInnerDiv.offsetWidth
            }
        }
        return(data)
    }
}