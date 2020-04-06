// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', (event) => {
const clickFunc = document.querySelector(".like")

// Your JavaScript code goes here!
clickFunc.addEventListener("click", event => { 
    // mimicServerCall()
  fetch("http://mimicServer.example.com")
    .then(mimicServerCall => { 
      
       mimicServerCall.json();
    } )
    .then((data) => {
      console.log(data);
})
})
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
