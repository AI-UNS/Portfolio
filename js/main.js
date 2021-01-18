document.body.onload = function () {

    setTimeout(() => {
        let preloader = document.querySelector('#preloader');
        if (!preloader.classList.contains('disappear')) {
            preloader.classList.add('disappear');
        }
    }, 1000);
}

let bookmark = document.querySelector('.bookmark'),
    preheader = document.querySelector('.preheader'),
    circleMenu = document.querySelector('.circleMenu'),
    menuLink = document.querySelectorAll('.circleMenu__link');


preheader.addEventListener('mouseover', function () {
    bookmark.style = 'transform: translateX(0);'
})
preheader.addEventListener('mouseout', function () {
    bookmark.style = 'transform: translateX(-700px);'
})


let r = 0
setInterval(() => {
    circleMenu.style = `transform: rotate(${r}deg);
                        transition: 0.5s;`
    r += 2

    

}, 50);

// for (let i = 0; i < menuLink.length; i++) {
//     menuLink[i].style = `transform: rotate(${r})`
// }
