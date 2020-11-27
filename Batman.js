var mainDiv = document.createElement("div");
var BatsDiv = document.querySelector(".BatmanQuiz");
Score = 0;
BatsDiv.prepend(mainDiv);

var batsQ1 = document.querySelector(".question1");
var batsQ2 = document.querySelector(".question2");
var batsQ3 = document.querySelector(".question3");
var batsQ4 = document.querySelector(".question4");
var batsQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndBatman");

mainDiv.appendChild(batsQ1);

var radios = document.querySelectorAll("Batman1");

var goToQ2 = function () {
	//mainDiv.removeChild(batsQ1);
	mainDiv.prepend(batsQ2);
	batsQ2.style.visibility = "visible";
	batsQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('Batman1');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "brucewayne") {
				Score += 1;

			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(batsQ2);
	mainDiv.prepend(batsQ3);
	batsQ3.style.visibility = "visible";
	batsQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('Batman2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "gothamcity") {
				Score += 1;
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(batsQ3);
	mainDiv.prepend(batsQ4);
	batsQ4.style.visibility = "visible";
	batsQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('Batman3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "batmobile") {
				Score += 1;
			}
			break;

		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(batsQ4);
	mainDiv.prepend(batsQ5);
	batsQ5.style.visibility = "visible";
	batsQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('Batman4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "alfredpennyworth") {
				Score += 1;
			}
			break;

		}
	}

}

var endBatmanQuizMsg = function () {

	var radios = document.getElementsByName('Batman5');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "thejoker") {
				Score += 1;
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	batsQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("BatmanScore").innerHTML = Score;
}
