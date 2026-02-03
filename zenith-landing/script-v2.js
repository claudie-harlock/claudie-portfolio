// Zenith V2 - Claudie's Interactive Magic ✨

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Zenith V2 by Claudie loaded!');
    
    // === Cursor Glow Effect ===
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (cursorGlow && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }
    
    // === Smooth Scroll ===
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
    
    // === Intersection Observer for Animations ===
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-up {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .animate-scale {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-scale.visible {
            opacity: 1;
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);
    
    // Apply to elements
    document.querySelectorAll('.feature-card').forEach((el, i) => {
        el.classList.add('animate-fade-up');
        el.style.transitionDelay = `${i * 0.1}s`;
        animateOnScroll.observe(el);
    });
    
    document.querySelectorAll('.step-card').forEach((el, i) => {
        el.classList.add('animate-fade-up');
        el.style.transitionDelay = `${i * 0.15}s`;
        animateOnScroll.observe(el);
    });
    
    document.querySelectorAll('.pricing-card, .cta-card').forEach(el => {
        el.classList.add('animate-scale');
        animateOnScroll.observe(el);
    });
    
    // === Number Counter Animation ===
    const metricValues = document.querySelectorAll('.metric-value');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = parseInt(target.dataset.value) || 0;
                animateCounter(target, value);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    metricValues.forEach(el => counterObserver.observe(el));
    
    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // === Navbar Background on Scroll ===
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
            nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
        }
        
        lastScroll = currentScroll;
    });
    
    // === Card Tilt Effect ===
    document.querySelectorAll('.payment-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
    
    // === Button Magnetic Effect ===
    document.querySelectorAll('.btn-primary, .btn-glow').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
    
    // === Parallax Floating Shapes ===
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 0.1;
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // === Easter Egg: Konami Code ===
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        document.body.style.animation = 'rainbow 2s linear';
        const easterStyle = document.createElement('style');
        easterStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(easterStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        console.log('🎉 클로디가 만든 이스터에그 발견! 🦄');
    }
});
