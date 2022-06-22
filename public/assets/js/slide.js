const workspace = document.getElementById('workspace')
const previewWindow = document.getElementById('preview_window')

class slide{
    constructor(workspace, previewWindow){
        this.workspace = workspace
        this.previewWindow = previewWindow
        this.slides = []
        this.activeSlide
        this.newSLideClone
        this.previewSectionWin
        this.newSlideDiv
        this.newPreview
    }

    newSlide(){
        this.newSlideDiv = document.createElement('div')
        this.newSlideDiv.classList.add('content_section__main--slide', 'active')
        this.activeSlide = this.newSlideDiv
        this.slides.push(this.newSlideDiv)
        this.workspace.appendChild(this.newSlideDiv)

        this.addSlideTOPreview(this.newSlideDiv)
        defaultLayout(this.newSlideDiv)
        this.updatePreviewWindow(this.newSlideDiv)
        
    }

    addSlideTOPreview(newSlideDiv){
        this.newPreview = document.createElement('div')
        this.newPreview.classList.add('slide_preview')
        this.previewWindow.appendChild(this.newPreview)

        const previewSN = document.createElement('div')
        previewSN.classList.add('preview_section__sn')
        previewSN.innerHTML = `${this.slides.length}`
        this.newPreview.appendChild(previewSN)

        const previewBox = document.createElement('div')
        previewBox.classList.add('preview_section__box')
        this.newPreview.append(previewBox)

        this.previewSectionWin = document.createElement('div')
        this.previewSectionWin.classList.add('preview_section__window')
        previewBox.appendChild(this.previewSectionWin)

        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = newSlideDiv.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)
    }

    updatePreviewWindow(slide) {
        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = slide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)

    }

    removePreviewWindow(){
        this.newPreview.remove()
    }

    selectLayout(layout) {
        this.newSlideDiv.innerHTML = ''
        layout(this.activeSlide)
        this.updatePreviewWindow(this.activeSlide)
    }

    removeSlide(){
        this.activeSlide.remove()
        this.removePreviewWindow()
        // remove form slides list 
        const index = this.slides.indexOf(this.activeSlide);
        if (index > -1) {
            this.slides.splice(index, 1); 
        }
        if (index >= this.slides.length - 1){
            this.activeSlide = this.slides[index-1]
        }
        else if (index <= 0){
            this.activeSlide = null
        }
        else{
            this.activeSlide = this.slides[index + 1]
        }
        console.log(this.slides)
        if (this.slides.length <= 0){
            slidePlaceholder.style.display = 'flex'
        }
    }
}


const slide1 = new slide(workspace, previewWindow)
let slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]

const newSlideBtn = document.getElementById('new_slide--btn')
newSlideBtn.addEventListener('click', ()=>{
    
    slide1.newSlide()
    slidePlaceholder.style.display = 'none'
    
})