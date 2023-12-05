document.addEventListener("DOMContentLoaded", function () {
    const aboutUsButton = document.querySelector('.about-us-button');
    const aboutUsModal = document.getElementById('aboutUsModal');

    aboutUsButton.addEventListener('click', function () {
        aboutUsModal.style.display = 'block';
    });

    window.closeAboutUsModal = function () {
        aboutUsModal.style.display = 'none';
    };

    aboutUsModal.addEventListener('click', function (event) {
        if (event.target === aboutUsModal) {
            closeAboutUsModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeAboutUsModal();
        }
    });
});
// add alert to confirm the resirvation. 
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById('reservationForm');
  
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from submitting (for demonstration purposes)
  
      // You can access the form data here and perform actions (e.g., display a confirmation message)
      const formData = new FormData(reservationForm);
      const reservationDetails = Object.fromEntries(formData.entries());
  
      console.log('Reservation details:', reservationDetails);
  
      // For demonstration purposes, display a confirmation message
      alert('Reservation booked! We will get in touch shortly.');
      reservationForm.reset(); // Reset the form after submission (optional)
    });
  });

  let textVisibility = {
    'ourStoryText': false,
    'ourPhilosophyText': false,
    'ourMissionText': false
};

function toggleText(id) {
    if (id === undefined) {
        id = 'ourStoryText'; // Default to 'ourStoryText' if no id is provided
    }

    const text = document.getElementById(id);
    textVisibility[id] = !textVisibility[id];

    if (textVisibility[id]) {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}
