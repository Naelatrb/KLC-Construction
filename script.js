document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire par défaut

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Merci, ' + name + '! Nous vous contacterons bientôt.');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
