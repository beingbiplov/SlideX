
class CreateSlide{
    constructor(workspace, slideCls, previewWindow){
        this.newSlideDiv
        this.slideCls = slideCls
        this.workspace = workspace
        this.newPreview
        this.previewWindow = previewWindow
        this.previewSectionWin
    }

    create(){
        this.newSlideDiv = document.createElement('div')
        this.newSlideDiv.classList.add('content_section__main--slide', 'active')
        this.workspace.appendChild(this.newSlideDiv)

        defaultLayout(this.newSlideDiv)
        this.addSlideTOPreview(this.newSlideDiv)
        return this.newSlideDiv
    }

    addSlideTOPreview(newSlideDiv){
        this.newPreview = document.createElement('div')
        this.newPreview.classList.add('slide_preview')
        this.previewWindow.appendChild(this.newPreview)

        const previewSN = document.createElement('div')
        previewSN.classList.add('preview_section__sn')
        previewSN.innerHTML = `${this.slideCls.length+1}`
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

    removePreview() {
        this.newPreview.remove()        
    }

    updatePreviewWindow(slide) {
        this.previewSectionWin.innerHTML = ''
        this.newSLideClone = slide.cloneNode(true)
        this.newSLideClone.classList.add('preview_section__window--slide')
        this.previewSectionWin.appendChild(this.newSLideClone)

    }

    selectLayout(layout) {
        // this.newSlideDiv.innerHTML = ''
        layout(this.newSlideDiv)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    changeSlideTheme(themeIdx){
        let themeClass = themeList[themeIdx]

        for (let theme of themeList){
            if (this.newSlideDiv.classList.contains(theme)){
                this.newSlideDiv.classList.remove(theme)
            }

        }

        this.newSlideDiv.classList.add(themeClass)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    removeDiv(){
        this.newSlideDiv.remove()
    }

    addTextBoxToSlide(){
        createTextBox(this.newSlideDiv)
        this.updatePreviewWindow(this.newSlideDiv)
    }

}