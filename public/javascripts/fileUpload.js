const inputImageBtn = document.querySelector('.imageUpload__input')
const imageUploadWrap = document.querySelector('.imageUpload__wrap')
const inputFieldUrl = document.querySelector('.inputField__url input')

imageUploadWrap.addEventListener('dragover', () => imageUploadWrap.classList.add('imageDropping'))
imageUploadWrap.addEventListener('dragleave', () => imageUploadWrap.classList.remove('imageDropping'))

inputImageBtn.addEventListener('change', function(){
    const file = this.files[0]

    if(file){
        if(file.size < 1000000){
            const reader = new FileReader

            reader.onload = function(){
                const result = reader.result
                inputImageBtn.parentElement.parentElement.classList.add('active')
                inputImageBtn.parentElement.parentElement.nextElementSibling.classList.add('hidden')
                inputImageBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden')
                const imageUploadContent = document.createElement('div')
                imageUploadContent.classList.add('imageUpload__content')
    
                imageUploadContent.innerHTML =             
                `<img src="${result}" alt="image" class="imageUploaded" />
                <a type="removeImage" class="removeImage"><i class="fas fa-times"></i></a>
                <p class="imageUpload__name">${file.name}</p>`
    
                inputImageBtn.parentElement.parentElement.appendChild(imageUploadContent)
                inputImageBtn.parentElement.style.display = "none"
                const removeImageBtn = imageUploadContent.querySelector('.removeImage')
                removeImageBtn.addEventListener('click', () => removeUpload(imageUploadContent))
    
            }
    
            reader.readAsDataURL(file)
        } else{
            handleError(inputImageBtn.parentElement, 'Maximum size of a Image is 150 kB. Try it again please')

        }
        
    } else{
        removeUpload(file)
    }

})

function removeUpload(upload){
    inputImageBtn.value = ""
    inputFieldUrl.value = ""
    resetTemplate()
    inputImageBtn.parentElement.style.display = "block"
    inputImageBtn.parentElement.parentElement.classList.remove('active')
    inputImageBtn.parentElement.parentElement.nextElementSibling.classList.remove('hidden')
    inputImageBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove('hidden')
    imageUploadWrap.classList.remove('imageDropping')
    upload.remove()

}

function handleError(element, message){
    if(!element.classList.contains('error')){
        element.classList.add('error')
        element.querySelector('h3').textContent = "Wowo, slow down"
        element.querySelector('i').className = "ri-error-warning-line"
        element.querySelector('p').textContent = message
        inputImageBtn.value = ""
    }
}

inputFieldUrl.addEventListener('change', function() {

    let input = this.value.match(/\.(jpeg|jpg|gif|png)$/)
    const imageUploadContent = document.createElement('div')
    imageUploadContent.classList.add('imageUpload__content')

    if(input){
        imageUploadContent.innerHTML =             
        `<img src="${this.value}" alt="image" class="imageUploaded" />
        <a type="removeImage" class="removeImage"><i class="fas fa-times"></i></a>
        <p class="imageUpload__name">${this.value}</p>`
    
        inputImageBtn.parentElement.parentElement.appendChild(imageUploadContent)
        inputImageBtn.parentElement.style.display = "none"

        const removeImageBtn = imageUploadContent.querySelector('.removeImage')
        removeImageBtn.addEventListener('click', () => removeUpload(imageUploadContent))
    } else{
        if(document.querySelector('.imageUpload__content')){
            removeUpload(document.querySelector('.imageUpload__content'))
        }
        handleError(inputImageBtn.parentElement, 'This URL is not valid')
    }

    if(this.value == ""){
        removeUpload(document.querySelector('.imageUpload__content'))
    }

})

function resetTemplate(){
    const errorElm = inputImageBtn.parentElement
    errorElm.classList.remove('error')
    errorElm.querySelector('h3').textContent = "Upload book cover"
    errorElm.querySelector('i').className = "ri-image-line"
    errorElm.querySelector('p').textContent = "Image must be at least 512x512 in file format .jgp or .png"
    inputImageBtn.value = ""
}