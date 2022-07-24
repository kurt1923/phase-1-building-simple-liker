// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const getHearts = document.querySelectorAll(".like-glyph")


getHearts.forEach(function(heart) {
  heart.addEventListener('click', (e) => {
    mimicServerCall()
      .then(function () {
       if(heart.innerHTML === FULL_HEART){
        heart.innerHTML = EMPTY_HEART
        heart.className = ""
       }
       else {
        heart.innerHTML = FULL_HEART
       heart.className = "activated-heart"
       }
       console.log("thenfiring")
      })
      .catch(function (object) {
        const modal = document.querySelector("#modal")
        modal.className = ""
        setTimeout(() => {
          modal.className = "hidden"
        }, 3000);
        console.log("notfiring")

      })
  })
})



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
