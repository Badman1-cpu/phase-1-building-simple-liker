// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden"); // Add hidden class initially
  
  const likeButton = document.getElementById("like-button");
  likeButton.addEventListener("click", () => {
      mimicServerCall()
          .then(() => {
              // On success
              likeButton.classList.add("activated-heart");
          })
          .catch(() => {
              // On failure
              errorModal.classList.remove("hidden"); // Show error modal
              const errorMessage = document.getElementById("modal-message");
              errorMessage.textContent = "Server Error! Please try again later."; // Display error message
              setTimeout(() => {
                  errorModal.classList.add("hidden"); // Hide error modal after 3 seconds
              }, 3000);
          });
  });
});

// Provided function to simulate server call
function mimicServerCall() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const randomNum = Math.random();
          if (randomNum < 0.5) {
              resolve("success");
          } else {
              reject("error");
          }
      }, 1000);
  });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
