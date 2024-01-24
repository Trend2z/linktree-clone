const ShareButton= document.querySelectorAll('.tile-share')
console.log(ShareButton)

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

ShareButton.forEach(ShareButton =>
    ShareButton.addEventListener('click', copyText))