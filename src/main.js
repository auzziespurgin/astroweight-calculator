// Global array containing planets and their gravity factors relative to Earth
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

// Calculates the user's weight on a selected planet
export function calculateWeight(weight, planet) {
  for (let i = 0; i < planetData.length; i++) {
    const [planetName, gravity] = planetData[i];
    if (planetName === planet) {
      return gravity * weight;
    }
  }
}

// Calculates and displays the user's weight when the "Calculate" button is clicked
export function astroWeightCalculator() {
  const weightInput = document.getElementById('user-weight');
  const planetsSelect = document.getElementById('planets');
  const output = document.getElementById('output');

  const weight = parseFloat(weightInput.value);
  const planet = planetsSelect.value;


  const calculatedWeight = calculateWeight(weight, planet);

  const formattedWeight = calculatedWeight.toFixed(2).replace(/\.00$/, '');
  output.innerText = `If you were on ${planet}, you would weigh ${formattedWeight}lbs!`;

}

// Adds planet options to the planets <select> dropdown menu
export function addPlanetOptions() {
  const planetsSelect = document.getElementById('planets');

  planetData.forEach(([planetName]) => {
    const option = document.createElement('option');
    option.value = planetName;
    option.textContent = planetName;
    planetsSelect.appendChild(option);
  });
}

// Setup code that runs once the HTML document is fully loaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    addPlanetOptions();
    document.getElementById('calculate-button').addEventListener('click', astroWeightCalculator);
  });
}