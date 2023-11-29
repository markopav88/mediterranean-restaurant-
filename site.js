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
