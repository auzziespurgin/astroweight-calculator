// main.js

// This array contains planet names and their gravity multipliers.
// You will use this data to populate the dropdown and perform calculations.
const planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.64],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9],
  ];
  
  /*
  Step 1:
  Select the <select> element in your HTML with the id "planets".
  Store it in a variable so you can use it to add <option> elements.
  Hint: use document.getElementById('planets')
  */
  
  
  /*
  Step 2:
  Loop through the planets array.
  For each planet:
    - Create a new <option> element
    - Set its `value` and `textContent` to the planet name
    - Append it to the dropdown element you selected in Step 1
  Hint: use document.createElement('option') and .appendChild()
  */
  
  /*
  Step 3:
  Write a function called `calculateWeight` that:
    - Takes in a user's Earth weight and the name of a planet
    - Finds the matching planet in the array
    - Multiplies the weight by that planet’s gravity
    - Returns the result
  */
  
  /*
  Step 4:
  Write a function called `handleClickEvent` that:
    - Gets the value of the input field with id "user-weight"
    - Gets the selected planet from the dropdown
    - Calls `calculateWeight` with these values
    - Sets the result text inside the element with id "output"
      Example: "If you were on Mars, you would weigh 38.95lbs!"
  Hint: you'll need to use .value and .textContent
  */
  
  /*
  Step 5:
  Set up a way for the button to call your `handleClickEvent` function.
  There are multiple valid ways to do this.
  
  Option A: Add an event listener in JavaScript
    document.getElementById('calculate-button').addEventListener('click', handleClickEvent);
  
  Option B: Use the `onclick` attribute in your HTML:
    <button id="calculate-button" onclick="handleClickEvent()">Calculate</button>
  
  Only choose ONE of these approaches in your solution.
  */
  