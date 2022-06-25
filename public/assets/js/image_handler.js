const imageInput = document.getElementById('slide_img_input')
let uploaded_img = ''

imageInput.addEventListener("change", function(){
    if (slide1.activeSlideCls){
        const imageReader = new FileReader()

        imageReader.addEventListener('load', () =>{
            uploaded_img = imageReader.result
            slide1.addImage(uploaded_img)
        })
        imageReader.readAsDataURL(this.files[0])
        }
})