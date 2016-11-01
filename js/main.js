$('body').vegas({
    delay: 7000,
    timer: true,
    shuffle: true,    
    transition: 'blur',
    transitionDuration: 1000,
    slides: [
        { src: '/images/1.jpg' },
        { src: '/images/3.jpg' },
        { src: '/images/4.jpg' },
        { src: '/images/5.jpg' }
    ],
    overlay: '/images/overlays/01.png'
});