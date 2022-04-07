let contentList = document.querySelector('.content');

let slidecards = '';


objects.forEach((item) => {
    slidecards += `
  <li class="slider__item ${item.id} el${item.id}" onclick="clickevent(event)">
      <p>${item.id}</p>
  </li>
  `;

});

contentList.innerHTML = slidecards;

function clickevent(e) {
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    e.target.classList.add('active');
    moveContainer(e.target.classList[1]);
}

let currentCard = 1;
document.querySelector(".el1").classList.add('active');
contentList.style.marginLeft = 2 * 265 + 'px';

let movedLength = 0;
let firstclick = 0;
let iel = 0;

function moveContainer(el) {
    currentCard = el;
    if (el == '1') {
        contentList.style.marginLeft = 2 * 265 + 'px';
    } else if (el == '2') {
        contentList.style.marginLeft = 1 * 265 + 'px';
    } else if (el == '3') {
        contentList.style.marginLeft = 0 + 'px';
    } else {
        contentList.style.marginLeft = '-' + (el - 3) * 265 + 'px';

    }
}


function pre() {
    if (currentCard !== 1) {
        currentCard = currentCard -= 1;
    }
    moveContainer(currentCard);
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    let el = document.querySelector(`.el${currentCard}`);
    el.classList.add('active');
}

function next() {
    if (currentCard !== objects[objects.length - 1]) {
        currentCard = currentCard += 1;
    }
    moveContainer(currentCard);
    let active = document.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    let el = document.querySelector(`.el${currentCard}`);

    el.classList.add('active');
}