document.addEventListener('DOMContentLoaded', function() {
    
    // --- Rolagem Suave para links do menu ---
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // O offset de rolagem considera a altura do header fixo
            const headerOffset = 100; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // --- Agenda Interativa (Accordion) ---
    const allShowItems = document.querySelectorAll('.show-item');
    allShowItems.forEach(item => {
        const header = item.querySelector('.show-item-header');
        header.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            allShowItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // --- NOVO: Efeito do Header ao Rolar a Página ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // A partir de 50px de rolagem
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

});