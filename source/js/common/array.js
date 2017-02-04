const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Gurie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = [ 'Beck, Glenn', 'Becker, Carl', 'Beccett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethove, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson,  Luciano', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Berhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrel, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William' ]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(inventor => ( inventor.year >= 1500 && inventor.year < 1599 ));

// const fifteen = inventors.filter(function(inventor) {
// 	if ( inventor.year >= 1500 && inventor.year < 1599) {
// 		return true
// 	}
// });

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last name

const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// const fullName = inventors.map(function(inventor) {
// 	return inventor.first + ' ' + inventor.last;
// });

console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by berthdate, oldest to youngest

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// const ordered = inventors.sort(function(a, b) {
// 	if(a.year > b.year) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// });

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0);

// var totalYears = 0;

// for (var i = 0; i < inventors.length; i++) {
// 	totalYears += inventors[i].passed - inventors[i].year
// }

console.log(totalYears);

// Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {

	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy < nextGuy ? 1 : -1;

});
console.table(oldest);

// 6. create a list of Boulevards in Pares that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevars_in_Paris

/*

const category = document.querySelector('#mw-content-text');
const links = Array.from(category.querySelectorAll('a'));
const de = links
			.map(link => link.textContent)
			.filter(streetName => streetName.includes('20'));

*/

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {

	const [aLast, aFirst] = lastOne.split(', ');
	const [bLast, bFirst] = nextOne.split(', ');
	return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((obj, item) => {
	if(!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.log(transportation);

// *************** PROMUA ***************** //

// const block = document.querySelector('.b-product-line');
// const blockContent = block.querySelectorAll('.b-product-gallery__content-spacer');
// const contentArray = Array.from(blockContent);
// const prices = contentArray.map(price => `${price.innerText}`);
// console.log(prices);