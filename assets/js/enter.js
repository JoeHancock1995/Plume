
const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [40, 34];
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

}
var enterContent = anime({
    
})