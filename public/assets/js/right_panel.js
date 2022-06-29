
class rightPanel{
    constructor(rightPanelDiv){
        this.rightPanelDiv = rightPanelDiv
        this.themePanel
        this.windowHeight = 85
        this.windowWidth = 100
        this.linkPanel
        this.speakerNotePanel
        this.sNotesTextArea
        this.transitionPanel
        this.transitionSelect
        this.rightPanelList = {}

        this.createThemePanel()
        this.createLinkPanel()
        this.createLayoutPanel()
        this.createSpeakerNotePanel()
        this.rightTransitionPanel()
        this.selectActiveRightPanel('themes')
    }

    selectActiveRightPanel(activePanel){
        for(let panel in this.rightPanelList){
            if (panel == activePanel){
                this.rightPanelList[panel].style.display = 'block'
            }
            else{
                this.rightPanelList[panel].style.display = 'none'
            }
        }

    }

    createThemePanel() {
        this.themePanel = document.createElement('div')
        this.themePanel.style.width = '100%'
        this.rightPanelDiv.appendChild(this.themePanel)

        let themeHeading = document.createElement('div')
        themeHeading.classList.add('theme_sec_heading')
        themeHeading.innerText = 'Themes'
        this.themePanel.appendChild(themeHeading)

        for (let theme of themeList){
            let themeDiv = document.createElement('div')
            themeDiv.classList.add('themeBox')
            this.themePanel.appendChild(themeDiv)

            let themePreviewWindow = document.createElement('div')
            themePreviewWindow.classList.add('theme_preview_window',theme)

            themeDiv.appendChild(themePreviewWindow)

            themeDiv.addEventListener('click', function(){
                slide1.selectTheme(themeList.indexOf(theme))
            }.bind(this))
        }

        this.rightPanelList['themes'] = this.themePanel
    }

    createLinkPanel(){
        this.linkPanel = document.createElement('div')
        this.linkPanel.style = '100%'
        this.rightPanelDiv.appendChild(this.linkPanel)

        let linkPanelHeading = document.createElement('div')
        linkPanelHeading.classList.add('theme_sec_heading')
        linkPanelHeading.innerText = 'Add Link'
        this.linkPanel.appendChild(linkPanelHeading)

        const inputDiv = document.createElement('div')
        inputDiv.classList.add('linkpanel_inputdiv')
        this.linkPanel.appendChild(inputDiv)

        let linkText = document.createElement('input')
        linkText.classList.add('linkpanel_input')
        linkText.setAttribute('type', 'text')
        linkText.placeholder = 'Link Text'
        inputDiv.appendChild(linkText)

        let linkUrl = document.createElement('input')
        linkUrl.classList.add('linkpanel_input')
        linkUrl.setAttribute('type', 'url')
        linkUrl.placeholder = 'Link URL'
        inputDiv.appendChild(linkUrl)

        let linkPanelBtn = document.createElement('a')
        linkPanelBtn.innerText = 'Add'
        linkPanelBtn.classList.add('linkpanel_btn', 'btn')
        this.linkPanel.appendChild(linkPanelBtn)

        linkPanelBtn.addEventListener('click', function(){
            let linkTextVal = linkText.value
            let linkUrlVal = linkUrl.value
            linkText.value = ''
            linkUrl.value = ''
            if (slide1.activeSlideCls){
                slide1.addLink(linkTextVal, linkUrlVal)
            } 
        }.bind(this))
        this.rightPanelList['link'] = this.linkPanel
    }

