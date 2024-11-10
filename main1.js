document.querySelector('.booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fromCity = document.getElementById('source').value.trim();
  const toCity = document.getElementById('destination').value.trim();

  const bookingData = {
      firstName: document.getElementById('first-name').value.trim(),
      lastName: document.getElementById('last-name').value.trim(),
      fromCity: fromCity,
      toCity: toCity,
      fromCode: fromCity.substring(0, 3).toUpperCase(),
      toCode: toCity.substring(0, 3).toUpperCase(),
      departureDate: document.getElementById('departure-date').value,
      className: document.getElementById('class').value,
      passengers: document.getElementById('adult').value.trim()
  };

  // Store booking data in localStorage
  localStorage.setItem('bookingData', JSON.stringify(bookingData));

  // Redirect to boarding pass page
  window.location.href = 'index3.html';
});
