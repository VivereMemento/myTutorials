var myAjax = (function () {

	var init = function () {
				_setUpListners();
			};
	var _setUpListners = function () {

			if(document.querySelector('.index')) {
				const triggerOne = document.querySelector('.trigger1');
				triggerOne.addEventListener('click', trigShow);

				const triggerTwo = document.querySelector('.trigger2');
				triggerTwo.addEventListener('click', trigShow);

				const triggerThree = document.querySelector('.trigger3');
				triggerThree.addEventListener('click', xmlShow);

				const triggerFour = document.querySelector('.trigger4');
				triggerFour.addEventListener('click', jsonShow);
			}

			if(document.querySelector('.ajax')) {
				const triggerEnter = document.querySelector('#search');
				triggerEnter.addEventListener('keyup', searchInput);
			}

			
		}

	var request = new XMLHttpRequest();

	function trigShow() {
		if(this == triggerOne){
				request.open('GET', './assets/js/data.txt');
		} else {
				request.open('GET', './assets/js/data2.txt');
		} 
		
		request.onreadystatechange = function() {
				if((request.readyState === 4) && (request.status === 200)) {
						let modify = document.querySelector('.heading');
						modify.innerHTML = request.responseText;
						// document.writeln(request.responseText);
				}
		}
		request.send();
	}

	function xmlShow() {
		request.open('GET', './assets/js/food.xml');

		request.onreadystatechange = function() {
				if((request.readyState === 4) && (request.status === 200)) {
						let modify = document.querySelector('.heading');
						// modify.innerHTML = request.responseXML.querySelectorAll('name')[1].childNodes[0].nodeValue;
						// modify.innerHTML = request.responseXML.querySelectorAll('name')[1].firstChild.nodeValue;
						// const name = request.responseXML.querySelectorAll('name')[1];
						// console.log({name});

						let items =
								request.responseXML.querySelectorAll('name');
						let output = '<ul>'; 
								for (var i = 0; i < items.length; i++) {
										output += `<li> ${items[i].firstChild.nodeValue} </li>`;
								}
								output +='</ul>';
								modify.innerHTML = output;
				}
		}
		request.send();
	}

	function jsonShow() {
		
	// request.open('GET', './assets/js/zips.json');

	//  request.onreadystatechange = function() {
	//      if((request.readyState === 4) && (request.status === 200)) {
	//          const modify = document.querySelector('.heading');
	//          let items = JSON.parse(request.responseText);
	//          let output = '<ul>'; 
	//              for (var key in items) {
	//                  output += '<li>' + items[key].city + '</li>';
	//              }
	//              output +='</ul>';
	//              modify.innerHTML = output;
	//      }
	//  }
	//  request.send();

			// ******************** //
			// THE SAME WITH JQUERY //
			// ******************** //

		$.getJSON('./assets/js/zips.json', function(data) {

				let output = '<ul>';
				$.each(data, function(key, val) {
						output += `<li> ${val.city} </li>`;
				});
				output += '</ul>';
				$('.heading').html(output);
		});
	}

	function searchInput() {
		let searchField = $('#search').val();
		let myExp = new RegExp(searchField, "i");
		$.getJSON('./assets/js/zips.json', function(data) {
			var output = '<ul class="search__results">';
			$.each(data, function(key, val) {
					if (val.city.search(myExp) != -1) {
							output += `<li>
											<h2> City: ${val.city} </h2>
											<span> Location: ${val.loc}, </span>
											<span> Population: ${val.pop}, </span>
									</li>`;
					}
			});
			output += '</ul>';
			$('#update').html(output);
		});
	}
			
	return {
		init: init
	}

})();

myAjax.init();