var mainDiv = document.createElement("div");
var flashDiv = document.querySelector(".FlashQuiz");
Score = 0;
flashDiv.prepend(mainDiv);

var flashQ1 = document.querySelector(".question1");
var flashQ2 = document.querySelector(".question2");
var flashQ3 = document.querySelector(".question3");
var flashQ4 = document.querySelector(".question4");
var flashQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndFlash");

mainDiv.appendChild(flashQ1);

var radios = document.querySelectorAll("Flash1");

var goToQ2 = function () {
	//mainDiv.removeChild(flashQ1);
	mainDiv.prepend(flashQ2);
	flashQ2.style.visibility = "visible";
	flashQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('Flash1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "barryallen") {
				Score += 1;
				console.log(radios[i].value);

			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(flashQ2);
	mainDiv.prepend(flashQ3);
	flashQ3.style.visibility = "visible";
	flashQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('Flash2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "speedforce") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(flashQ3);
	mainDiv.prepend(flashQ4);
	flashQ4.style.visibility = "visible";
	flashQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('Flash3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "iriswest") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(flashQ4);
	mainDiv.prepend(flashQ5);
	flashQ5.style.visibility = "visible";
	flashQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('Flash4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "starcity") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var endFlashQuizMsg = function () {

	var radios = document.getElementsByName('Flash5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "thereverseflash") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	flashQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("FlashScore").innerHTML = Score;
}
