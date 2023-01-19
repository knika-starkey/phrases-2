/*
 * Check for browser support
 */
let supportMsg = document.getElementById("msg");

let voices = speechSynthesis.getVoices();

if ("speechSynthesis" in window) {
  // supportMsg.innerHTML =
  //   "Your browser <strong>supports</strong> speech synthesis.";
} else {
  supportMsg.innerHTML =
    'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
  supportMsg.classList.add("not-supported");
}

// Get the 'speak' button
let button = document.getElementById("speak");

// Get the text input element.
// let speechMsgInput = document.getElementById("speech-msg");
let speechMsgInput = document.getElementById("word");

// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
  let msg = new SpeechSynthesisUtterance();

  // Set the text.
  msg.text = text;

  // Set the attributes.
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;

  // Set the voice "Google UK English Female"
  let selectedVoice = "Google UK English Female";
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      msg.voice = voices[i];
      break;
    }
  }

  // Queue this utterance.
  window.speechSynthesis.speak(msg);
}

// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener("click", function (e) {
  // if (speechMsgInput.value.length > 0) {
  //   speak(speechMsgInput.value);
  // }
  if (speechMsgInput.innerText.length > 0) {
    speak(speechMsgInput.innerText);
  }
});
