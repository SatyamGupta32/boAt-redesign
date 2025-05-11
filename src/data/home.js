// home.js

// Advance or rewind the carousel, then re‐enable clicks after 2s
export function showSlider(type) {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('next', 'prev');
    const items = listHTML.querySelectorAll('.item');

    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}

// Hook up all the buttons once on mount
export function initCarousel() {
    document.getElementById('next').onclick = () => showSlider('next');
    document.getElementById('prev').onclick = () => showSlider('prev');

    document.querySelectorAll('.seeMore').forEach(button => {
        button.onclick = () => {
            const carousel = document.querySelector('.carousel');
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        };
    });

    document.getElementById('back').onclick = () => {
        document.querySelector('.carousel').classList.remove('showDetail');
    };
}
