// Zenith V6 - Trading/FXIFY Style

document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║   △ ZENITH                                       ║
    ║   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        ║
    ║   Global Creator Payment Platform                ║
    ║                                                  ║
    ║   Built with 💜 by Claudie                       ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
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
    
    // Parallax for orbs
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.orb').forEach((orb, i) => {
            const speed = (i + 1) * 20;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
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
    }, { threshold: 0.1 });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-up {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Apply animations
    document.querySelectorAll('.feature-card, .stat-item, .pricing-card').forEach((el, i) => {
        el.classList.add('animate-up');
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });
    
    // Counter animation
    const animateCounter = (el, target, suffix = '') => {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            el.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    };
    
    // Trigger counter
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                
                if (text.includes('₩')) {
                    const match = text.match(/[\d.]+/);
                    if (match) {
                        const num = parseFloat(match[0]);
                        const startTime = performance.now();
                        const duration = 2000;
                        
                        const animate = (currentTime) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeOut = 1 - Math.pow(1 - progress, 3);
                            const current = (num * easeOut).toFixed(1);
                            el.textContent = `₩${current}B+`;
                            if (progress < 1) requestAnimationFrame(animate);
                        };
                        requestAnimationFrame(animate);
                    }
                } else if (text.includes('+')) {
                    const match = text.match(/[\d,]+/);
                    if (match) {
                        const num = parseInt(match[0].replace(/,/g, ''));
                        animateCounter(el, num, '+');
                    }
                } else if (text.includes('min')) {
                    // Skip, keep as is
                } else {
                    const match = text.match(/[\d,]+/);
                    if (match) {
                        const num = parseInt(match[0].replace(/,/g, ''));
                        animateCounter(el, num, '+');
                    }
                }
                
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-value').forEach(el => {
        counterObserver.observe(el);
    });
    
    // Phone tilt effect
    const phone = document.querySelector('.phone-mockup');
    if (phone) {
        document.addEventListener('mousemove', (e) => {
            const rect = phone.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 30;
            const y = (e.clientY - rect.top - rect.height / 2) / 30;
            
            phone.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 10}px) rotate(-5deg) rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }
    
    // Glow buttons hover effect
    document.querySelectorAll('.btn-glow').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });
});
