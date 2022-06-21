
// set height of content section 
const headerHeight = document.getElementsByTagName('header')[0].offsetHeight
const contentSection = document.getElementsByClassName('content_section')[0]

contentSection.style.height = `calc(100% - ${headerHeight}px)`