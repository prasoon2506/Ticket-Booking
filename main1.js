document.querySelector('.booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
  
    const bookingData = {
      destination,
      departureDate,
      returnDate,
      passengers
    };
  
    // Example of sending the booking data to a server (AJAX)
    fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => alert('Booking successful!'))
    .catch(error => alert('Error: ' + error));
  });
  