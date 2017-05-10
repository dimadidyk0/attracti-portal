document.addEventListener('DOMContentLoaded', function() {

    let videoBlocks = document.querySelectorAll('.video-block');
    videoBlocks.forEach((b, i) => {
        let img = b.querySelector('video').getAttribute('poster');
        b.querySelector('.video-layout').style.backgroundImage = `url('${img}')`;
    });

});

window.onload = function() {
    let windowH = window.innerHeight;
    let thisDoc = document;
    let headerVideos = thisDoc.querySelectorAll('header .header__video-block');

    function playVideo(arr, i) {

        if (i < arr.length) {
            let layout = arr[i].querySelector('.video-block');
            let video = arr[i].querySelector('video');

            arr[i].classList.add('video-block--current');
            video.play();

            video.onended = function() {
                arr[i].classList.remove('video-block--current');
                if (i == arr.length - 1) i = 0;
                else i++;
                playVideo(arr, i);
            };
        }
    }

    if (headerVideos) playVideo(headerVideos, 0);

    let founderVideo = thisDoc.querySelectorAll('.founder-video .video-block')
    if (founderVideo) thisDoc.addEventListener('scroll', activateFounderVideo);

    function activateFounderVideo() {
        let scrolled = window.pageYOffset;
        let founder = thisDoc.querySelector('.founder-video');
        let top = founder.offsetTop;
        let y = top - (windowH - founder.clientHeight);
        if (scrolled > y) {
            playVideo(founderVideo, 0);
            thisDoc.removeEventListener('scroll', activateFounderVideo);
        }
    }

    let albums = document.querySelectorAll('.item__album');
    albums.forEach(a => {
        let images = a.querySelectorAll('div');
        if (images.length > 12) {
            let count = document.createElement('p');
            count.innerHTML = `${images.length} images`
            images[11].appendChild(count);
        }
    });
}