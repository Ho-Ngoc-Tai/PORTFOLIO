<script>
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".hidden");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add("visible");
            }
        });
        }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initial state
    });
</script>