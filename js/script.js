// Selecting the typed text and cursor spans from the DOM
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

// Array of text strings to be typed
const textArray = ["hard", "fun", "a journey", "LIFE"];

// Delay between typing each character
const typingDelay = 200;

// Delay between erasing each character
const erasingDelay = 100;

// Delay before typing a new string of text
const newTextDelay = 2000;

// Initialize the array and character indices
let textArrayIndex = 0;
let charIndex = 0;

// Function that types out a string of text
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // Add the typing class to the cursor if it doesn't have it
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");

    // Add the next character to the typed text span
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);

    // Increment the character index
    charIndex++;

    // Call this function again after the typing delay
    setTimeout(type, typingDelay);
  } else {
    // Remove the typing class from the cursor
    cursorSpan.classList.remove("typing");

    // Call the erase function after the new text delay
    setTimeout(erase, newTextDelay);
  }
}

// Function that erases a string of text
function erase() {
  if (charIndex > 0) {
    // Add the typing class to the cursor if it doesn't have it
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");

    // Remove the last character from the typed text span
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );

    // Decrement the character index
    charIndex--;

    // Call this function again after the erasing delay
    setTimeout(erase, erasingDelay);
  } else {
    // Remove the typing class from the cursor
    cursorSpan.classList.remove("typing");

    // Increment the text array index and loop back to the beginning if necessary
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;

    // Call the type function again with a delay of typingDelay + 1100
    setTimeout(type, typingDelay + 1100);
  }
}

// Wait for the DOM to load, then call the type function with a delay of newTextDelay + 250
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
