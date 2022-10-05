const board = document.querySelector('#board');
const colors = ['#de5d5d', '#a65dde', '#46568f', '#468f7e', '#59a83d', '#c4b84b', '#c4944b']
const SQUARE_NUMBER = 600;
for(let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
} 

function setColor(el) {
    let color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(color) {
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
}