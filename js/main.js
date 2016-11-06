$('.slides').vegas({
    delay: 10000,
    preloadImage:true,
    timer: true,
    shuffle: true,    
    transition: ['flash'],
    transitionDuration: 3000,
    slides: [
        { src: '/images/img01.jpg' },
        { src: '/images/img02.jpg' },
        { src: '/images/img03.jpg' },
        { src: '/images/img04.jpg' }
    ],
    overlay: '/images/overlays/01.png',
    animation: 'kenburns',
    animationDuration: 11000
});