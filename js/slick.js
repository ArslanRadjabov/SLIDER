let hero__slider = document.querySelector('.hero__slider');
let story = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let sliderCards = '';

story.forEach((item) => {
    sliderCards += `
    <div class="hero_card  ${item} id${item}" onclick="cardClicked(event)">
    <h1>${item}</h1>
    
    </div>
    `;
});

hero__slider.innerHTML = sliderCards;

function cardClicked(e) {
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    e.target.classList.add('active');
    moveContainer(e.target.classList[1]);
}

let currentCard = 1;
document.querySelector(.id1).classList.add('active');
hero__slider.style.marginLeft = 2 * 270 + 'px';

// move container of slider card
let movedLength = 0;
let firstclick = 0;
let iel = 0;

function moveContainer(el) {
    currentCard = el;
    if (el == '1') {
        hero__slider.style.marginLeft = 2 * 270 + 'px';
    } else if (el == '2') {
        hero__slider.style.marginLeft = 1 * 270 + 'px';
    } else if (el == '3') {
        hero__slider.style.marginLeft = 0 + 'px';
    } else {
        hero__slider.style.marginLeft = '-' + (el - 3) * 270 + 'px';
    }
}

// when clicked pre btn
function pre() {
    if (currentCard !== 1) {
        currentCard = currentCard -= 1;
    }
    moveContainer(currentCard);
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    let el = document.querySelector(.id$ { currentCard });
    el.classList.add('active');
}

function next() {
    if (currentCard !== story[story.length - 1]) {
        currentCard = currentCard += 1;
    }
    moveContainer(currentCard);
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    let el = document.querySelector(.id$ { currentCard });

    el.classList.add('active');
}