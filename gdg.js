const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;
const header = document.querySelector('header');
const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const techGridItems = document.querySelectorAll('.tech-grid div');


toggleThemeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    
    faqQuestions.forEach(faq => faq.classList.toggle('dark-mode'));
    faqAnswers.forEach(answer => answer.classList.toggle('dark-mode'));

    techGridItems.forEach(item => item.classList.toggle('dark-mode'));

   
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Switch to Light Mode';
    } else {
        toggleThemeButton.textContent = 'Switch to Dark Mode';
    }
});


function autoScroll(scrollSpeed) {
    window.scrollBy(0, scrollSpeed); 
    if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
        window.scrollTo(0, 0);
    } else {
        setTimeout(() => autoScroll(scrollSpeed), 100); 
    }
}

let userScrolled = false;

window.addEventListener('scroll', () => {
    userScrolled = true;
});

setTimeout(() => {
    if (!userScrolled) {
        const scrollSpeed = 40; 
        autoScroll(scrollSpeed);
    }
}, 1000); 
