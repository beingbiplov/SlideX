
class rightPanel{
    constructor(rightPanelDiv){
        this.rightPanelDiv = rightPanelDiv
        this.themePanel
        this.windowHeight = 85
        this.windowWidth = 100

        this.createThemePanel()

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
    }

}

let newRightPanel = new rightPanel(rigthPanelDiv)