    createLayoutPanel() {
        this.layoutPanel = document.createElement('div')
        this.layoutPanel.style.width = '100%'
        this.rightPanelDiv.appendChild(this.layoutPanel)

        let layoutHeading = document.createElement('div')
        layoutHeading.classList.add('theme_sec_heading')
        layoutHeading.innerText = 'Layouts'
        this.layoutPanel.appendChild(layoutHeading)

        for (let layout in layoutSS){
            let layoutDiv = document.createElement('div')
            layoutDiv.classList.add('layout_box')
            this.layoutPanel.appendChild(layoutDiv)

            let layoutPreviewWindow = document.createElement('div')
            layoutPreviewWindow.classList.add('layout_preview_window')
            layoutDiv.appendChild(layoutPreviewWindow)

            layoutPreviewWindow.style.backgroundImage = `url(./assets/images/layouts/${layout})`
            layoutPreviewWindow.style.backgroundRepeat = 'no-repeat'
            layoutPreviewWindow.style.backgroundSize = 'contain'

            layoutDiv.addEventListener('click', function(){
                slide1.selectLayout(layoutSS[layout])
            }.bind(this))
        }

        this.rightPanelList['layout'] = this.layoutPanel
    }

    createSpeakerNotePanel(){
        let height = '35'

        this.speakerNotePanel = document.createElement('div')
        this.speakerNotePanel.style.width = '80%'
        this.speakerNotePanel.style.height = '100%'
        this.speakerNotePanel.style.margin = '0 auto'
        this.rightPanelDiv.appendChild(this.speakerNotePanel)

        let speakerNoteHeading = document.createElement('div')
        speakerNoteHeading.classList.add('theme_sec_heading')
        speakerNoteHeading.innerText = 'Notes'
        this.speakerNotePanel.appendChild(speakerNoteHeading)

        const bodyDiv = document.createElement('div')
        bodyDiv.style.boxSizing = 'border-box'
        bodyDiv.style.display = 'inline-block'
        bodyDiv.style.width = '100%'
        bodyDiv.style.height = '70%'
        bodyDiv.style.maxHeight = '80%'

        this.speakerNotePanel.appendChild(bodyDiv)

        this.sNotesTextArea = document.createElement('textarea')
        this.sNotesTextArea.style.height = toPer('100')
        this.sNotesTextArea.style.width = `100%`
        this.sNotesTextArea.style.height = '100%'
        this.sNotesTextArea.classList.add('textareaBody')
        this.sNotesTextArea.setAttribute('placeholder', 'Notes')
        this.sNotesTextArea.style.resize = 'none'
        this.sNotesTextArea.style.backgroundColor = '#e7f2fd'
        this.sNotesTextArea.style.fontSize = '1.2em'

        this.sNotesTextArea.addEventListener('change', function(){
            if (slide1.activeSlideCls){
                slide1.activeSlideCls.slideNotes = this.sNotesTextArea.value
            }
        }.bind(this))

        bodyDiv.appendChild(this.sNotesTextArea)
        
        this.rightPanelList['speakerNote'] = this.speakerNotePanel
    }

    rightTransitionPanel(){
        this.transitionPanel = document.createElement('div')
        this.transitionPanel.style.width = '100%'
        this.rightPanelDiv.appendChild(this.transitionPanel)

        let layoutHeading = document.createElement('div')
        layoutHeading.classList.add('theme_sec_heading')
        layoutHeading.innerText = 'Transitions'
        this.transitionPanel.appendChild(layoutHeading)

        this.transitionSelect = document.createElement('select')
        this.transitionSelect.id = 'slide_transition'
        this.transitionSelect.setAttribute('name', 'transitions')
        this.rightPanelDiv.appendChild(this.transitionSelect)
        
        for (let transition of transitionList){
            let transitionOption = document.createElement('option')
            transitionOption.value = transition
            transitionOption.innerHTML = transition
            this.transitionSelect.appendChild(transitionOption)
        }

        this.transitionSelect.addEventListener('change', function(){
            if (slide1.activeSlideCls){
                slide1.transition = this.transitionSelect.value
            }
        }.bind(this))

        this.rightPanelList['transition'] = this.transitionPanel
    }
}

let newRightPanel = new rightPanel(rigthPanelDiv)