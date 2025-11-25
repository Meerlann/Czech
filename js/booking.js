javascript
// Обработка формы бронирования
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация формы
            if (validateForm()) {
                // В реальном приложении здесь будет отправка данных на сервер
                alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                this.reset();
            }
        });
        
        // Динамическое обновление цены при выборе тура
        const tourSelect = document.getElementById('tour-name');
        const priceDisplay = document.getElementById('price-display');
        
        if (tourSelect && priceDisplay) {
            tourSelect.addEventListener('change', updatePrice);
        }
    }
});

function validateForm() {
    const requiredFields = document.querySelectorAll('#booking-form [required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

function updatePrice() {
    const tourSelect = document.getElementById('tour-name');
    const priceDisplay = document.getElementById('price-display');
    const prices = {
        'prague': '25 000',
        'krumlov': '18 000',
        'karlovy_vary': '22 000',
        'brno': '20 000'
    };
    
    if (tourSelect.value && priceDisplay) {
        priceDisplay.textContent = `от ${prices[tourSelect.value]} руб.`;
    }
}
