
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
        this.activeLayoutTextarea
        this.activeThemeIdx = 0
    }

    newSlide(){
        slidePlaceholder.style.display = 'none'
        imageUploadNavBtn.style.display = 'block'
        addLinkDiv.style.display = 'block'
        addTextBoxDiv.style.display = 'block'

        let newSlidecls = new CreateSlide(this.workspace, this.slideCls, this.previewWindow, this.activeThemeIdx)
        this.newSlideDiv = newSlidecls.create()
        this.slideCls.push(newSlidecls)
        this.updatePreviewWindow = newSlidecls.updatePreviewWindow
        this.changeActiveSlide(newSlidecls)
        this.handleActiveSlideTextarea(newSlidecls)

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
            imageUploadNavBtn.style.display = 'none'
        }
    }

    selectTheme(themeIdx){
        if(!this.activeSlideCls){
            this.newSlide()
        }
        changeSlidesTheme(this.slideCls,this.activeThemeIdx, themeIdx)
        this.activeThemeIdx = themeIdx
    }

    addTextBox(){
        this.activeSlideCls.addTextBoxToSlide()
    }

    addImage(img_url){
        this.activeSlideCls.addImageToSlide(img_url)
    }

    addLink(linkText, linkUrl){
        this.activeSlideCls.addLinkToSlide(linkText, linkUrl)
    }

    addList(listType){
        this.activeSlideCls.addListToSlide(listType)
    }

    slideShow(){
        presentSlides(this.slideCls)
    }

    handleFontWeight(){
        if (this.activeLayoutTextarea){
            this.activeSlideCls.changeLayoutTextareaFontWeight(this.activeLayoutTextarea)
        }else{
            this.activeSlideCls.changeFontWeight()
        }
    }

    handleFontSize(){
        if (this.activeLayoutTextarea){
            this.activeSlideCls.changeLayoutTextareaFontSize(this.activeLayoutTextarea)
        }else{
            this.activeSlideCls.changeFontSize()
        }
    }
    
    handleFontStyle(){
        if (this.activeLayoutTextarea){
            this.activeSlideCls.changeLayoutTextareaFontStyle(this.activeLayoutTextarea)
        }else{
            this.activeSlideCls.changeFontStyle()
        }
    }

    handleFontDecor(){
        if (this.activeLayoutTextarea){
            this.activeSlideCls.changeLayoutTextareaFontDecor(this.activeLayoutTextarea)
        }else{
            this.activeSlideCls.changeFontDecor()
        }
    }

    handleTextFont(){
        if (this.activeLayoutTextarea){
            this.activeSlideCls.changeLayoutTextareaFont(this.activeLayoutTextarea)
        }else{
            this.activeSlideCls.changeTextFont()
        }
    }

    handleActiveSlideTextarea(newSlidecls){
        let headingTextarea = newSlidecls.headingTextArea 
        let bodyTextarea = newSlidecls.bodyTextArea
        let body2Textarea = newSlidecls.body2TextArea

        if (headingTextarea){
            headingTextarea.addEventListener('focus', (e)=>{
                this.activeLayoutTextarea = headingTextarea
                handleTypographyIconBG(newSlidecls.headingTextAreaTypography['bold'], boldTextBtn)
                handleFontSizeInputValue(newSlidecls.headingTextAreaTypography['fontSize'], fontSizeInput)
                handleTypographyIconBG(newSlidecls.headingTextAreaTypography['italic'], italicTextBtn)
                handleTypographyIconBG(newSlidecls.headingTextAreaTypography['underline'], underlineTextBtn)
                handleFontFamily(newSlidecls.headingTextAreaTypography['fontFamily'], fontSelector)
            })

            headingTextarea.addEventListener('click', (e)=>{
                e.stopPropagation()
            })
        }

        if (bodyTextarea){
            bodyTextarea.addEventListener('focus', (e)=>{
                this.activeLayoutTextarea = bodyTextarea
                handleTypographyIconBG(newSlidecls.bodyTextAreaTypography['bold'], boldTextBtn)
                handleFontSizeInputValue(newSlidecls.bodyTextAreaTypography['fontSize'], fontSizeInput)
                handleTypographyIconBG(newSlidecls.bodyTextAreaTypography['italic'], italicTextBtn)
                handleTypographyIconBG(newSlidecls.bodyTextAreaTypography['underline'], underlineTextBtn)
                handleFontFamily(newSlidecls.bodyTextAreaTypography['fontFamily'], fontSelector)
            })

            bodyTextarea.addEventListener('click', (e)=>{
                e.stopPropagation()
            })
        }

        if (body2Textarea){
            body2Textarea.addEventListener('focus', (e)=>{
                this.activeLayoutTextarea = body2Textarea
                handleTypographyIconBG(newSlidecls.body2TextAreaTypography['bold'], boldTextBtn)
                handleFontSizeInputValue(newSlidecls.body2TextAreaTypography['fontSize'], fontSizeInput)
                handleTypographyIconBG(newSlidecls.body2TextAreaTypography['italic'], italicTextBtn)
                handleTypographyIconBG(newSlidecls.body2TextAreaTypography['underline'], underlineTextBtn)
                handleFontFamily(newSlidecls.body2TextAreaTypography['fontFamily'], fontSelector)
            })
            body2Textarea.addEventListener('click', (e)=>{
                e.stopPropagation()
            })
        }

        document.addEventListener('click', () =>{
            this.activeLayoutTextarea = ''
            handleTypographyIconBG(false, boldTextBtn)
            handleFontSizeInputValue(16, fontSizeInput)
            handleTypographyIconBG(false, italicTextBtn)
            handleTypographyIconBG(false, underlineTextBtn)
            handleFontFamily('Arial', fontSelector)
        })
    }
    
    getSlidesData(){
        let slideData = []
        for (let slide of this.slideCls){
            slideData.push(slide.getSlideData())
        }

        let data ={
            'slideData' : slideData,
        }

        return data
    }

}


const slide1 = new slide(workspace, previewWindow)