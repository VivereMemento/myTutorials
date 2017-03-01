const myConsole = (function () {

	const init = function () {
		_setUpListners();
		};
	const _setUpListners = function () {
			const a = document.querySelectorAll('a');
			a.forEach(item => {
				if(item.classList.contains('trig')) {
					item.addEventListener('click', makeGreen);
				}
			});
		}

	const dogs = [
		{name: 'Snickers', age: 2},
		{name: 'Hugo', age: 9}
	];


	function makeGreen() {
		// const trigger = document.querySelector('.trig');
		this.style.color = '#d81f73';

		// Regular 
		console.log('Hello'); // Hello

		// Interpolated
		console.log('Hello I am a %s string!', 'GREAT'); // Hello I am a GREAT string!

		// Styled
		console.log('%c I am some great text', 'color: pink');

		// Warning
		console.warn('OH NOOO');

		// Error :/
		console.error('Shit!');

		// Info
		console.info('Crocodiles eat 3-4 people per year');

		// Testing
		const a = document.querySelector('a');
		console.assert(a.classList.contains('trigger'), 'That is wrong!');

		// Clearing
		// console.clear();

		// Viewing DOM Elements
		console.log(a);
		console.dir(a);

		// Grouping together
		dogs.forEach(dog => {
			console.group(`${dog.name}`);
			console.log(`This is ${dog.name}`);
			console.log(` ${dog.name} is ${dog.age} years old`);
			console.groupEnd(`${dog.name}`);
		});
	}
		
	return {
	init: init
	}

})();

myConsole.init();