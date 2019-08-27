import anime from './node_modules/animejs/lib/anime.es.js';

anime({ // small box moves to the right
    targets: '.smallBox',
    translateX: 550, // how far the box goes horizontally
    easing: 'easeInOutQuad' // slows down the animation
  });

anime({
    backgroundColor: "rgb(103, 225, 13)", // only accepts hexidecimal & rgb
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    targets: '.boxToCircle',
    translateX: 550
})