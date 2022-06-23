const workspace = document.getElementById('workspace')
const previewWindow = document.getElementById('preview_window')
const slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]

class slide{
    constructor(workspace, previewWindow){
        this.workspace = workspace
        this.previewWindow = previewWindow
        this.newSLideClone
        this.previewSectionWin
        this.newSlideDiv
        this.newPreview
        this.slideCls = []
        this.activeSlideCls
    }

    newSlide(){
        slidePlaceholder.style.display = 'none'

        let newSlidecls = new CreateSlide(this.workspace, this.slideCls, this.previewWindow)
        this.newSlideDiv = newSlidecls.create()
        this.slideCls.push(newSlidecls)
        this.updatePreviewWindow = newSlidecls.updatePreviewWindow
        this.changeActiveSlide(newSlidecls)

        newSlidecls.newPreview.addEventListener('click', function (){
            this.changeActiveSlide(newSlidecls)
        }.bind(this))
        
    }

    changeActiveSlide(slideCls){
        if (!this.activeSlideCls){
            this.activeSlideCls = slideCls
            this.activeSlideCls.newSlideDiv.style.display = 'block'
        }
        else{
            this.activeSlideCls.newSlideDiv.style.display = 'none'
            this.activeSlideCls = slideCls
            this.activeSlideCls.newSlideDiv.style.display = 'block'
        }
    }

    removePreviewWindow(){
        this.activeSlideCls.removePreview()
        
    }

    selectLayout(layout) {
        if(!this.activeSlideCls){
            this.newSlide()
        }
        this.activeSlideCls.selectLayout(layout)
    }

    removeSlide(){
        this.activeSlideCls.removeDiv()
        this.removePreviewWindow() 
        
        // remove form slides list 
        const index = this.slideCls.indexOf(this.activeSlideCls);
        
        if (index >= this.slideCls.length - 1 && this.slideCls.length > 1){
            this.changeActiveSlide(this.slideCls[index-1])
        }
        else if (index <= 0 && this.slideCls.length <= 1){
            this.activeSlideCls = null
        }
        else{
            this.changeActiveSlide(this.slideCls[index + 1])
        }
        if (index > -1) {
            this.slideCls.splice(index, 1); 
        }
        
        if (this.slideCls.length <= 0){
            slidePlaceholder.style.display = 'flex'
        }
    }
}


const slide1 = new slide(workspace, previewWindow)