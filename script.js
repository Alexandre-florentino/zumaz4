document.addEventListener('DOMContentLoaded', function() {
    // ===== MENU MOBILE =====
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

    // ===== FORMULÁRIO DE REPARO =====
    const repairForm = document.getElementById('repairForm');
    
    if (repairForm) {
        repairForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Enviado com Sucesso!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    repairForm.reset();
                    alert('Solicitação enviada! Entraremos em contato em breve.');
                }, 3000);
            }, 1500);
        });
    }

    // ===== BOTÃO VOLTAR AO TOPO =====
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== ANIMAÇÕES AO SCROLL =====
    function animateOnScroll() {
        document.querySelectorAll('.slide-up, .fade-in').forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // ===== HEADER SCROLL =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 50 
            ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
            : 'none';
        header.style.background = window.scrollY > 50 
            ? 'rgba(1, 0, 13, 0.95)' 
            : 'var(--primary-dark)';
    });

    // ===== BOTÕES DE COMPRA =====
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneTitle = this.closest('.phone-content').querySelector('.phone-title').textContent;
            const phonePrice = this.closest('.phone-content').querySelector('.phone-price').textContent;
            alert(`Você selecionou: ${phoneTitle}\nPreço: ${phonePrice}`);
            setTimeout(() => window.open('https://wa.me/5581982734143', '_blank'), 1500);
        });
    });
});
