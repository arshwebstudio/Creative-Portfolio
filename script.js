/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show-menu");

}


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("show-menu");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".project, .service-item, .process-card, .stats"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const footerCopyright = document.querySelector(".footer-bottom p");

if (footerCopyright) {

    footerCopyright.textContent =
        `© ${new Date().getFullYear()} Alex Morgan. Portfolio demo.`;

}