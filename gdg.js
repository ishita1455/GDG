const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;
const header = document.querySelector('header');
const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const techGridItems = document.querySelectorAll('.tech-grid div');

// Toggle Dark Mode
toggleThemeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    // Toggle dark mode for each FAQ question and answer
    faqQuestions.forEach(faq => faq.classList.toggle('dark-mode'));
    faqAnswers.forEach(answer => answer.classList.toggle('dark-mode'));

    // Toggle dark mode for each technology grid item
    techGridItems.forEach(item => item.classList.toggle('dark-mode'));

    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Switch to Light Mode';
    } else {
        toggleThemeButton.textContent = 'Switch to Dark Mode';
    }
});
