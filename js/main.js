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


let r = 0,
    z = 0;
let circle = setInterval(menuRotation, 50),
    link = setInterval(linkRotation, 50);


function menuRotation() {
    circleMenu.style = `transform: rotate(${r}deg);
                        transition: 0.5s;`
    r += 2
};

function linkRotation() {
    menuLink[0].style = `transform: rotate(${z}deg); transition: 0.5s;`
    menuLink[1].style = `transform: rotate(${z}deg); transition: 0.5s;`
    menuLink[2].style = `transform: rotate(${z}deg); transition: 0.5s;`
    menuLink[3].style = `transform: rotate(${z}deg); transition: 0.5s;`

    z -= 2;
}

circleMenu.addEventListener('mouseover', stop)
circleMenu.addEventListener('mouseout', start)


function start() {
    circle = setInterval(menuRotation, 50);
    link = setInterval(linkRotation, 50);
}

function stop() {
    clearInterval(circle)
    clearInterval(link)
}