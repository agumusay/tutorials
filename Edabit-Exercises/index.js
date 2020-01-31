//1 - Volume of a box

function volumeOfBox(sizes) {
	return (sizes.width * sizes.length ) * sizes.height;

	//Eeasy
}

console.log(volumeOfBox({ width: 6, length: 4, height: 10 }));


//2 - extract City Facts

function cityFacts(city) {
	return  `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
	//Easy
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }) )

//3 - Does the Object Contain a Given Key?

function hasKey(obj, key) {
	 return (Object.keys(obj).includes(key))
	//Easy
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"))


//4 - Calculate the Profit

function profit(info) {
	return Math.round((info.sellPrice*info.inventory) - (info.costPrice*info.inventory));
	// Round the end Result - Get the Values(info.sellPrice etc.) (sellPrice * inventory ) - (costPrice * inventory)
}


console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
  }));


//5 - Planetary Weight Converter

function spaceWeights(planetA, weight, planetB) {
	//Define Planets 
	let planets = {
		Earth: 9.81,
		Venus: 8.87,
		Mercury: 3.7,
		Mars: 3.711,
		Jupiter: 24.79,
        Saturn:	10.44,
        Uranus:	8.69,
        Neptune: 11.15
	};
	 return ((weight/planets[planetA])*planets[planetB]).toFixed(2);
	 // given weight divided by planets gravitional force gives us the weight on this planet 
	 // then we multiply the result with the target Planet. 
	 // to get the last digits right we fix the digits to 2 
}

console.log(spaceWeights("Earth", 1, "Mars"));


//6 - International Greetings

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	//Return Hi! I'am a guest. if object doesn't contain the given Name
		if(!Object.keys(GUEST_LIST).includes(name)) {return `Hi! I'm a guest.`} else { 
	//Otherwise We return the wanted text with Template String 
		return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`}
		
}

console.log(greeting("Sam"));