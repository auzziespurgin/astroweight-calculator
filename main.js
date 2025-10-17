
// Default list of planets & their weight multipliers
const planets = [
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

// Define the working list of planets & populate the dropdown menu
let planetList = [];
populateDropdown();

// Clears the dropdown menu, then repopulates; called on page load, "remove-pluto" checked, and addCustom()
function populateDropdown() {
        const planetDropdown = document.getElementById("planets");
        planetDropdown.replaceChildren();
        const check = document.getElementById("remove-pluto").checked;
        planetList = check === true ? planets.slice(1) : planets;
        planetList.forEach(planet => {
                const planetName = planet[0];
                const option = document.createElement("option");
                option.value = planetName;
                option.textContent = planetName;
                planetDropdown.insertBefore(option,planetDropdown.firstChild); // Add options to top of the list instead of the bottom
        //      planetDropdown.appendChild(option);
        });
        planetDropdown.insertBefore(document.createElement("option"),planetDropdown.firstChild); // Adds empty option to top of menu
        planetDropdown.value = ""; // Orients list to top (empty) option after populating
};

// Performs weight conversion calculation; called by handleClickEvent()
function calculateWeight(weight, planetName) {
	return (weight * planetList[planetList.findIndex((elem) => planetName===elem[0])][1]);
};

// Displays result when "calculate-button" is clicked
function handleClickEvent() {
	const userWeight = parseFloat(document.getElementById("user-weight").value.replace(",","."));
	const planetName = document.getElementById("planets").value;
        // Check for illegal inputs
        if (!userWeight || !planetName) {
                alert("Please use only numbers and decimals for the weight, and be sure to select a planet!")
                return;
        };
	const newWeight = calculateWeight(userWeight,planetName);
        const result = "If you were on "+planetName+", you would weigh "+newWeight.toFixed(2) + "lbs!";
	document.getElementById("output").innerHTML = result; // Replaces existing result on additional calls
};

// Appends default planet list with custom planet entries & repopulates the planet dropdown menu; called by "add-button"
function addCustom() {
        const planetName = document.getElementById("new-planet-name").value;
        const weightMultiplier = parseFloat(document.getElementById("new-planet-multiplier").value.replace(",","."));
        // Check for illegal inputs
        if (!weightMultiplier || !planetName) {
                alert("Please use only numbers and decimals for the weight multiplier, and be sure to name the planet!")
                return;
        };
        planets.push([planetName,Number(weightMultiplier)]);
        populateDropdown();
};