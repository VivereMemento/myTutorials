const myCheckBox = (function () {

	const init = function () {
		_setUpListners();
		};
	const _setUpListners = function () {
		checkBoxes.forEach((checkbox) => checkbox.addEventListener('click', clickCheck));
		}

	const checkBoxes = document.querySelectorAll('.inbox__input');

	let lastChecked;

	function clickCheck(e) {
		//Check if they had the shift key down
		// AND check that they are checking it
		let inBetween = false;
		if(e.shiftKey && this.checked) {
			// go ahead and do what we please

			checkBoxes.forEach(checkbox => {
				if (checkbox === this || checkbox === lastChecked) {
					inBetween = !inBetween;
				}

				if (inBetween) {
					checkbox.checked = true;
				}
			});
		}

		lastChecked = this;
	}
		
	return {
	init: init
	}

})();

myCheckBox.init();