export function calculateWeight(weight, planet) {
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

  for (let i = 0; i < planetData.length; i++) {
    const [planetName, gravity] = planetData[i];
    if (planetName === planet) {
      return gravity * weight;
    }
  }

  return null;
}

export function astroWeightCalculator() {
  const weight = parseFloat(document.getElementById('user-weight').value);
  const planet = document.getElementById('planets').value;
  const output = document.getElementById('output');

  const calculatedWeight = calculateWeight(weight, planet);
  const formattedWeight = calculatedWeight.toFixed(2).replace(/\.00$/, '');
  output.innerText = `If you were on ${planet}, you would weigh ${formattedWeight}lbs!`;
}

// ➡️ Move population into a function
export function addPlanetOptions() {
  const planetsSelect = document.getElementById('planets');

  [
    'Pluto', 'Neptune', 'Uranus', 'Saturn',
    'Jupiter', 'Mars', 'Moon', 'Earth',
    'Venus', 'Mercury', 'Sun'
  ].forEach(planet => {
    const option = document.createElement('option');
    option.value = planet;
    option.textContent = planet;
    planetsSelect.appendChild(option);
  });
}

// ➡️ Attach click after HTML is parsed (browser only)
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    addPlanetOptions();
    document.getElementById('calculate-button').addEventListener('click', astroWeightCalculator);
  });
}
