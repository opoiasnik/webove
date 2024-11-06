

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mode-toggle-btn');
    const body = document.body;
  

    function updateToggleIcon() {
      if (body.classList.contains('dark-mode')) {
        toggleBtn.src = '../images/brightness.png';
      } else {
        toggleBtn.src = '../images/user-interface.png';
      }
    }
  
  
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }
    updateToggleIcon();
  
    toggleBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      updateToggleIcon();
  
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    });
  });
  