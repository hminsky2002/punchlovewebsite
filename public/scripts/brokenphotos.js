const divs = document.querySelectorAll('.galleryPhoto');

divs.forEach(el => el.addEventListener('click', event => {
    
    
    event.target.src = document.getElementById("mainPhoto").src
    

}));