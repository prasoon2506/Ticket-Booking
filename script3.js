window.onload = function() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    if (bookingData) {
        // Display passenger name
        document.querySelector('.content-passenger').textContent = bookingData.firstName + " " + bookingData.lastName;
        // Display departure date
        document.querySelector('.content-date').textContent = bookingData.departureDate;
        // Display class
        document.querySelector('.content-class').textContent = bookingData.className;
        // Display 'From' and 'To' cities
        document.querySelector('.content-from-city').textContent = bookingData.fromCity || 'N/A';
        document.querySelector('.content-to-city').textContent = bookingData.toCity || 'N/A';
        // Display city codes
        document.querySelector('.source .code').textContent = bookingData.fromCode;
        document.querySelector('.destination .code').textContent = bookingData.toCode;

        // Generate random values for other fields
        document.querySelector('.content-seat').textContent = generateRandomSeat();
        document.querySelector('.content-boarding-time').textContent = generateRandomTime();
        document.querySelector('.content-travel-time').textContent = generateRandomTravelTime();
        document.querySelector('.content-arrival-time').textContent = generateRandomTime();
        document.querySelector('.content-gate').textContent = generateRandomGate();
    } else {
        alert('No booking data found.');
        window.location.href = 'index1.html';
    }

    // Generate and display the Scan ID
    displayScanID();
};

function generateRandomSeat() {
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const seats = ['A', 'B', 'C', 'D', 'E', 'F'];
    return rows[Math.floor(Math.random() * rows.length)] + seats[Math.floor(Math.random() * seats.length)];
}

function generateRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function generateRandomTravelTime() {
    const travelTime = Math.floor(Math.random() * 10) + 1;
    return `${travelTime} hrs`;
}

function generateRandomGate() {
    const gateLetters = ['A', 'B', 'C', 'D', 'E'];
    const gateNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return `${gateLetters[Math.floor(Math.random() * gateLetters.length)]}${gateNumbers[Math.floor(Math.random() * gateNumbers.length)]}`;
}

// Function to generate random alphanumeric characters for Scan ID
function generateScanID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let scanID = '';
    for (let i = 0; i < 12; i++) { // 12 characters long
        scanID += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return scanID;
}

// Display the generated Scan ID
function displayScanID() {
    const scanIDElement = document.querySelector('.scan-id');
    scanIDElement.textContent = generateScanID();
}
