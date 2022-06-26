// event listener to choose layout

let handleSelectLayout = (event) => {
    let btn = event.target.innerText
    let layout = mapLayout(btn)
    slide1.selectLayout(layout)
}

for (btn of selLayoutBtn) {
    btn.addEventListener('click', handleSelectLayout)
}

let mapLayout = (n) => {
    let layouts = {
        'Default' : defaultLayout,
        'Title Only' : titleOnlyLayout,
        'Title Body' : titleBodyLayout,
        'Title with two cols': titleAndTwoCols,
        'One column' : oneColumnLayout,
        'Main point' : mainPointLayout,
        'Two section' : twoSectionLayout,
        'Caption' : captionLayout
    }

    return layouts[n]
}


// event listener to select theme

let handleSelectTheme = (event) => {
    let themeIdx = event.target.getAttribute("value")
    slide1.selectTheme(themeIdx)
}

for (btn of selThemeBth) {
    btn.addEventListener('click', handleSelectTheme)
}

// handle new slide btn from placeholder slide 
newSlideBtn.addEventListener('click', ()=>{   
    slide1.newSlide()
})


// handle add new slide btn 
addNewSlideBtn.addEventListener('click', () =>{
    slide1.newSlide()
})

// handle add textbox event 
addTextBoxBtn.addEventListener('click', ()=>{
    if (slide1.activeSlideCls){
        slide1.addTextBox()
    }
})

// add link panel toggle event listener
addLinkDiv.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('link')
    }
})

// theme selector panel toggle event listener
bottomNavThemeSelBtn.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('themes')
    }
})

// layout selector panel toggle event listener
bottomNavLayoutSelBtn.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('layout')
    }
})

// present slideshow btn event listener
presentSlideshowBtn.addEventListener('click', ()=>{
    if (slide1.activeSlideCls){
        slide1.slideShow()
    }   
})