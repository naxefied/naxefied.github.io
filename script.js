const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    updateThemeIcon(newTheme);
    updateServiceIcons(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.classList.add('hidden');
    setTimeout(() => {
        themeIcon.src = theme === 'dark' ? 'icons/moon.svg' : 'icons/sun.svg';
        themeIcon.classList.remove('hidden');
    }, 300);
}

function updateServiceIcons(theme) {
    const icons = document.querySelectorAll('.social-icon');
    
    icons.forEach(icon => {
        icon.classList.add('hidden');
    });

    setTimeout(() => {
        document.querySelector('.social-icon.telegram').src = theme === 'dark' ? 'icons/telegramd.svg' : 'icons/telegram.svg';
        document.querySelector('.social-icon.mail').src = theme === 'dark' ? 'icons/maild.svg' : 'icons/mail.svg';
        document.querySelector('.social-icon.github').src = theme === 'dark' ? 'icons/githubd.svg' : 'icons/github.svg';
        document.querySelector('.social-icon.mastodon').src = theme === 'dark' ? 'icons/mastodond.svg' : 'icons/mastodon.svg';
        
        icons.forEach(icon => {
            icon.classList.remove('hidden');
        });
    }, 300);
}
