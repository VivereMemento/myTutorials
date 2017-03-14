const myModule = (function () {

	const init = function () {
		_setUpListners();
		};

  const pressed = [];
  const secretCode = 'wesbos';

	const _setUpListners = function () {

      window.addEventListener('keyup', (e) => {
          console.log(e);
          pressed.push(e.key);
          pressed.splice(-secretCode.lingth - 1, pressed.length - secretCode.length);
        if ( pressed.join('').includes(secretCode)) {
          console.log('DING DING!');
          cornify_add();
        }
        console.log(pressed);
      });
		}

	return {
	init: init
	}

})();

myModule.init();
