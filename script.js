document.addEventListener('DOMContentLoaded', function() {
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');
    
    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove a classe active de todas as abas e conteúdos
            dayTabs.forEach(t => t.classList.remove('active'));
            dayContents.forEach(c => c.classList.remove('active'));
            
            // Adiciona a classe active na aba clicada
            tab.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const dayId = tab.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        });
    });
    
    // Scroll suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Efeito de animação para os eventos ao rolar a página
    const events = document.querySelectorAll('.event');
    
    function checkScroll() {
        events.forEach(event => {
            const elementTop = event.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                event.style.opacity = '1';
                event.style.transform = 'translateX(0)';
            }
        });
    }
    
    // Inicializa os eventos como invisíveis
    events.forEach(event => {
        event.style.opacity = '0';
        event.style.transform = 'translateX(-20px)';
        event.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verifica na carga da página e no scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});