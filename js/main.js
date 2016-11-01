$('body').vegas({
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
        { src: '/images/img04.jpg' },
        { src: '/images/img05.jpg' },
        { src: '/images/img06.jpg' },
        { src: '/images/img07.jpg' },
        { src: '/images/img08.jpg' },
        { src: '/images/img09.jpg' },
        { src: '/images/img10.jpg' }
    ],
    overlay: '/images/overlays/01.png',
    animation: 'kenburns',
    animationDuration: 11000
});