var clock = (function () {

  var init = function () {
        _setUpListners();
      };

  var _setUpListners = function () {
			
      }

  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(suffix);
    // console.log(this.dataset);
    // console.log(this.value);
  }

  inputs.forEach(function(input) {
    input.addEventListener('change', handleUpdate);
  });
//inputs.forEach(input => input.addEventListener('change', handleUpdate));

  inputs.forEach(function(input) {
    input.addEventListener('mousemove', handleUpdate);
  });
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
      
  return {
    init: init
  }

})();

clock.init();