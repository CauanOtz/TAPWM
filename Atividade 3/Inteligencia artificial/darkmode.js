const darkModeToggle = document.querySelector('.bxs-moon');
const body = document.querySelector('body');


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('activeDark');
    
});