
const createListBox = (slide, listType) => {
    let width = percentageOfNum(slide.offsetWidth, 30)
    let height = 26
    const btnHeight = 15
    const btnWidth = 15

    let listBoxDiv = document.createElement('div')
    listBoxDiv.classList.add('slide_listBox')
    listBoxDiv.style.position = 'absolute'
    listBoxDiv.style.padding = '2px'
    listBoxDiv.style.top = toPer(getRandomInt(1,5))
    listBoxDiv.style.left = toPer(getRandomInt(1,10))
    slide.appendChild(listBoxDiv)

    const listCloseBtnDiv = document.createElement('div')
    listCloseBtnDiv.style.position = 'relative'
    listCloseBtnDiv.style.width = toPer(100)
    listCloseBtnDiv.style.height = toPx(btnHeight)
    listBoxDiv.appendChild(listCloseBtnDiv)

    const listCloseBtn = document.createElement('img')
    listCloseBtn.src = './assets/images/close.png'
    listCloseBtn.style.cursor = 'pointer'
    listCloseBtn.style.position = 'absoulte'
    listCloseBtn.style.height = toPx(btnHeight)
    listCloseBtn.style.width = toPx(btnWidth)
    listCloseBtn.classList.add('element_close_btn')
    listCloseBtn.style.right = '0'
    listCloseBtn.style.top = '0'
    listCloseBtn.style.zIndex = '2'
    listCloseBtnDiv.appendChild(listCloseBtn)

    let listItemDiv = document.createElement('div')
    listItemDiv.setAttribute('contenteditable', 'true')
    listItemDiv.setAttribute('focused', 'true')
    listItemDiv.classList.add('slide_list_item_div')
    listItemDiv.style.cursor = 'auto'
    listItemDiv.style.minWidth = toPx(width)
    listItemDiv.style.height = toPx(height)
    listBoxDiv.appendChild(listItemDiv)
    listItemDiv.addEventListener('mousedown', (e)=>{e.stopPropagation()})
    let listItemUL
    if (listType == 'ol'){
        listItemUL = document.createElement('ol')
    }
    else{
        listItemUL = document.createElement('ul')
    }
    
    listItemDiv.appendChild(listItemUL)
    let listItemLI = document.createElement('li')
    listItemUL.appendChild(listItemLI)

    return [listBoxDiv, listCloseBtn]

}