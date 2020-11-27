var mainDiv = document.createElement("div");
var HGDiv = document.querySelector(".HGQuiz");
Score = 0;
HGDiv.prepend(mainDiv);

var HGQ1 = document.querySelector(".question1");
var HGQ2 = document.querySelector(".question2");
var HGQ3 = document.querySelector(".question3");
var HGQ4 = document.querySelector(".question4");
var HGQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndHG");

mainDiv.appendChild(HGQ1);

var radios = document.querySelectorAll("HG1");

var goToQ2 = function () {
	//mainDiv.removeChild(HGQ1);
	mainDiv.prepend(HGQ2);
	HGQ2.style.visibility = "visible";
	HGQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('HG1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "thanagar") {
				Score += 1;
				console.log(Score);
				console.log("krypton logged");
			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(HGQ2);
	mainDiv.prepend(HGQ3);
	HGQ3.style.visibility = "visible";
	HGQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('HG2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "shayerahol") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(HGQ3);
	mainDiv.prepend(HGQ4);
	HGQ4.style.visibility = "visible";
	HGQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('HG3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "mace") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(HGQ4);
	mainDiv.prepend(HGQ5);
	HGQ5.style.visibility = "visible";
	HGQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('HG4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "nthmetal") {
				Score += 1;
				console.log(Score);
			}
			break;

		}
	}

}

var endHGQuizMsg = function () {

	var radios = document.getElementsByName('HG5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "tryggthesorcerer") {
				Score += 1;
				console.log(Score);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	HGQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("HGScore").innerHTML = Score;
}
