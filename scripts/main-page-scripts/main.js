document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.getElementById("animatedText");
    const text = animatedText.textContent.trim();


    animatedText.innerHTML = text.split("").map((char, index) => {
        return `<span style="animation-delay: ${index * 0.1}s">${char === " " ? "&nbsp;" : char}</span>`;
    }).join("");


    const startWaveAnimation = () => {
        const letters = animatedText.querySelectorAll("span");
        letters.forEach((letter, index) => {
            letter.style.animation = "none";
            setTimeout(() => {
                letter.style.animation = `wave 1s ease-in-out ${index * 0.1}s`;
            }, 10);
        });
    };


    startWaveAnimation();
    setInterval(startWaveAnimation, 10000);
});




const darkModeToggle = document.getElementById('darkModeToggle');
const toggleBtn = document.getElementById('mode-toggle-btn');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.studio').classList.toggle('dark-mode');
    document.querySelector('.hero').classList.toggle('dark-mode');
    document.querySelectorAll('.service-item').forEach(item => {
        item.classList.toggle('dark-mode');
    });
    document.querySelector('.what-we-do').classList.toggle('dark-mode');
    document.querySelector('.work-samples').classList.toggle('dark-mode');
    document.querySelector('.team').classList.toggle('dark-mode');
    document.querySelectorAll('.team-member').forEach(member => {
        member.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');

    // Toggle button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.src = '../images/brightness.png';
      } else {
        toggleBtn.src = '../images/user-interface.png';
      }
});
// Výber všetkých prvkov s triedou .fade-in
const faders = document.querySelectorAll('.fade-in');

// Vytvorenie sledovania prvkov (Intersection Observer)
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.1 // Zobrazí, keď je 10% prvku viditeľných
});

// Pridanie sledovania všetkým prvkom
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
