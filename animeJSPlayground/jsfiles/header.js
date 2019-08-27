import anime from '../node_modules/animejs/lib/anime.es.js';

// fading in word play
// parent shows up first, then child

let tl = anime.timeline({
    easing: "easeInOutQuad",
    duration: 3000 // determines how long it takes to finish animation
})

tl.add({
    opacity: 100,
    targets: ".parent",
    color: "#000000",
    translateX: 500,
}).add({
    opacity: 100,
    targets: ".little",
    color: "#66CD00",
    translateX: 250
})
