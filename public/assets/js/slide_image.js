
class slideImage{
    constructor(slide, imgUrl){
        this.slide = slide
        this.imageDiv
        this.imgUrl = imgUrl
        this.focusedImg
        this.create()
    }

    create(){
        console.log('ajhsd')
        this.imageDiv = createImageDiv(this.slide, this.imgUrl)
        
        this.imgEventListeners()
        
        this.handleImageDrag()
        return this.imageDiv
    }

    imgEventListeners(){
        this.imageDiv.addEventListener('mouseover', function(){
            this.focusedImg = this.imageDiv
        }.bind(this))

        this.imageDiv.addEventListener('mouseout', function(){
            this.focusedImg = ''
        }.bind(this))

        workspace.addEventListener('keydown', function(event) {
            if (event.key == 'Delete' && this.focusedImg == this.imageDiv) {
                this.imageDiv.remove()
            }
        }.bind(this));
    }

    handleImageDrag(){
        handleDrag(this.slide, this.imageDiv)
    }
}