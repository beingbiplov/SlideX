
function presentSlides(slideCls, transition){
    let slides = []
    let slideIdx = 0

    let slideShow = () =>{
        slideShowDiv.innerHTML = ''
        slideShowDiv.style.display = 'block'
        const slideShowContainer = document.createElement('div')
        slideShowContainer.classList.add('slideshow_container')
        slideShowDiv.appendChild(slideShowContainer)

        const slideShow_slide = document.createElement('div')
        slideShow_slide.classList.add('slideshow_slide', 'fade')
        slideShowContainer.appendChild(slideShow_slide)

        for (let slideClass of slideCls){
            let newSlide = document.createElement('div')
            newSlide.classList.add('slide_new')
            newSlide.style.width= '100%'
            newSlide.style.height= '100%'
            newSlide.classList.add('fade')
            newSlide.style.flex = '0 0 100%'
            slideShow_slide.appendChild(newSlide)
            newSLideClone = slideClass.newSlideDiv.cloneNode(true)
            newSLideClone.style.display = 'block'
            newSLideClone.style.width = '100%'
            newSLideClone.style.height = '100%'
            newSlide.appendChild(newSLideClone)
            slides.push(newSlide)

        }

        if (!transition){
            easeInOut(slideShow_slide)
        }
        else if(transition == transitionList[0]){
            easeInOut(slideShow_slide)
        }
        else if(transition == transitionList[1]){
            FadeInOut()
        }
        
    }

    slideShow()

    function easeInOut(slideShow_slide){
        openFullscreen()
        let counter = 0
        
        document.onkeydown = (e) => {
            let slideSize = slides[0].offsetWidth
            e = e || window.event
            if (e.keyCode === 39) {
                if (counter >= slides.length-1){
                    closeFullscreen()
                }else{
                    slideShow_slide.style.transition = 'transform 0.5s ease-in-out'
                    counter++
                    slideShow_slide.style.transform = `translateX(${-slideSize * counter}px)`
                }
            } else if (e.keyCode === 37) {
                if (counter>0){
                    slideShow_slide.style.transition = 'transform 0.5s ease-in-out'
                    counter--
                    slideShow_slide.style.transform = `translateX(${-slideSize * counter}px)`
                }
            }
        }
    }


    function FadeInOut(){
        openFullscreen()
        let i
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
    
        slides[0].style.display = 'block' 

        document.onkeydown = (e) => {
            e = e || window.event
            if (e.keyCode === 39) {
                if (slideIdx >= slides.length-1) 
                {   
                    closeFullscreen()  
                }
                else{
                    slides[slideIdx+1].style.display = "block";
                    slides[slideIdx].style.display = "none";
                    slideIdx++
                }
                
            } else if (e.keyCode === 37) {
                if(slideIdx>0){
                    slides[slideIdx-1].style.display = "block";
                    slides[slideIdx].style.display = "none";
                    slideIdx--
                }
            }
            else if (e.key == 'Escape'){
                console.log('asd')
                closeFullscreen()
            }
        }
    }

    // open Fullscreen
    function openFullscreen() {
    if (slideShowDiv.requestFullscreen) {
        slideShowDiv.requestFullscreen();
    } else if (slideShowDiv.webkitRequestFullscreen) { /* Safari */
        slideShowDiv.webkitRequestFullscreen();
    } else if (slideShowDiv.msRequestFullscreen) { /* IE11 */
        slideShowDiv.msRequestFullscreen();
    }
    }

    // close fullscreen 
    function closeFullscreen() {
        slideShowDiv.style.display = 'none'
        slideShowDiv.innerHTML = ''
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    }

}

