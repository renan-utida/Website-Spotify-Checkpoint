const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", function() {
        const panel = this.nextElementSibling;
        
        // Toggle the active class for the question
        this.classList.toggle("active");

        // Toggle the panel visibility
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});