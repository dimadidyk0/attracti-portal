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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0RvYyA9IGRvY3VtZW50O1xuXG5cbiAgICBsZXQgdmlkZW9CbG9ja3MgPSB0aGlzRG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2hlYWRlciAuaGVhZGVyX192aWRlby1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZpZGVvLWxheW91dCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4uLyR7aW1nfScpYDtcbiAgICB9KTtcblxuICAgIC8vIGxldCBtYWluQ29sb3IgPSB0aGlzRG9jLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbG9yXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xuICAgIC8vIGxldCBzdHlsZVRhZyA9IHRoaXNEb2MucXVlcnlTZWxlY3Rvcignc3R5bGUnKVxuICAgIC8vIGxldCBzdHlsZXNoZWV0ID0gc3R5bGVUYWcuaW5uZXJIVE1MO1xuICAgIC8vIHN0eWxlc2hlZXQgPSBzdHlsZXNoZWV0LnJlcGxhY2UoL21haW4tY29sb3IvZywgbWFpbkNvbG9yKTtcblxuICAgIC8vIHN0eWxlVGFnLmlubmVySFRNTCA9IHN0eWxlc2hlZXQ7XG5cblxuICAgIC8vIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gXCLQlNCw0L3QvdGL0LUg0L3QtSDRgdC+0YXRgNCw0L3QtdC90YsuINCi0L7Rh9C90L4g0L/QtdGA0LXQudGC0Lg/XCI7XG4gICAgLy8gfTtcblxuXG5cblxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIGxldCB0aGlzRG9jID0gZG9jdW1lbnQ7XG4gICAgbGV0IGhlYWRlclZpZGVvcyA9IHRoaXNEb2MucXVlcnlTZWxlY3RvckFsbCgnaGVhZGVyIC5oZWFkZXJfX3ZpZGVvLWJsb2NrJyk7XG5cbiAgICBmdW5jdGlvbiBwbGF5VmlkZW8oYXJyLCBpKSB7XG5cbiAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gYXJyW2ldLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZpZGVvLWJsb2NrJyk7XG4gICAgICAgICAgICBsZXQgdmlkZW8gPSBhcnJbaV0ucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdmlkZW8tYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcblxuICAgICAgICAgICAgdmlkZW8ub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3ZpZGVvLWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHBsYXlWaWRlbyhhcnIsIGkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlWaWRlbyhoZWFkZXJWaWRlb3MsIDApO1xuXG59XG5cbmxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgLy8gcmVqZWN0INCy0YvQt9Cy0LDQvSDRgNCw0L3RjNGI0LUsIHJlc29sdmUg0LHRg9C00LXRgiDQv9GA0L7QuNCz0L3QvtGA0LjRgNC+0LLQsNC9XG4gICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKFwiZXJyb3JcIikpLCAxMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImlnbm9yZWRcIiksIDIwMDApO1xuXG59KTtcblxucHJvbWlzZVxuICAgIC50aGVuKCk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
