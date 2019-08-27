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

// expected: name fades in (appears & comes down)
anime({ 
    targets: ".dropdown",
    color: "#000000", // having color & opacity together helps with appearing effect
    opacity: 100,
    easing: "easeInOutQuad",
    translateY: 100,
    duration: 3000
})