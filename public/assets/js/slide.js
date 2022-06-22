const workspace = document.getElementById('workspace')
const previewWindow = document.getElementById('preview_window')

class slide{
    constructor(workspace, previewWindow){
        this.workspace = workspace
        this.previewWindow = previewWindow
        this.slides = []
        this.activeSlide
    }

    newSlide(){
        let newSlide = document.createElement('div')
        newSlide.classList.add('content_section__main--slide', 'active')
        this.activeSlide = newSlide
        this.slides.push(newSlide)
        this.workspace.appendChild(newSlide)

        this.addSlideTOPreview(newSlide)
        
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

        const previewSectionWin = document.createElement('div')
        previewSectionWin.classList.add('preview_section__window')
        previewBox.appendChild(previewSectionWin)

        previewSectionWin.innerHTML = ''
        let newSLideClone = newSlide.cloneNode(true)
        newSLideClone.classList.add('preview_section__window--slide')
        previewSectionWin.appendChild(newSLideClone)


    }
}

const slide1 = new slide(workspace, previewWindow)

const newSlideBtn = document.getElementById('new_slide--btn')
newSlideBtn.addEventListener('click', ()=>{
    let slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]
    slide1.newSlide()
    slidePlaceholder.style.display = 'none'
    
})