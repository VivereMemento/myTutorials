var clock = (function () {

  var init = function () {
        if(document.querySelectorAll('.colck').length) {
                _setUpListners();
          }
      };

  var _setUpListners = function () {
			   setInterval(setDate, 1000);
      }

    const secondHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hoursdHand = document.querySelector('.hour-hand');

 	function setDate() {
    	const now = new Date();
    	const seconds = now.getSeconds();
    	const secondsDegrees = ((seconds / 60) * 360) + 90;
    	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    	const min = now.getMinutes();
    	const minDegrees = ((min / 60) * 360) + 90;
    	minHand.style.transform = `rotate(${minDegrees}deg)`;

    	const hours = now.getHours();
    	const hoursDegrees = ((hours / 12) * 360) + 90;
    	hoursdHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
      
  return {
    init: init
  }

})();

clock.init();