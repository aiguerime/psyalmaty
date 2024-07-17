document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmation-message').style.display = 'block';
});

function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('language').addEventListener('change', function() {
    let language = this.value;
    // Logic to switch languages can be implemented here
    alert('Language switched to: ' + language);
});
