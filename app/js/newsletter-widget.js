const toggleBtn = document.getElementById('newsletterToggle');
const popup = document.getElementById('newsletterPopup');
const closeBtn = document.getElementById('closePopup');
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
const confirmationMessage = document.getElementById('confirmationMessage');

// Toggle popup
toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});
//Esc close newsletter
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.getElementById('newsletterPopup')?.classList.add('hidden');

    }
});
// Fake submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    confirmationMessage.classList.remove('hidden');

    // Reset after 5s
    setTimeout(() => {
        confirmationMessage.classList.add('hidden');
        form.classList.remove('hidden');
        emailInput.value = '';
    }, 5000);
});