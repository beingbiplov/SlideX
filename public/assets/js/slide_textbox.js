
class textBox{
    constructor(slide){
        this.slide = slide
        this.textboxDiv
        this.contextMenu
        this.contextMenuItem
        this.bodyTextArea
    }

    create(){
        [this.textboxDiv, this.bodyTextArea] = createTextBox(this.slide)
        
        this.textboxDiv.addEventListener('keydown', function(event) {
            if (event.key == 'Delete') {
                if (this.bodyTextArea == document.activeElement){
                    this.textboxDiv.remove()
                }
            }
        }.bind(this));
        return this.textboxDiv
    }
}