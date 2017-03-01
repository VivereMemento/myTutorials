// const myCanvas = (function () {

// 	const init = function () {
// 		_setUpListners();
// 		};
// 	const _setUpListners = function () {
// 			canvas.addEventListener('mousedown', (e) => {
// 				isDrawing = true;
// 				[lastX, lastY] = [e.offsetX, e.offsetY];
// 			});
// 			canvas.addEventListener('mousemove', draw);
// 			canvas.addEventListener('mouseup', () => isDrawing = false);
// 			canvas.addEventListener('mouseout', () => isDrawing = false);

// 			input.addEventListener('change', changeColor);
// 		}

// 	const input = document.querySelector('.canvas__input');
// 	const canvas = document.querySelector('#draw');
// 	const ctx = canvas.getContext('2d');
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// 	ctx.strokeStyle = '#dada55';
// 	ctx.lineJoin = 'round';
// 	ctx.lineCap = 'round';
// 	ctx.lineWidth = 10;

// 	let isDrawing = false;
// 	let lastX = 0;
// 	let lastY = 0;
// 	let hue = 0;

// 	function changeColor() {
// 		const color = input.value;
// 		ctx.strokeStyle = color;
// 	}

// 	function draw(e) {
// 		if(!isDrawing) return; // stop the fn from running when they are not moused down
		
// 		// ctx.strokeStyle = `hsl(${hue}, 100%, 50%`;
// 		ctx.beginPath();

// 		// start from
// 		ctx.moveTo(lastX, lastY);

// 		// go to
// 		ctx.lineTo(e.offsetX, e.offsetY);
// 		ctx.stroke();
// 		[lastX, lastY] = [e.offsetX, e.offsetY];

// 		// hue++;
// 		// if(hue >= 360) {
// 		// 	hue = 0;
// 		// }
// 	}

		
// 	return {
// 	init: init
// 	}

// })();

// myCanvas.init();