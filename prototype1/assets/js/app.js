// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        
        header.addEventListener('click', function() {
            // Close all items
            accordionItems.forEach(accItem => {
                if (accItem !== item) {
                    accItem.classList.remove('active');
                    const content = accItem.querySelector('.accordion__content');
                    content.style.display = 'none';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            const content = item.querySelector('.accordion__content');
            
            if (item.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Floating CTA visibility
    const floatingCta = document.querySelector('.floating-cta');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            floatingCta.classList.remove('floating-cta--hidden');
        } else {
            floatingCta.classList.add('floating-cta--hidden');
        }
    });
    
    // Initialize with hidden state
    floatingCta.classList.add('floating-cta--hidden');
    
    // Add animation to cards on scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.refined-card');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight * 0.85) {
                card.classList.add('fade-in');
            }
        });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    // Countdown timer functionality
    const updateTimer = function() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
        const diff = endOfMonth - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.querySelectorAll('.limited-offer__timer-item').forEach((item, index) => {
            const numberElement = item.querySelector('.limited-offer__timer-number');
            if (index === 0) numberElement.textContent = days;
            if (index === 1) numberElement.textContent = hours;
            if (index === 2) numberElement.textContent = minutes;
            if (index === 3) numberElement.textContent = seconds;
        });
    };
    
    // Update timer immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
});