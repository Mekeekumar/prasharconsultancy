// Initialize Stripe
const stripe = Stripe('pk_test_your_publishable_key'); // Replace with your Stripe publishable key

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
});

// Appointment Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simulate backend API call to create a Stripe Checkout Session
    try {
        // For GitHub Pages, this requires a backend. Simulating response.
        const session = { id: 'cs_test_dummy_session' }; // Replace with actual fetch to your backend

        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (error) {
            alert('Payment error: ' + error.message);
        } else {
            alert(`Appointment booked for ${name} on ${date} at ${time}!`);
            this.reset();
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});