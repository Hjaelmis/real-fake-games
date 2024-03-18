const splide = new Splide( '.splide', {
    direction: 'ttb',
    height: '390px',
    type: "loop",
    wheel: true,
    releaseWheel: true,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    loop: true,
    arrows: false,
    speed: 700,
    interval: 8000,
    padding: {
        top: '10%',
        bottom: '10%',
    },
    height  : '100%',
    fixedHeight: '300px',
    pagnationKeyboard: true,
}).mount();





