function handleDrag(dragContainer, dragElement){

    function onDrag({movementX, movementY}){

        let dragElementStyle = window.getComputedStyle(dragElement)
        let leftVal = parseInt(dragElementStyle.left)
        let topVal = parseInt(dragElementStyle.top)
        let newLeftVal = leftVal + movementX
        let newTopVal = topVal + movementY
        
        if(newLeftVal > 0 && (newLeftVal+dragElement.offsetWidth) < dragContainer.offsetWidth && newTopVal > 0 && newTopVal < dragContainer.offsetHeight - dragElement.offsetHeight){
            dragElement.style.left = toPx(newLeftVal)
            dragElement.style.top = toPx(newTopVal)
        }

        dragElement.style.cursor = 'move'
        dragElement.style.opacity = '0.5'
               
    }

    dragElement.addEventListener('mouseover', ()=>{
        dragElement.style.cursor = 'move'
    })

    dragElement.addEventListener("mousedown", ()=>{
        dragContainer.addEventListener("mousemove", onDrag);
    })

    document.addEventListener("mouseup", ()=>{
         dragElement.style.opacity = '1'
        dragContainer.removeEventListener("mousemove", onDrag);
    });

}