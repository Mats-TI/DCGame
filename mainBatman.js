var Score = 0;
// Call Question 2
var goToQ2 = function () {
	var BatsQ2 = document.querySelector(".question2");
	var BatsQ1 = document.querySelector(".question1");
	BatsQ2.style.visibility = "visible";
	BatsQ1.style.visibility = "hidden";


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
//Call Question 3

var goToQ3 = function () {
	var BatsQ2 = document.querySelector(".question2");
	var BatsQ3 = document.querySelector(".question3");
	BatsQ3.style.visibility = "visible";
	BatsQ2.style.visibility = "hidden";



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

//Call Question4
var goToQ4 = function () {
	var BatsQ3 = document.querySelector(".question3");
	var BatsQ4 = document.querySelector(".question4");
	BatsQ4.style.visibility = "visible";
	BatsQ3.style.visibility = "hidden";



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
	var BatsQ4 = document.querySelector(".question4");
	var BatsQ5 = document.querySelector(".question5");
	BatsQ5.style.visibility = "visible";
	BatsQ4.style.visibility = "hidden";


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

	var BatsQ5 = document.querySelector(".question5");
	var radios = document.getElementsByName('Batman5');
	BatsQ5.style.visibility = "hidden";


	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "thejoker") {
				Score += 1;
			}
			break;
		}
	}

	var Es = document.querySelector(".EndBatman");
	Es.style.visibility = "visible";
	document.getElementById("BatmanScore").innerHTML = Score;
}
