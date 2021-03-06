
const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [18, 9];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;
for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}
staggerVisualizerEl.appendChild(fragment);
const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: false,
  autoplay: false
})

.add({
  translateX: anime.stagger('1rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('1rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 1,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
    boxShadow: [
        '0px 0px 0px 0px rgba(0,0,0,.5)',
        '20px 20px 10px 0px rgba(0,0,0,.5)'
      ],
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 0,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
    boxShadow: [
        '0px 0px 0px 0px rgba(0,0,0,.5)',
        '20px 20px 10px 0px rgba(0,0,0,.5)'
      ],
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(20, {grid: grid, from: 'center'})
})
.add({
    boxShadow: [
        '0px 0px 0px 0px rgba(0,0,0,.5)',
        '20px 20px 10px 0px rgba(0,0,0,.5)'
      ],
    translateX: 0,
    translateY: 0,
    scale: .5,
    scaleX: 1,
    rotate: 0,
    duration: 1000,
    delay: anime.stagger(100, {grid: grid, from: 'center'})
  })
  .add({
    scaleY: 1,
    scale: 1,
    delay: anime.stagger(20, {grid: grid, from: 'center'})
  })
  .add({
    backgroundColor: '#000000',
    delay: anime.stagger(20, {grid: grid, from: 'center'})
  })
  .add({
    backgroundColor: '##00FF00',
    delay: anime.stagger(20, {grid: grid, from: 'center'})
  })
.add({
    Color:'#ffffff',
    translateY: anime.stagger('10rem', {grid: grid, from: 'center', axis: 'y'}),
    targets:'.hidden div',
        scaleY: 1,
        scale: 1,
        })
.add({
    translateY:anime.stagger('9rem', {grid:grid, from:'center', axis: 'y' }),
    targets:'.video-container div',
    scaleY: 1
});
                            
staggersAnimation.play();

{
    const MathUtils = {
        lineEq: (y2, y1, x2, x1, currentVal) => {
            // y = mx + b 
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        },
        lerp: (a, b, n) =>  (1 - n) * a + n * b
    };

};

$(document).ready(function(){
    $(".hidden").show(6000);
    });


    $(document).ready(function(){
        $(".video1").show(8000);
        });




