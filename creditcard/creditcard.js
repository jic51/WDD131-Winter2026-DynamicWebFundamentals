document.getElementById('credit-card-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt("20" + document.getElementById('year').value);
    const feedback = document.getElementById('feedback');

    // Obtener fecha actual
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    feedback.classList.remove('hide', 'error', 'success');

    // 1. Validar número exacto
    if (cardNumber !== '1234567891011020') {
        showFeedback("Invalid Card Number", "error");
        return;
    }

    // 2. Validar que no esté expirada
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        showFeedback("Card is Expired", "error");
        return;
    }

    showFeedback("Payment Successful!", "success");
});

function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.innerText = message;
    feedback.classList.add(type);
    feedback.classList.remove('hide');
}