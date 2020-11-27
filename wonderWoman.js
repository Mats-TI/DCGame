var mainDiv = document.createElement("div");
var WWDiv = document.querySelector(".WWQuiz");
Score = 0;
WWDiv.prepend(mainDiv);

var WWQ1 = document.querySelector(".question1");
var WWQ2 = document.querySelector(".question2");
var WWQ3 = document.querySelector(".question3");
var WWQ4 = document.querySelector(".question4");
var WWQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndWW");

mainDiv.appendChild(WWQ1);

var radios = document.querySelectorAll("WW1");

var goToQ2 = function () {
	//mainDiv.removeChild(WWQ1);
	mainDiv.prepend(WWQ2);
	WWQ2.style.visibility = "visible";
	WWQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('WW1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "themyscira") {
				Score += 1;
				console.log(radios[i].value);

			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(WWQ2);
	mainDiv.prepend(WWQ3);
	WWQ3.style.visibility = "visible";
	WWQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('WW2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "demigods") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(WWQ3);
	mainDiv.prepend(WWQ4);
	WWQ4.style.visibility = "visible";
	WWQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('WW3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "hippolyta") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(WWQ4);
	mainDiv.prepend(WWQ5);
	WWQ5.style.visibility = "visible";
	WWQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('WW4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "stevetrevor") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var endWWQuizMsg = function () {

	var radios = document.getElementsByName('WW5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "cheetah") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	WWQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("WWScore").innerHTML = Score;
}
