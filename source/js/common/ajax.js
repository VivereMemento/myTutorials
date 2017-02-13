var request = new XMLHttpRequest();


const triggerOne = document.querySelector('.trigger1');
triggerOne.addEventListener('click', trigShow);

const triggerTwo = document.querySelector('.trigger2');
triggerTwo.addEventListener('click', trigShow);

const triggerThree = document.querySelector('.trigger3');
triggerThree.addEventListener('click', xmlShow);

function trigShow() {
	if(this == triggerOne){
		request.open('GET', './assets/js/data.txt');
	} else {
		request.open('GET', './assets/js/data2.txt');
	} 
	
	request.onreadystatechange = function() {
		if((request.readyState === 4) && (request.status === 200)) {
			const modify = document.querySelector('.heading');
			modify.innerHTML = request.responseText;
			// document.writeln(request.responseText);
		}
	}
	request.send();
}

function xmlShow() {
	request.open('GET', './assets/js/books.xml');

	request.onreadystatechange = function() {
		if((request.readyState === 4) && (request.status === 200)) {
			console.log(request.responseXML.getElementsByTagName(''));
		}
	}
	request.send();
}