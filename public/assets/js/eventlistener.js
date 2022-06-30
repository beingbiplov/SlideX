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

for (let btn of addNewSlideBtns){
    btn.addEventListener('click', ()=>{   
        slide1.newSlide()
    })
}

// handle add new slide btn 
addNewSlideBtn.addEventListener('click', () =>{
    slide1.newSlide()
})

// handle add textbox event 
for (let addTextBoxBtn of addTextBoxBtns){
    addTextBoxBtn.addEventListener('click', ()=>{
        if (slide1.activeSlideCls){
            slide1.addTextBox()
        }
    })
}

// add link panel toggle event listener
for (let addLinkDiv of addLinkBtns){
    addLinkDiv.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('link')
    }
})
}

// theme selector panel toggle event listener
bottomNavThemeSelBtn.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('themes')
    }
})

for (let btn of addNewThemeBtns){
    btn.addEventListener('click', ()=>{   
       if (newRightPanel){
            newRightPanel.selectActiveRightPanel('themes')
      }
    })
}

// layout selector panel toggle event listener
bottomNavLayoutSelBtn.addEventListener('click', ()=>{
    if (newRightPanel){
        newRightPanel.selectActiveRightPanel('layout')
    }
})

for (let btn of addNewLayoutBtns){
    btn.addEventListener('click', ()=>{   
       if (newRightPanel){
         newRightPanel.selectActiveRightPanel('layout')
      }
    })
}

bottomNavNoteSelBtn.addEventListener('click', ()=>{
    if (newRightPanel && slide1.activeSlideCls){
        newRightPanel.sNotesTextArea.value = slide1.activeSlideCls.slideNotes
        newRightPanel.selectActiveRightPanel('speakerNote')
    }
})

bottomNavTransitionSelBtn.addEventListener('click', ()=>{
    if (newRightPanel && slide1.activeSlideCls){
        if (slide1.transition){
            newRightPanel.transitionSelect.value = slide1.transition
        }
        newRightPanel.selectActiveRightPanel('transition')
    }
})

// present slideshow btn event listener
presentSlideshowBtn.addEventListener('click', ()=>{
    if (slide1.activeSlideCls){
        slide1.slideShow()
    }   
})

// adding ordered and unorderes list btns
addULBtn.addEventListener('click', ()=>{
    if (slide1.activeSlideCls){
        slide1.addList('ul')
    }
    
})

addOLBtn.addEventListener('click', ()=>{
    if (slide1.activeSlideCls){
       slide1.addList('ol')
    }
})


for (let btn of saveSlideBtns){
    btn.addEventListener('click', ()=>{
        let data = slide1.getSlidesData()
        saveSlideData(data)
    })
}

// typography btn events 
boldTextBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleFontWeight()
    }
    
})

fontSizeInput.addEventListener('click', (e) =>{
    e.stopPropagation()
})

fontSizeInput.addEventListener('change', () =>{
    if (slide1.activeSlideCls){
        slide1.handleFontSize()
    }
})

italicTextBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleFontStyle()
    }
})

underlineTextBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleFontDecor()
    }
})

fontSelector.addEventListener('click', (e) =>{
        e.stopPropagation()
})

fontSelector.addEventListener('change', (e) =>{
    if (slide1.activeSlideCls){
        slide1.handleTextFont()
    }
})

colorPicker.addEventListener('click', (e) =>{
        e.stopPropagation()
})

colorPicker.addEventListener('input', (e) =>{
    if (slide1.activeSlideCls){
        slide1.handleFontColor()
    }
})

bgColorPicker.addEventListener('click', (e) =>{
        e.stopPropagation()
})

bgColorPicker.addEventListener('input', (e) =>{
    if (slide1.activeSlideCls){
        slide1.handleBGColor()
    }
})

alignTextRightBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleTextRightAlign()
    }
})

alignTextLeftBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleTextLeftAlign()
    }
})

alignTextCenterBtn.addEventListener('click', (e) =>{
    if (slide1.activeSlideCls){
        e.stopPropagation()
        slide1.handleTextCenterAlign()
    }
})