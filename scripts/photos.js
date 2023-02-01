const divs = document.querySelectorAll('.galleryPhoto');

divs.forEach(el => el.addEventListener('click', event => {
    let tempSrc = event.target.src
    
    event.target.src = document.getElementById("mainPhoto").src
    document.getElementById("mainPhoto").src = tempSrc

}));