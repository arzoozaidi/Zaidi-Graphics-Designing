/* =====================================================
   GRAPHIC DESIGN STUDIO
   MAIN JAVASCRIPT FILE
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       1. MOBILE NAVIGATION MENU
       ========================================== */

    const menuButton = document.querySelector(
        ".menu-toggle, .mobile-menu-btn"
    );

    const navigation = document.querySelector(
        ".nav-links, .nav-menu"
    );

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

            menuButton.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuButton.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after clicking a link

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuButton.classList.remove("active");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    /* ==========================================
       2. NAVBAR SCROLL EFFECT
       ========================================== */

    const navbar = document.querySelector(
        ".navbar, .site-header"
    );

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

    updateNavbar();


    /* ==========================================
       3. SCROLL REVEAL ANIMATION
       ========================================== */

    const animatedElements = document.querySelectorAll(
        ".reveal, .fade-up, [data-animate]"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );

        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* ==========================================
       4. SMOOTH SCROLLING
       ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(
        function (anchor) {

            anchor.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                if (!targetId || targetId === "#") return;

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        }
    );


    /* ==========================================
       5. PORTFOLIO IMAGE HOVER EFFECT
       ========================================== */

    const portfolioItems = document.querySelectorAll(
        ".portfolio-item, .project-card"
    );

    portfolioItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            item.classList.add("hover-active");

        });

        item.addEventListener("mouseleave", function () {

            item.classList.remove("hover-active");

        });

    });


    /* ==========================================
       6. BACK TO TOP BUTTON
       ========================================== */

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.className = "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(backToTop);

    function updateBackToTop() {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );

    updateBackToTop();

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==========================================
       7. ACTIVE NAVIGATION LINK
       ========================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(
        ".nav-links a, .nav-menu a"
    ).forEach(function (link) {

        const linkPage =
            link.getAttribute("href")?.split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* ==========================================
       8. WEBSITE LOADED
       ========================================== */

    document.body.classList.add("website-loaded");

});
