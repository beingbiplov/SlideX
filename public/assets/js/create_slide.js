
class CreateSlide{
    constructor(workspace, slideCls, previewWindow){
        this.newSlideDiv
        this.slideCls = slideCls
        this.workspace = workspace
        this.newPreview
        this.previewWindow = previewWindow
        this.previewSectionWin
        this.textBoxList = []
        this.heading1
        this.body1
        this.body2
        this.closeBtnHeading
        this.closeBtnBody1
        this.closeBtnBody2
    }

    create(){
        this.newSlideDiv = document.createElement('div')
        this.newSlideDiv.classList.add('content_section__main--slide', 'active')
        this.workspace.appendChild(this.newSlideDiv)

        let createdLayouts = createLayoutStructure(this.newSlideDiv)
        this.heading1 = createdLayouts[0]
        this.body1 = createdLayouts[1]
        this.body2 = createdLayouts[2]
        this.closeBtnHeading = createdLayouts[3]
        this.closeBtnBody1 = createdLayouts[4]
        this.closeBtnBody2 = createdLayouts[5]

        this.handleDragDrop(this.heading1, this.body1, this.body2)
        handlecloseBtnDisplay(this.heading1, this.closeBtnHeading)
        handlecloseBtnDisplay(this.body1, this.closeBtnBody1)
        handlecloseBtnDisplay(this.body2, this.closeBtnBody2)

        defaultLayout(this.newSlideDiv, this.heading1, this.body1, this.body2)
        
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
        layout(this.newSlideDiv, this.heading1, this.body1, this.body2)
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
        let textboxCls = new textBox(this.newSlideDiv)
        let textboxDiv = textboxCls.create()
        this.updatePreviewWindow(this.newSlideDiv)
    }

    addImageToSlide(img_url){
        let imageDiv = new slideImage(this.newSlideDiv, img_url)
        this.updatePreviewWindow(this.newSlideDiv)
    }

    addLinkToSlide(linkText, linkUrl){
        let linkDiv = new slideLink(this.newSlideDiv, linkText, linkUrl)
    }

    addListToSlide(listType){
        let listDiv = new slideList(this.newSlideDiv, listType)
    }

    handleDragDrop(heading1, body1, body2){
        handleDrag(this.newSlideDiv, heading1)
        handleDrag(this.newSlideDiv, body1)
        handleDrag(this.newSlideDiv, body2)
    }
}