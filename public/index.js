window.onload = () => {
    const transitionElement = document.querySelector('.transition')
    const allLinks = document.querySelectorAll('a')

    console.log(allLinks)

    setTimeout(() => {
        transitionElement.classList.remove('is-active')
    }, 900)

    for (let i = 0; i < allLinks.length; i++){
        const link = allLinks[i]

        link.addEventListener('click', function(e) {
            e.preventDefault()

            let target = this.href;
    
            transitionElement.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 900)
        })
    }
}