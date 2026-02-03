// Zenith V5 - Hybrid

document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    △ ZENITH
    Your creator infrastructure partner.
    
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
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Apply animations
    const animatedElements = document.querySelectorAll('.step-card, .feature-card, .creator-card, .pricing-card, .cstat');
    animatedElements.forEach((el, i) => {
        el.classList.add('animate-up');
        el.style.transitionDelay = `${(i % 3) * 0.1}s`;
        observer.observe(el);
    });
    
    // Navbar background
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.style.background = 'rgba(250, 250, 249, 0.98)';
            nav.style.borderBottomColor = 'var(--border-dark)';
        } else {
            nav.style.background = 'rgba(250, 250, 249, 0.9)';
            nav.style.borderBottomColor = 'var(--border)';
        }
    });
    
    // Counter animation
    const animateCounter = (el, target, duration = 2000) => {
        const start = 0;
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            el.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    };
    
    // Trigger counter on scroll
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                const match = text.match(/[\d,]+/);
                
                if (match) {
                    const num = parseInt(match[0].replace(/,/g, ''));
                    const prefix = text.substring(0, text.indexOf(match[0]));
                    const suffix = text.substring(text.indexOf(match[0]) + match[0].length);
                    
                    el.dataset.prefix = prefix;
                    el.dataset.suffix = suffix;
                    
                    const updateText = (val) => {
                        el.textContent = prefix + val.toLocaleString() + suffix;
                    };
                    
                    const startTime = performance.now();
                    const duration = 2000;
                    
                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(num * easeOut);
                        updateText(current);
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    
                    requestAnimationFrame(animate);
                }
                
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.cstat-value, .stat-num').forEach(el => {
        counterObserver.observe(el);
    });
    
    // Feature card hover effect
    document.querySelectorAll('.feature-card:not(.featured)').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border-dark)';
        });
    });
});
