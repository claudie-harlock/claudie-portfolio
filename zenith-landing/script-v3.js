// Zenith V3 - Multi.app Style

document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    ███████╗███████╗███╗   ██╗██╗████████╗██╗  ██╗
    ╚══███╔╝██╔════╝████╗  ██║██║╚══██╔══╝██║  ██║
      ███╔╝ █████╗  ██╔██╗ ██║██║   ██║   ███████║
     ███╔╝  ██╔══╝  ██║╚██╗██║██║   ██║   ██╔══██║
    ███████╗███████╗██║ ╚████║██║   ██║   ██║  ██║
    ╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝  ╚═╝
    
    Built with 💜 by Claudie
    `);
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Apply animations
    document.querySelectorAll('.feature-card, .step-item, .pricing-box').forEach((el, i) => {
        el.classList.add('animate-up');
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });
    
    // Terminal typing effect
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 500 + i * 400);
    });
    
    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.style.background = 'rgba(250, 250, 250, 0.98)';
        } else {
            nav.style.background = 'rgba(250, 250, 250, 0.9)';
        }
    });
    
    // Feature card hover sound (optional visual feedback)
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.15s ease';
        });
    });
    
    // Title text scramble effect on hover
    const titleLines = document.querySelectorAll('.title-line');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    titleLines.forEach(line => {
        const originalText = line.textContent;
        
        line.addEventListener('mouseenter', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                line.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) return originalText[index];
                        if (char === ' ') return ' ';
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if (iterations >= originalText.length) clearInterval(interval);
                iterations += 1;
            }, 30);
        });
    });
});
