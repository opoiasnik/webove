const modalData = {
    js: {
        title: "JavaScript",
        description: "JavaScript is a powerful, flexible, and fast programming language used for web development.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    html: {
        title: "HTML5",
        description: "HTML5 is the latest evolution of the standard that defines HTML, the language for structuring web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        logo: "./images/html.png"
    },
    css: {
        title: "CSS3",
        description: "CSS3 is the latest version of the Cascading Style Sheets language used to style and layout web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
    },
    bootstrap: {
        title: "Bootstrap",
        description: "Bootstrap is a powerful CSS framework for building responsive, mobile-first websites.",
        link: "https://getbootstrap.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    },
    github: {
        title: "GitHub",
        description: "GitHub is a platform for version control and collaboration, allowing developers to work together on projects.",
        link: "https://github.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    }
};

function openModal(tech) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = modalData[tech].title;
    document.getElementById("modal-description").innerText = modalData[tech].description;
    document.getElementById("modal-link").href = modalData[tech].link;
    document.getElementById("modal-logo").src = modalData[tech].logo;
    modal.style.display = "flex";
}

// Close modal function
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}