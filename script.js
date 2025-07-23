document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Abre/fecha o item clicado
            item.classList.toggle('active');
        });
    });

    // Formulário de Reparo
    const repairForm = document.getElementById('repairForm');
    
    if (repairForm) {
        repairForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simula um delay de envio
            setTimeout(() => {
                submitBtn.textContent = 'Enviado com Sucesso!';
                
                // Reset após 3 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    repairForm.reset();
                    
                    // Mostra mensagem de sucesso (pode ser substituído por um modal)
                    alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');
                }, 3000);
            }, 1500);
        });
    }

    // Botão Voltar ao Topo
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efeito de scroll para as seções
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verifica na carga inicial
    checkScroll();
    
    // Verifica durante o scroll
    window.addEventListener('scroll', checkScroll);

    // Adiciona classe de header scrollado
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(1, 0, 13, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'var(--primary-dark)';
        }
    });

    // Anima os elementos quando entram na viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-up, .fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
   
    
    // Verifica na carga inicial
    animateOnScroll();
    
    // Verifica durante o scroll
    window.addEventListener('scroll', animateOnScroll);

    // Botões de compra - simulação
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const phoneTitle = this.closest('.phone-content').querySelector('.phone-title').textContent;
            const phonePrice = this.closest('.phone-content').querySelector('.phone-price').textContent;
            
            // Aqui você pode redirecionar para um checkout ou abrir um modal
            alert(`Você selecionou: ${phoneTitle}\nPreço: ${phonePrice}\n\nRedirecionando para o WhatsApp...`);
            
            // Simula redirecionamento para o WhatsApp
            setTimeout(() => {
                window.open('https://wa.me/5581982734143', '_blank');
            }, 1500);
        });
    });
});