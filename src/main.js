// ==========================================
// Core Setup - Do not modify this section
// ==========================================

// This ensures that your JavaScript code only runs after the entire HTML page has loaded.
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    addPlanetOptions(); // Automatically populate the dropdown menu when the page loads
    document.getElementById('calculate-button').addEventListener('click', astroWeightCalculator); // Attach the button click to run your main calculator function
  });
}

// Global array containing planet names and their gravity factors relative to Earth.
// You will use this data to populate your dropdown menu and to calculate adjusted weights.
const planetData = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// ==========================================
// Student Task Section - Complete the functions below
// ==========================================

// This function should add <option> elements to the <select> dropdown menu.
// You will be using the data from the planetData array above.
export function addPlanetOptions() {
  // TODO:
  // 1. Get a reference to the <select> element with id="planets".
  // 2. Loop through the planetData array.
  // 3. For each planet:
  //    - Create a new <option> element.
  //    - Set the option's value and textContent to the planet's name.
  //    - Append the option element to the <select> element.
}

// This function should calculate the user's weight on the selected planet.
// It will use the input weight and the gravity factor from the planetData array.
export function calculateWeight(weight, planet) {
  // TODO:
  // 1. Loop through the planetData array.
  // 2. If the planet name matches the selected planet:
  //    - Multiply the input weight by the gravity factor.
  //    - Return the calculated weight.
  // 3. If no matching planet is found, return null.
}

// This function is called when the user clicks the "Calculate" button.
// It reads the user's input and selected planet, calculates the new weight,
// and updates the page with the result.
export function astroWeightCalculator() {
  // TODO:
  // 1. Get references to the input field (id="user-weight"), the dropdown menu (id="planets"), and the output paragraph (id="output").
  // 2. Read the user's input weight and selected planet.
  // 3. Validate the input:
  //    - If the weight is missing or invalid, or no planet is selected, clear the output and return.
  // 4. Call calculateWeight() to get the new weight.
  // 5. If a valid weight is returned:
  //    - Display a message like: "If you were on Mars, you would weigh 38.95lbs!" inside the output paragraph.
  //    - Format the number to two decimal places, and remove trailing ".00" if it exists.
}