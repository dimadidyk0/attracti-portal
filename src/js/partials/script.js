document.addEventListener('DOMContentLoaded', function() {
    let thisDoc = document;


    let videoBlocks = thisDoc.querySelectorAll('header .header__video-block');
    videoBlocks.forEach((b, i) => {
        let img = b.querySelector('video').getAttribute('poster');
        b.querySelector('.header__video-layout').style.backgroundImage = `url('../${img}')`;
    });

    // let mainColor = thisDoc.querySelector('[data-color]').getAttribute('data-color');
    // let styleTag = thisDoc.querySelector('style')
    // let stylesheet = styleTag.innerHTML;
    // stylesheet = stylesheet.replace(/main-color/g, mainColor);

    // styleTag.innerHTML = stylesheet;


    // window.onbeforeunload = function() {
    //     return "Данные не сохранены. Точно перейти?";
    // };




});

window.onload = function() {

    let thisDoc = document;
    let headerVideos = thisDoc.querySelectorAll('header .header__video-block');

    function playVideo(arr, i) {

        if (i < arr.length) {
            let layout = arr[i].querySelector('.header__video-block');
            let video = arr[i].querySelector('video');

            arr[i].classList.add('header__video-block--current');
            video.play();

            video.onended = function() {
                arr[i].classList.remove('header__video-block--current');
                i++;
                playVideo(arr, i);
            };
        }
    }

    playVideo(headerVideos, 0);

}

let promise = new Promise((resolve, reject) => {

    // reject вызван раньше, resolve будет проигнорирован
    setTimeout(() => reject(new Error("error")), 1000);

    setTimeout(() => resolve("ignored"), 2000);

});

promise
    .then();