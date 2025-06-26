// Constants for heart states
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Hide the modal on page load
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Select all heart elements
const heartIcons = document.querySelectorAll('.like-glyph');

// Add click event listeners
heartIcons.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart state on success
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        // Display error modal on failure
        const errorMessage = document.getElementById('modal-message');
        errorMessage.textContent = error;
        errorModal.classList.remove('hidden');

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Provided function: mimicServerCall
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Simulate random success/failure
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
