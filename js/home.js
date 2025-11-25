javascript
document.addEventListener('DOMContentLoaded', function() {
    // Внутренняя навигация
    const pageNavLinks = document.querySelectorAll('.page-nav a');
    
    pageNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Обновление активной ссылки
                    pageNavLinks.forEach(l => l.classList.remove('active-section'));
                    this.classList.add('active-section');
                }
            }
        });
    });
});
