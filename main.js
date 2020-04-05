// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like")
const errorHeader = document.getElementById("modal")

document.addEventListener("DOMContentLoaded", () => {
  
  likes.forEach(like => {
    like.addEventListener("click", e => {
      mimicServerCall()
      .then(() => {
        const currentLikeHeart = like.querySelector("span")
        if (currentLikeHeart.classList.contains("activated-heart"))
        {
          currentLikeHeart.classList.remove("activated-heart")
          currentLikeHeart.innerText = EMPTY_HEART
        }
        else
        {
          currentLikeHeart.classList.add("activated-heart")
          currentLikeHeart.innerText = FULL_HEART
        }
      })
      .catch(error => {
        console.log(error)
        errorHeader.classList.remove("hidden")
        window.setTimeout(() => errorHeader.classList.add("hidden"), 5000)
      })
      console.log(e)
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
