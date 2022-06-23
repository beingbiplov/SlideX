
// set height of content section 
let setContentSectionHeight = () => {
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight
    const contentSection = document.getElementsByClassName('content_section')[0]

    contentSection.style.height = `calc(100% - ${headerHeight}px)`
}



// to toggle top nav section
const navUpBtn = document.getElementById('nav_toggle--btn_up')
const navDownBtn = document.getElementById('nav_toggle--btn_down')
const top_nav = document.getElementById('top_nav')

navUpBtn.addEventListener('click', () =>{
    navUpBtn.style.display = 'none'
    navDownBtn.style.display = 'block'
    top_nav.style.display = 'none'
    
    // resize the content section 
    setContentSectionHeight()
})

navDownBtn.addEventListener('click', () =>{
    navDownBtn.style.display = 'none'
    navUpBtn.style.display = 'block'
    top_nav.style.display = 'flex'
    
    // resize the content section 
    setContentSectionHeight()
})


// call function on window load 
window.onload = setContentSectionHeight()


// resize textarea
let resizeTextarea = (element) => {
    element.style.height = "100%";
    element.style.height = (element.scrollHeight)+"px";
}


// handle context menu
// const workspace = document.getElementById('workspace')
const cmenu = document.querySelector('.slide_context_menu')

function showContextMenu(show = true){
    if (slide1.slides.length >= 1){
        cmenu.style.display = show ? 'block' : 'none'
    }else{
        cmenu.style.display = 'none'
    }
    
}

workspace.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    showContextMenu()

    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top;  //y position within the element.

    // to prevent menu going outside workspace 
    topValue = (y + cmenu.offsetHeight) > workspace.offsetHeight ? (workspace.offsetHeight - cmenu.offsetHeight) : y
    leftValue = x + cmenu.offsetWidth > workspace.offsetWidth ? window.offsetWidth - cmenu.offsetWidth : x
    cmenu.style.top =  toPx(topValue)
    cmenu.style.left = toPx(leftValue)
})

window.addEventListener('click', () =>{
    showContextMenu(false)
})

contextMenuDel = document.getElementById('slide_context_menu--del')

contextMenuDel.addEventListener('click', () =>{
    slide1.removeSlide()
})