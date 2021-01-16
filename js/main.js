document.body.onload = function () {

    setTimeout(() => {
        let preloader = document.querySelector('#preloader');
        if(!preloader.classList.contains('disappear')){
            preloader.classList.add('disappear');
        }
    }, 1000);
}