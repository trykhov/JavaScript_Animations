import anime from './node_modules/animejs/lib/anime.es.js';

// just moves to the right
anime({ // small box moves to the right
    targets: '.smallBox',
    translateX: 550, // how far the box goes horizontally
    easing: 'easeInOutQuad' // slows down the animation
  });

//  goes back and forth and transforms from square to circle and back again
anime({
    backgroundColor: "rgb(103, 225, 13)", // only accepts hexidecimal & rgb
    borderRadius: ['0%', '50%'],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // loop: true,
    // targets: ['.boxToCircle', '.stretch'], // can put multiple elements in an array
    targets: '.boxToCircle',
    translateX: 550
})

// expected: goes back and forth
anime({
    direction: 'alternate', // goes back and forth (once)
    easing: 'easeInOutQuad',
    // loop: true, // continues the animation forever
    targets: '.stretch',
    width: '100%'
})

// timeline allows items to move sequentially
// sets a general behavior
let tl = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 750
})

// add the elements that are to follow those behaviors
// .one goes first and then .two right after moves to the right
tl.add({
    targets: '.one',
    translateX: 300
}).add({ // .two turns red
    backgroundColor: "#FF0000",
    targets: '.two',
    translateX: 400
})

tl.add({ // .three shrinks and turns into a square
    borderRadius: "0%",
    height: "50px",
    targets: ".three",
    translateX: 500,
    width: "50px"
}).add({ // after the first sequence of .three, .three moves down
    targets: ".three",
    translateY: 200
})