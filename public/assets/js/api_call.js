let slideId

async function getSlides(url){
    const response = await fetch('./api/slides')
    let slides = await response.json()
    return slides
}

async function getSlide(slide_id){
    
    slideId = slide_id
    const response = await fetch(`./api/slide/${slideId}`)

    let slide = await response.json()
    
    return slide
}

async function saveSlideData(data){
    if (slideId){
            
        const response = await fetch(`./api/slide/${slideId}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },  body: JSON.stringify(data) 
        })
        return response
    }
    else{        
        const response = await fetch('./api/slides', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },  body: JSON.stringify(data) 
        })
        return response
    }
    
}