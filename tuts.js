const sum = (a, b) => a + b
const diff = (a, b) => a - b
class Calc
{
	constructor()
	{
		console.log('object created')
	}
}

module.exports = {
	sum: sum,
	diff: diff,
	Calc: Calc
}