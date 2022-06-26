
class slideList{
    constructor(slide, listType){
        this.slide = slide
        this.listBoxDIv,
        this.listCloseBtn
        this.listType = listType

        this.create()
    }

    create(){
        [this.listBoxDIv, this.listCloseBtn] = createListBox(this.slide, this.listType)
        
        handlecloseBtnDisplay(this.listBoxDIv, this.listCloseBtn)

        this.handleTextAreaDrag()
        return this.listBoxDIv
    }

    handleTextAreaDrag(){
        handleDrag(this.slide, this.listBoxDIv)
    }
}