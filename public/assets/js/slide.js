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
    }

    newSlide(){
        this.newSlide = document.createElement('div')
        this.newSlide.classList.add('content_section__main--slide', 'active')
        this.activeSlide = this.newSlide
        this.slides.push(this.newSlide)
        this.workspace.appendChild(this.newSlide)

        this.addSlideTOPreview(this.newSlide)
        defaultLayout(this.newSlide)
        
    }

    addSlideTOPreview(newSlide){
        const newPreview = document.createElement('div')
        newPreview.classList.add('slide_preview')
        this.previewWindow.appendChild(newPreview)

        const previewSN = document.createElement('div')
        previewSN.classList.add('preview_section__sn')
        previewSN.innerHTML = `${this.slides.length}`
        newPreview.appendChild(previewSN)

        const previewBox = document.createElement('div')
        previewBox.classList.add('preview_section__box')
        newPreview.append(previewBox)

        this.previewSectionWin = document.createElement('div')
        this.previewSectionWin.classList.add('preview_section__window')
        previewBox.appendChild(this.previewSectionWin)

        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = newSlide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)
    }

    updatePreviewWindow(slide) {
        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = slide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)

    }

    selectLayout(layout) {
        this.newSlide.innerHTML = ''
        layout(this.activeSlide)
        this.updatePreviewWindow(this.activeSlide)
    }
}


const slide1 = new slide(workspace, previewWindow)

const newSlideBtn = document.getElementById('new_slide--btn')
newSlideBtn.addEventListener('click', ()=>{
    let slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]
    slide1.newSlide()
    slidePlaceholder.style.display = 'none'
    
})