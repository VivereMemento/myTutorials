var myModule = (function () {

	var init = function () {
			_setUpListners();
		};

	var _setUpListners = function () {
			panels.forEach(panel => panel.addEventListener('click', toggleOpen));
			panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
		}

	const panels = document.querySelectorAll('.panel');

	function removeClass() {
		panels.forEach(panel => {
			if(panel.classList.contains('open')) {
				panel.classList.remove('open');
			}
		});
	};
		
	function toggleOpen() {
		removeClass();
		this.classList.add('open');
	}

	function toggleActive(e) {
		// MacOS e.propertyName('flex')
		// Chrom e.propertyName('flex-grow')
		if(e.propertyName.includes('flex')) {
			this.classList.toggle('open-active');
		}
	}

			
	return {
		init: init
	}

})();

myModule.init();