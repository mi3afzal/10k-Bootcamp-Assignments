/* Using .filter()
 *
 * Using the athleteData array and .filter():
 *   - return only athlete objects where the athlete's income is more than
 *     7 characters long
 *   - store the returned data in a new `results` variable
 *
 * Note:
 *   - do not delete the athleteData variable
 *   - do not alter any of the athleteData content
 */

const athleteData = [
	{ athlete: "Lionel Messi", team: "Barcelona", income: 40000000 },
	{ athlete: "Cristiano Ronaldo", team: "Juventus", income: 30000000 },
	{ athlete: "Neymar", team: "Paris Saint-Germain", income: 36800000 },
	{ athlete: "Eden Hazard", team: "Chelsea", income: 10400000 },
	{ athlete: "Mohamed Salah", team: "Liverpool", income: 4680000 },
	{
		athlete: "Kylian Mbappé",
		team: "Paris Saint-Germain: An American Musical",
		income: 17500000
	},
	{ athlete: "Luka Modrić", team: "Real Madrid", income: 9360000 },
	{ athlete: "Harry Kane", team: "Tottenham Hotspurs", income: 17600000 },
	{ athlete: "Kevin De Bruyne", team: "Manchester City", income: 5980000 },
	{ athlete: "Paul Pogba", team: "Manchester United", income: 15080000 }
];

//const results = 'Replace this message with your code!';

//const results = athleteData.filter(entry => entry.income > 9999999);

const results = athleteData.filter(entry => entry.income.toString().length > 7);

console.log(results);
