// Zenith V4 - VC Style

document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    ╔═══════════════════════════════════════════╗
    ║                                           ║
    ║   △ ZENITH                                ║
    ║   Creator Infrastructure Fund             ║
    ║                                           ║
    ║   We invest in creators.                  ║
    ║                                           ║
    ╚═══════════════════════════════════════════╝
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
    
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-fade.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Apply animations
    document.querySelectorAll('.offering-card, .portfolio-card, .metric-item, .terms-card').forEach((el, i) => {
        el.classList.add('animate-fade');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });
    
    // Navbar on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.style.background = 'rgba(250, 250, 250, 0.98)';
        } else {
            nav.style.background = 'rgba(250, 250, 250, 0.9)';
        }
    });
    
    // Counter animation for stats
    const animateValue = (element, start, end, duration) => {
        const startTime = performance.now();
        const isNumber = !isNaN(end);
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            if (isNumber) {
                const current = Math.floor(start + (end - start) * easeOut);
                element.textContent = current.toLocaleString();
            }
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    };
    
    // Trigger counter on scroll
    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                
                // Extract number
                const match = text.match(/[\d,]+/);
                if (match) {
                    const num = parseInt(match[0].replace(/,/g, ''));
                    const prefix = text.substring(0, text.indexOf(match[0]));
                    const suffix = text.substring(text.indexOf(match[0]) + match[0].length);
                    
                    const tempSpan = document.createElement('span');
                    el.textContent = prefix;
                    el.appendChild(tempSpan);
                    el.append(suffix);
                    
                    animateValue(tempSpan, 0, num, 2000);
                }
                
                metricObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.metric-value, .stat-value').forEach(el => {
        metricObserver.observe(el);
    });
});
