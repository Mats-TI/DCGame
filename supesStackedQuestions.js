var mainDiv = document.createElement("div");
var SupesDiv = document.querySelector(".supermanQuiz");
Score = 0;
SupesDiv.prepend(mainDiv);

var supesQ1 = document.querySelector(".question1");
var supesQ2 = document.querySelector(".question2");
var supesQ3 = document.querySelector(".question3");
var supesQ4 = document.querySelector(".question4");
var supesQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndSuperman");

mainDiv.appendChild(supesQ1);

var radios = document.querySelectorAll("Superman1");

var goToQ2 = function () {
	//mainDiv.removeChild(supesQ1);
	mainDiv.prepend(supesQ2);
	supesQ2.style.visibility = "visible";
	supesQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('Superman1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "krypton") {
				Score += 1;
				console.log(Score);
				console.log("krypton logged");
			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(supesQ2);
	mainDiv.prepend(supesQ3);
	supesQ3.style.visibility = "visible";
	supesQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('Superman2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "kalel") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(supesQ3);
	mainDiv.prepend(supesQ4);
	supesQ4.style.visibility = "visible";
	supesQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('Superman3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "clarkkent") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(supesQ4);
	mainDiv.prepend(supesQ5);
	supesQ5.style.visibility = "visible";
	supesQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('Superman4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "loislane") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var endSupermanQuizMsg = function () {

	var radios = document.getElementsByName('Superman5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "lexluthor") {
				Score += 1;
				console.log(Score);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	supesQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("SupermanScore").innerHTML = Score;
}
