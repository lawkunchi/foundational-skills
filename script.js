// Get all elements with the class 'content' and convert the HTMLCollection to an array
let contents = Array.from(document.getElementsByClassName('content'));

// Get the element with the id 'counter'
let counter = document.getElementById('counter');

// Initialize a variable to keep track of the currently visible content to hide it
let current = 0;

// Add a click event listener to the element with the id 'toggleButton'
document.getElementById('toggleButton').addEventListener('click', function () {
    // Remove the 'visible' class from the currently visible content to hide it
    contents[current].classList.remove('visible');

    // Increment the current index, and use the modulus operator to cycle back to 0 when the end of the array is reached
    current = (current + 1) % contents.length;

    // Add the 'visible' class to the next content in the cycle to show it
    contents[current].classList.add('visible');

    // Update the text content of the counter to show which content is currently visible
    counter.textContent = 'Showing ' + (current + 1) + ' of ' + contents.length;
});