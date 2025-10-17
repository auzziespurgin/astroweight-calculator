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

const planetDropdown = document.getElementById("planets");
populateDropdown();

// add secondary array for custom planets to append inside function

function populateDropdown() {
        planetDropdown.replaceChildren();
        const check = document.getElementById("remove-pluto").checked;
        let planetList = [];
        planetList = check === true ? planets.slice(1) : planets
        planetList.forEach(planet => {
                const planetName = planet[0];
                const option = document.createElement("option");
                option.value = planetName;
                option.textContent = planetName;
                planetDropdown.insertBefore(option,planetDropdown.firstChild); // Add options to top of the list instead of the bottom
        //        planetDropdown.appendChild(option);
        });
        planetDropdown.insertBefore(document.createElement("option"),planetDropdown.firstChild);
        planetDropdown.value = "";
};


function calculateWeight(weight, planetName) {
	return (weight * planets[planets.findIndex((elem) => planetName===elem[0])][1]);
};

function handleClickEvent(event) {
        event.preventDefault();
	const userWeight = document.getElementById("user-weight").value;
	const planetName = document.getElementById("planets").value;
	const newWeight = calculateWeight(userWeight,planetName);
        const result = "If you were on "+planetName+", you would weigh "+newWeight.toFixed(2) + "lbs!";
	document.getElementById("output").innerHTML = result;
};
