document.getElementById('nav-login-btn').addEventListener('click', () => {
    new bootstrap.Modal(document.getElementById('login-modal')).toggle();
});

document.getElementById('nav-register-btn').addEventListener('click', () => {
    new bootstrap.Modal(document.getElementById('register-modal')).toggle();
})