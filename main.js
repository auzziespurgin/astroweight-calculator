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

planets.forEach(planet => {
	const option = document.createElement("option");
	option.value = planet[0];
	option.textContent = planet[0];
        planetDropdown.appendChild(option);
});

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
