const inputImageBtn = document.querySelector('.imageUpload__input')
const imageUploadWrap = document.querySelector('.imageUpload__wrap')

imageUploadWrap.addEventListener('dragover', () => imageUploadWrap.classList.add('imageDropping'))
imageUploadWrap.addEventListener('dragleave', () => imageUploadWrap.classList.remove('imageDropping'))

inputImageBtn.addEventListener('change', function(){
    const file = this.files[0]

    if(file){
        const reader = new FileReader

        reader.onload = function(){
            const result = reader.result
            const imageUploadContent = document.createElement('div')
            imageUploadContent.classList.add('imageUpload__content')

            imageUploadContent.innerHTML =             
            `<img src="${result}" alt="image" class="imageUploaded" />
            <a type="removeImage" class="removeImage"><i class="fas fa-times"></i></a>
            <p class="imageUpload__name">${file.name}</p>`

            inputImageBtn.parentElement.parentElement.appendChild(imageUploadContent)
            
            const removeImageBtn = imageUploadContent.querySelector('.removeImage')
            removeImageBtn.addEventListener('click', () => removeUpload(imageUploadContent))

        }

        reader.readAsDataURL(file)
    }

})

function removeUpload(upload){
    inputImageBtn.value = ""
    imageUploadWrap.classList.remove('imageDropping')
    upload.remove()

}
