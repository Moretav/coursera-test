document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment processed successfully!');
});
