
class slideLink{
    constructor(slide, urlText, urlLink){
        this.slide = slide
        this.linkDiv
        this.urlLink = urlLink
        this.urlText = urlText
        this.focusedLink
        this.create()
    }

    create(){
        console.log(this.slide,this.urlText, this.urlLink)
        this.linkDiv = createlinkDiv(this.slide,this.urlText, this.urlLink)
        
        this.linkEventListeners()
        
        this.handleLinkDrag()
        return this.linkDiv
    }

    linkEventListeners(){
        this.linkDiv.addEventListener('mouseover', function(){
            this.focusedLink = this.linkDiv
        }.bind(this))

        this.linkDiv.addEventListener('mouseout', function(){
            this.focusedLink = ''
        }.bind(this))

        workspace.addEventListener('keydown', function(event) {
            if (event.key == 'Delete' && this.focusedLink == this.linkDiv) {
                this.linkDiv.remove()
            }
        }.bind(this));
    }

    handleLinkDrag(){
        handleDrag(this.slide, this.linkDiv)
    }
}