var Score = 0;
// Call Question 2
var goToQ2 = function () {
	var supesQ2 = document.querySelector(".question2");
	var supesQ1 = document.querySelector(".question1");
	supesQ2.style.visibility = "visible";
	supesQ1.style.visibility = "hidden";


	var radios = document.getElementsByName('Superman1');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "krypton") {
				Score += 1;
				console.log("krypton logged");
			}
			break;

		}
	}

}
//Call Question 3

var goToQ3 = function () {
	var supesQ2 = document.querySelector(".question2");
	var supesQ3 = document.querySelector(".question3");
	supesQ3.style.visibility = "visible";
	supesQ2.style.visibility = "hidden";



	var radios = document.getElementsByName('Superman2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "kalel") {
				Score += 1;
			}
			break;
		}
	}
}

//Call Question4
var goToQ4 = function () {
	var supesQ3 = document.querySelector(".question3");
	var supesQ4 = document.querySelector(".question4");
	supesQ4.style.visibility = "visible";
	supesQ3.style.visibility = "hidden";



	var radios = document.getElementsByName('Superman3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "clarkkent") {
				Score += 1;
			}
			break;
		}
	}


}

var goToQ5 = function () {
	var supesQ4 = document.querySelector(".question4");
	var supesQ5 = document.querySelector(".question5");
	supesQ5.style.visibility = "visible";
	supesQ4.style.visibility = "hidden";


	var radios = document.getElementsByName('Superman4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "loislane") {
				Score += 1;
			}
			break;
		}
	}
}


var endSupermanQuizMsg = function () {

	var supesQ5 = document.querySelector(".question5");
	var radios = document.getElementsByName('Superman5');
	supesQ5.style.visibility = "hidden";


	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "lexluthor") {
				Score += 1;
			}
			break;
		}
	}

	var Es = document.querySelector(".EndSuperman");
	Es.style.visibility = "visible";
	document.getElementById("SupermanScore").innerHTML = Score;
}
