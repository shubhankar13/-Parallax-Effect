// Function to get the boarding pass
function getBoardingPass() {
    // You can add your logic here to generate and display the boarding pass
    alert("Your boarding pass has been sent to your email!");
}

// Function for web check-in
function webCheckIn() {
    // You can add your logic here for web check-in
    alert("You have successfully completed web check-in!");
}

// Function for entering passenger information
function enterPassengerInfo() {
    // You can add your logic here for entering passenger information
    alert("Please enter your passenger information.");
}

// Function for viewing safety regulations
function viewSafetyRegulations() {
    // You can add your logic here for viewing safety regulations
    alert("Here are the safety regulations for your journey.");
}

// Event listeners for triggering the functions
document.addEventListener("DOMContentLoaded", function() {
    const boardingPassBtn = document.getElementById("boarding-pass-btn");
    const webCheckInBtn = document.getElementById("web-checkin-btn");
    const passengerInfoBtn = document.getElementById("passenger-info-btn");
    const safetyRegulationsBtn = document.getElementById("safety-regulations-btn");

    if (boardingPassBtn) {
        boardingPassBtn.addEventListener("click", getBoardingPass);
    }

    if (webCheckInBtn) {
        webCheckInBtn.addEventListener("click", webCheckIn);
    }

    if (passengerInfoBtn) {
        passengerInfoBtn.addEventListener("click", enterPassengerInfo);
    }

    if (safetyRegulationsBtn) {
        safetyRegulationsBtn.addEventListener("click", viewSafetyRegulations);
    }
});
