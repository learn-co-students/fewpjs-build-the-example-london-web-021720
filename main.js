// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', (event) => {

  let clickFunc = document.querySelectorAll(".like")
// let heart = document.querySelectorAll(".like-glyph")
let errorArea = document.querySelector("#modal")
let pTag = errorArea.querySelector("p")


// Your JavaScript code goes here!
clickFunc.forEach(list => {
  const heart = list.querySelector(".like-glyph")
  list.addEventListener("click", event => { 
  
  mimicServerCall("http://mimicServer.example.com")
    .then(response => { 
      console.log(response)

       
        if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        }
        else {
       
          heart.innerHTML = EMPTY_HEART
         
      }
  
  })
    .catch(error =>  {
      errorArea.classList.remove("hidden");
      pTag.innerHTML = error
     setTimeout(() => {errorArea.classList.add("hidden")},5000)
       
    })
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
