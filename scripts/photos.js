const divs = document.querySelectorAll('.galleryPhoto');
const imagearray= ["img/photos/IMG_2407.JPG",
"img/photos/IMG_2427.JPG",
"img/photos/IMG_2520.JPG",
"img/photos/IMG_2548.JPG",
"img/photos/IMG_2549.JPG",
"img/photos/IMG_2604.JPG",
"img/photos/IMG_2605.JPG",
"img/photos/IMG_2608.JPG",
"img/photos/IMG_2609.JPG",
"img/photos/IMG_2640.JPG",
"img/photos/IMG_2644.JPG",
"img/photos/IMG_2645.JPG",
"img/photos/IMG_2652.JPG",
"img/photos/IMG_2656.JPG",
"img/photos/IMG_2673.1.JPG",
"img/photos/IMG_2673.JPG",
"img/photos/IMG_2677.JPG",
"img/photos/IMG_2683.JPG",
"img/photos/IMG_2699.JPG",
"img/photos/IMG_2706.JPG",
"img/photos/IMG_2707.JPG",
"img/photos/IMG_2715.JPG",
"img/photos/IMG_2716.JPG",
"img/photos/IMG_2717.JPG",
"img/photos/IMG_2718.JPG",
"img/photos/IMG_2719.JPG",
"img/photos/IMG_2720.JPG",
"img/photos/IMG_2721.JPG",
"img/photos/IMG_2723.JPG",
"img/photos/IMG_2760.JPG",
"img/photos/IMG_2761.JPG",
"img/photos/IMG_2766.JPG",
"img/photos/IMG_2767.JPG",
"img/photos/IMG_2783.JPG",
"img/photos/IMG_2803.JPG",
"img/photos/IMG_2807.JPG",
"img/photos/IMG_2808.JPG",
"img/photos/IMG_2809.JPG",
"img/photos/IMG_2849.JPG"]
divs.forEach(el => el.addEventListener('click', event => {
    let tempSrc = event.target.src
    
    event.target.src = document.getElementById("mainPhoto").src
    document.getElementById("mainPhoto").src = tempSrc

}));
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
document.getElementById("mainPhoto").src = imagearray[randomNumber(0,imagearray.length-1)];
divs.forEach(el => el.src = imagearray[randomNumber(0,imagearray.length-1)])