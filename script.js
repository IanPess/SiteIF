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


// Funções para controlar a exibição dos modais de eventos
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das tabs dos dias
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');
    
    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe ativa de todas as tabs
            dayTabs.forEach(t => t.classList.remove('active'));
            // Adicionar classe ativa à tab clicada
            this.classList.add('active');
            
            // Esconder todos os conteúdos de dia
            dayContents.forEach(content => content.classList.remove('active'));
            
            // Mostrar o conteúdo correspondente à tab clicada
            const dayId = this.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        });
    });
});

// Função para abrir o modal de evento
function openEventModal(eventId) {
    const modal = document.getElementById(`event-modal-${eventId}`);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Impede rolagem da página
        
        // Fechar modal ao clicar fora do conteúdo
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeEventModal(eventId);
            }
        });
        
        // Fechar modal com a tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeEventModal(eventId);
            }
        });
    }
}

// Função para fechar o modal de evento
function closeEventModal(eventId) {
    const modal = document.getElementById(`event-modal-${eventId}`);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura rolagem da página
    }
}

// Adicionar efeito de hover nos cards de eventos
document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.event');
    
    events.forEach(event => {
        event.addEventListener('mouseenter', function() {
            this.classList.add('event-hover');
        });
        
        event.addEventListener('mouseleave', function() {
            this.classList.remove('event-hover');
        });
    });
});

    // Inicializa os eventos como invisíveis
    events.forEach(event => {
        event.style.opacity = '0';
        event.style.transform = 'translateX(-20px)';
        event.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verifica na carga da página e no scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);

function openModal(id) {
    document.getElementById('modal-' + id).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Previne rolagem da página quando o modal está aberto
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura a rolagem da página
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Fecha o modal ao pressionar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === 'block') {
                modals[i].style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    }
});
