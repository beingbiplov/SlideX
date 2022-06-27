
class slideList{
    constructor(slide, listType){
        this.slide = slide
        this.listBoxDIv,
        this.listCloseBtn
        this.listType = listType
        this.listItemDiv
        this.bodyPosition = {
            'top' :getRandomInt(5,30),
            'left': getRandomInt(10,50)
        }
        this.listContent

        this.create()
    }

    create(){
        [this.listBoxDIv, this.listCloseBtn, this.listItemDiv] = createListBox(this.slide, this.listType)

        this.listBoxDIv.style.top = toPx(this.bodyPosition['top'])
        this.listBoxDIv.style.left = toPx(this.bodyPosition['left'])
        
        handlecloseBtnDisplay(this.listBoxDIv, this.listCloseBtn)

        this.listItemDiv.addEventListener('input', function(){
            this.listContent = this.listItemDiv.innerText
        }.bind(this))

        this.handleTextAreaDrag()
        return this.listBoxDIv
    }

    handleTextAreaDrag(){
        handleDrag(this.slide, this.listBoxDIv, this.bodyPosition)
    }

    getData(){
        let position = this.bodyPosition
        let data = {
            'position' :position,
            'content' : this.textAreaContent,
            'dimension': {
                'height' : this.listBoxDIv.offsetHeight,
                'width' : this.listBoxDIv.offsetWidth
            }
        }
        return(data)
    }
}