var mainDiv = document.createElement("div");
var MMDiv = document.querySelector(".MMQuiz");
Score = 0;
MMDiv.prepend(mainDiv);

var MMQ1 = document.querySelector(".question1");
var MMQ2 = document.querySelector(".question2");
var MMQ3 = document.querySelector(".question3");
var MMQ4 = document.querySelector(".question4");
var MMQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndMM");

mainDiv.appendChild(MMQ1);

var radios = document.querySelectorAll("MM1");

var goToQ2 = function () {
	//mainDiv.removeChild(MMQ1);
	mainDiv.prepend(MMQ2);
	MMQ2.style.visibility = "visible";
	MMQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('MM1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "johnjones") {
				Score += 1;
				console.log(radios[i].value);

			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(MMQ2);
	mainDiv.prepend(MMQ3);
	MMQ3.style.visibility = "visible";
	MMQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('MM2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "detective") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(MMQ3);
	mainDiv.prepend(MMQ4);
	MMQ4.style.visibility = "visible";
	MMQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('MM3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "fire") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(MMQ4);
	mainDiv.prepend(MMQ5);
	MMQ5.style.visibility = "visible";
	MMQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('MM4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "destroyed") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var endMMQuizMsg = function () {

	var radios = document.getElementsByName('MM5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "maalefaak") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	MMQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("MMScore").innerHTML = Score;
}
