document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const openFirst = document.getElementById('open-first');
    const openSecond = document.getElementById('open-second');
    const openThird = document.getElementById('open-third');
    const reveal = document.getElementById('reveal');
    const cats = document.getElementById('cats');
    const heartsContainer = document.getElementById('hearts-container');
    const mwahText = document.getElementById('mwah-text');

    function showScreen(screenId) {
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    openFirst.addEventListener('click', () => showScreen('letter1'));
    openSecond.addEventListener('click', () => showScreen('letter2'));
    openThird.addEventListener('click', () => showScreen('letter3'));
    reveal.addEventListener('click', () => showScreen('final'));

    cats.addEventListener('click', () => {
        // Create hearts
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 80 + 10}%`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }

        // Reveal mwah text gradually
        mwahText.textContent = '';
        setTimeout(() => mwahText.textContent = 'mwah', 500);
        setTimeout(() => mwahText.textContent = 'mwah mwah', 1000);
        setTimeout(() => mwahText.textContent = 'mwah mwah mwah', 1500);
    });
});
