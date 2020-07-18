var Score = 0;
// Call Question 2
var goToQ2 = function () {
	var flashQ2 = document.querySelector(".question2");
	var flashQ1 = document.querySelector(".question1");
	flashQ2.style.visibility = "visible";
	flashQ1.style.visibility = "hidden";


	var radios = document.getElementsByName('Flash1');

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
//Call Question 3

var goToQ3 = function () {
	var flashQ2 = document.querySelector(".question2");
	var flashQ3 = document.querySelector(".question3");
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

//Call Question4
var goToQ4 = function () {
	var flashQ3 = document.querySelector(".question3");
	var flashQ4 = document.querySelector(".question4");
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
	var flashQ4 = document.querySelector(".question4");
	var flashQ5 = document.querySelector(".question5");
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

	var FlashQ5 = document.querySelector(".question5");
	var radios = document.getElementsByName('Flash5');
	FlashQ5.style.visibility = "hidden";


	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "thereverseflash") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

	var Es = document.querySelector(".EndFlash");
	Es.style.visibility = "visible";
	document.getElementById("FlashScore").innerHTML = Score;
}
