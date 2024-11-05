document.addEventListener("DOMContentLoaded", function() {
    function loadStylesheet() {
        const screenWidth = window.innerWidth;
        let cssFile;

    if (screenWidth <= 550) {
        cssFile = "./styles/styles-550.css";
    } else if (screenWidth <= 850) {
        cssFile = "./styles/styles-850.css";
    } else if (screenWidth <= 1250) {
        cssFile = "./styles/styles-1250.css";
    } else if (screenWidth <= 1400) {
        cssFile = "./styles/styles-1400.css";
    } 

   const existingLink = document.querySelector("link[data-dynamic-style]");
   if (existingLink) {
       if (existingLink.href.includes(cssFile)) {
           return;
       }
       existingLink.remove();
   }

   const linkElement = document.createElement("link");
   linkElement.rel = "stylesheet";
   linkElement.href = cssFile;
   linkElement.setAttribute("data-dynamic-style", "true");
   document.head.appendChild(linkElement);
}


loadStylesheet();

window.addEventListener("resize", loadStylesheet);
});