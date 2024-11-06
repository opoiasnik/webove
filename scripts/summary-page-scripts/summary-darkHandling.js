
$(document).ready(function() {
    const toggleBtn = $('#mode-toggle-btn');
    const body = $('body');

  
    function updateToggleIcon() {
        if (body.hasClass('dark-mode')) {
            toggleBtn.attr('src', '../images/brightness.png');
            toggleBtn.attr('alt', 'Switch to Light Mode');
        } else {
            toggleBtn.attr('src', '../images/user-interface.png');
            toggleBtn.attr('alt', 'Switch to Dark Mode');
        }
    }


    if (localStorage.getItem('theme') === 'dark') {
        body.addClass('dark-mode');
    }
    updateToggleIcon();


    toggleBtn.on('click', function() {
        body.toggleClass('dark-mode');
        updateToggleIcon();

        if (body.hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
