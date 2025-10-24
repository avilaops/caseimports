// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Form submission para WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const produto = document.getElementById('produto').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Validação básica
        if (!nome || !telefone || !produto) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Construir mensagem para WhatsApp
        let whatsappMessage = `Olá! Meu nome é ${nome}.\n\n`;
        whatsappMessage += `📱 Telefone: ${telefone}\n`;
        whatsappMessage += `🛍️ Produto de interesse: ${produto}\n`;
        
        if (mensagem) {
            whatsappMessage += `💬 Mensagem: ${mensagem}\n`;
        }
        
        whatsappMessage += `\nGostaria de conhecer mais sobre os produtos da TechStore!`;
        
        // Codificar mensagem para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/5517981256580?text=${encodedMessage}`;
        
        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Limpar formulário
        contactForm.reset();
        
        // Feedback para o usuário
        showNotification('Redirecionando para o WhatsApp...', 'success');
    });
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#FF6B00'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Animação on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.produto-card, .diferencial-item, .contato-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header scroll effect
function headerScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, var(--secondary-color) 0%, var(--background-dark) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Contador animado para estatísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const finalValue = counter.textContent;
                const isStars = finalValue.includes('★');
                
                if (!isStars) {
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    let currentValue = 0;
                    const increment = numericValue / 50;
                    
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            counter.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(currentValue) + '+';
                        }
                    }, 30);
                }
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Lazy loading para melhor performance
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Botão de voltar ao topo
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(255, 107, 0, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Mostrar/esconder baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll para o topo
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Tracking de eventos (Google Analytics, Facebook Pixel, etc.)
function trackEvent(action, category, label) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            content_category: category,
            content_name: label
        });
    }
    
    console.log(`Event tracked: ${action} - ${category} - ${label}`);
}

// Adicionar tracking aos botões de WhatsApp
function addWhatsAppTracking() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent.trim();
            trackEvent('whatsapp_click', 'engagement', buttonText);
        });
    });
}

// Função para detectar dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Otimizações para mobile
function optimizeForMobile() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Melhorar performance do scroll
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        
        // Preload crítico do WhatsApp
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://wa.me/5517981256580';
        link.as = 'document';
        document.head.appendChild(link);
    }
}

// Inicializar todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('TechStore Landing Page carregada!');
    
    // Inicializar funcionalidades
    animateOnScroll();
    headerScrollEffect();
    animateCounters();
    lazyLoadImages();
    createBackToTopButton();
    addWhatsAppTracking();
    optimizeForMobile();
    
    // Preload do WhatsApp para melhor UX
    setTimeout(() => {
        const whatsappLink = document.createElement('link');
        whatsappLink.rel = 'prefetch';
        whatsappLink.href = 'https://wa.me/5517981256580';
        document.head.appendChild(whatsappLink);
    }, 2000);
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registrado: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW falhou: ', registrationError);
            });
    });
}

// Função para lidar com erros de carregamento
window.addEventListener('error', (e) => {
    console.error('Erro na página:', e.error);
    // Aqui você pode enviar erros para um serviço de monitoramento
});

// Performance monitoring
window.addEventListener('load', () => {
    setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Tempo de carregamento:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }, 0);
});