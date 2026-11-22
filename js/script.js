const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
        navigation.classList.toggle('open');

        const menuOuvert = navigation.classList.contains('open');

        menuButton.setAttribute('aria-expanded', menuOuvert);
        menuButton.setAttribute(
            'aria-label',
            menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'
        );

        menuButton.textContent = menuOuvert ? '×' : '☰';
    });
}

const appointmentForm = document.querySelector('#appointment-form');

if (appointmentForm) {
    const dateInput = appointmentForm.querySelector('input[type="date"]');

    if (dateInput) {
        const aujourdHui = new Date();
        const dateMinimum = aujourdHui.toISOString().split('T')[0];

        dateInput.min = dateMinimum;
    }

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const message = document.querySelector('#form-message');

        if (!appointmentForm.reportValidity()) {
            return;
        }

        message.textContent = 'Merci ! Votre demande de démonstration a bien été prise en compte. Aucune donnée n’a été envoyée.';

        appointmentForm.reset();
    });

    const submitButton = appointmentForm.querySelector('button[type="submit"]');

    if (submitButton) {
        submitButton.disabled = false;
    }
}