let acc = document.getElementsByClassName("tab-item__head");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let tabtext = this.nextElementSibling;
        if (tabtext.style.display === "flex") {
            tabtext.style.display = "none";
        } else {
            tabtext.style.display = "flex";
        }
    });
}