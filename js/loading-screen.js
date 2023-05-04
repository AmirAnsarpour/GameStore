let loadingScreen = document.querySelector("#animate");
let loadingOpacity = 1;
let loadingKey;

function changeLoadingOpacity() {
    loadingOpacity -= 0.1
    loadingScreen.style.opacity = loadingOpacity;
    if (loadingOpacity <= 0) {
        clearInterval(loadingKey);
        loadingScreen.classList.add("hidden");
    }
}

window.addEventListener("load", function () {
    loadingKey = setInterval(changeLoadingOpacity, 50);
});
///////////////////////////////////////
const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let cardIndex = 5;

for (let i = cardIndex; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

function showCards(direction) {
    if (direction === 'left' && cardIndex > 5) {
        cards[cardIndex - 1].style.display = 'none';
        cards[cardIndex - 6].style.display = 'block';
        cardIndex--;
    } else if (direction === 'right' && cardIndex < cards.length) {
        cards[cardIndex - 5].style.display = 'none';
        cards[cardIndex].style.display = 'block';
        cardIndex++;
    }
}

leftArrow.addEventListener('click', function () {
    showCards('left');
});

rightArrow.addEventListener('click', function () {
    showCards('right');
});
