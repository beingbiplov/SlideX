
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