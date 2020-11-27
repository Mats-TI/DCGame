var mainDiv = document.createElement("div");
var GLDiv = document.querySelector(".GLQuiz");
Score = 0;
GLDiv.prepend(mainDiv);

var GLQ1 = document.querySelector(".question1");
var GLQ2 = document.querySelector(".question2");
var GLQ3 = document.querySelector(".question3");
var GLQ4 = document.querySelector(".question4");
var GLQ5 = document.querySelector(".question5");
var endBox = document.querySelector(".EndGL");

mainDiv.appendChild(GLQ1);

var radios = document.querySelectorAll("GL1");

var goToQ2 = function () {
	//mainDiv.removeChild(GLQ1);
	mainDiv.prepend(GLQ2);
	GLQ2.style.visibility = "visible";
	GLQ1.style.visibility = "hidden";

	var radios = document.getElementsByName('GL1');
	console.log(radios);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "lawenforcement") {
				Score += 1;
				console.log(radios[i].value);

			}
			break;

		}
	}
}

var goToQ3 = function () {
	//mainDiv.removeChild(GLQ2);
	mainDiv.prepend(GLQ3);
	GLQ3.style.visibility = "visible";
	GLQ2.style.visibility = "hidden";

	var radios = document.getElementsByName('GL2');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "alanscott") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var goToQ4 = function () {
	//mainDiv.removeChild(GLQ3);
	mainDiv.prepend(GLQ4);
	GLQ4.style.visibility = "visible";
	GLQ3.style.visibility = "hidden";
	var radios = document.getElementsByName('GL3');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "oa") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

}

var goToQ5 = function () {
	//mainDiv.removeChild(GLQ4);
	mainDiv.prepend(GLQ5);
	GLQ5.style.visibility = "visible";
	GLQ4.style.visibility = "hidden";
	var radios = document.getElementsByName('GL4');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "willpower") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;

		}
	}

}

var endGLQuizMsg = function () {

	var radios = document.getElementsByName('GL5');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "sinestro") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}
	mainDiv.prepend(endBox);

	GLQ5.style.visibility = "hidden";
	endBox.style.visibility = "visible";
	document.getElementById("GLScore").innerHTML = Score;
}
