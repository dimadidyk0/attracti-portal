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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCB2aWRlb0Jsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlby1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1sYXlvdXQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltZ30nKWA7XG4gICAgfSk7XG5cbn0pO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHdpbmRvd0ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgbGV0IHRoaXNEb2MgPSBkb2N1bWVudDtcbiAgICBsZXQgaGVhZGVyVmlkZW9zID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkZXIgLmhlYWRlcl9fdmlkZW8tYmxvY2snKTtcblxuICAgIGZ1bmN0aW9uIHBsYXlWaWRlbyhhcnIsIGkpIHtcblxuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsYXlvdXQgPSBhcnJbaV0ucXVlcnlTZWxlY3RvcignLnZpZGVvLWJsb2NrJyk7XG4gICAgICAgICAgICBsZXQgdmlkZW8gPSBhcnJbaV0ucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XG5cbiAgICAgICAgICAgIHZpZGVvLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgndmlkZW8tYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBhcnIubGVuZ3RoIC0gMSkgaSA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICAgICAgcGxheVZpZGVvKGFyciwgaSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlclZpZGVvcykgcGxheVZpZGVvKGhlYWRlclZpZGVvcywgMCk7XG5cbiAgICBsZXQgZm91bmRlclZpZGVvID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcuZm91bmRlci12aWRlbyAudmlkZW8tYmxvY2snKVxuICAgIGlmIChmb3VuZGVyVmlkZW8pIHRoaXNEb2MuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYWN0aXZhdGVGb3VuZGVyVmlkZW8pO1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVGb3VuZGVyVmlkZW8oKSB7XG4gICAgICAgIGxldCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbGV0IGZvdW5kZXIgPSB0aGlzRG9jLnF1ZXJ5U2VsZWN0b3IoJy5mb3VuZGVyLXZpZGVvJyk7XG4gICAgICAgIGxldCB0b3AgPSBmb3VuZGVyLm9mZnNldFRvcDtcbiAgICAgICAgbGV0IHkgPSB0b3AgLSAod2luZG93SCAtIGZvdW5kZXIuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgaWYgKHNjcm9sbGVkID4geSkge1xuICAgICAgICAgICAgcGxheVZpZGVvKGZvdW5kZXJWaWRlbywgMCk7XG4gICAgICAgICAgICB0aGlzRG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFjdGl2YXRlRm91bmRlclZpZGVvKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
