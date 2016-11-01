$(function (){
    $("body").vegas({
        delay: 7000,
        timer: true,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transition: 'slideDown2',
        transitionDuration: 2000,
        slides: [
            { src: "./img/1.jpg" },
            { src: "./img/2.jpg" },
            { src: "./img/3.jpg" },
            { src: "./img/4.jpg" }
        ],
        overlay: './js/vegas/overlays/03.png'
    });
});