
class rightPanel{
    constructor(rightPanelDiv){
        this.rightPanelDiv = rightPanelDiv
        this.themePanel
        this.windowHeight = 85
        this.windowWidth = 100
        this.linkPanel
        this.rightPanelList = {}

        this.createThemePanel()
        this.createLinkPanel()
        this.createLayoutPanel()
        this.selectActiveRightPanel('themes')
    }

    selectActiveRightPanel(activePanel){
        console.log(activePanel)
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
            slide1.addLink(linkTextVal, linkUrlVal) 
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
}

let newRightPanel = new rightPanel(rigthPanelDiv)