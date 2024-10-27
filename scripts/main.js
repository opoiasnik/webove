const darkModeToggle = document.getElementById('darkModeToggle');
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
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});
