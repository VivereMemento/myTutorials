// const myPlayer = (function () {
//
// 	const init = function () {
// 		_setUpListners();
// 		};
// 	const _setUpListners = function () {
// 			toggle.addEventListener('click', togglePlay);
// 			video.addEventListener('click', togglePlay);
// 			video.addEventListener('play', changeText);
// 			video.addEventListener('pause', changeText);
// 			video.addEventListener('timeupdate', handleProgress);
// 			let mousedown = false;
// 			progress.addEventListener('click', scrub);
// 			progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// 			progress.addEventListener('mousedown', () => mousedown = true);
// 			progress.addEventListener('mouseup', () => mousedown = false);
// 			skipButtons.forEach(button => button.addEventListener('click', skip));
// 			ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// 			ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// 		}
// /* Get our elements */
//
// 	const player = document.querySelector('.player');
// 	const video = player.querySelector('.viewer');
// 	const progress = player.querySelector('.progress');
// 	const progressBar = player.querySelector('.progress__filled');
// 	const toggle = player.querySelector('.toggle');
// 	const skipButtons = player.querySelectorAll('[data-skip]');
// 	const ranges = player.querySelectorAll('.player__slider');
//
// /* Build out functions */
//
// 	function togglePlay() {
// 		const method = video.paused ? 'play' : 'pause';
// 		video[method]();
// 	}
//
// 	function changeText() {
// 		const text = this.paused ? 'play' : 'pause';
// 		toggle.textContent = text;
// 	}
//
// 	function skip() {
// 		video.currentTime += Number(this.dataset.skip);
// 	}
//
// 	function handleRangeUpdate() {
// 		video[this.name] = this.value
// 		console.log(this.value);
// 	}
//
// 	function handleProgress() {
// 		const percent = (video.currentTime / video.duration) * 100;
// 		progressBar.style.flexBasis = `${percent}%`;
// 	}
//
// 	function scrub(e) {
// 		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
// 		video.currentTime = scrubTime;
// 	}
//
// /* Hook up the event listners */
// 	return {
// 	init: init
// 	}
//
// })();
//
// myPlayer.init();
