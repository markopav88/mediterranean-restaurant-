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

document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById('reservationForm');
  
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const formData = new FormData(reservationForm);
      const reservationDetails = Object.fromEntries(formData.entries());
  
      console.log('Reservation details:', reservationDetails);
  
      alert('Reservation booked! We will get in touch shortly.');
      reservationForm.reset(); 
    });
  });

  let textVisibility = {
    'ourStoryText': false,
    'ourPhilosophyText': false,
    'ourMissionText': false
};

function toggleText(id) {
    if (id === undefined) {
        id = 'ourStoryText'; 
    }

    const text = document.getElementById(id);
    textVisibility[id] = !textVisibility[id];

    if (textVisibility[id]) {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
    
    
    
}