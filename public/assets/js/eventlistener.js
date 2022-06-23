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