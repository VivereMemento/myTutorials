var myModule = (function () {

  var init = function () {
        _setUpListners();
      };

  var _setUpListners = function () {
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
      }

  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
  	this.classList.toggle('open');
  }

  function toggleActive(e) {
  	if(e.propertyName.includes('flex')) {
  		this.classList.toggle('open-active');
  	}
  }

      
  return {
    init: init
  }

})();

myModule.init();