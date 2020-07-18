var Score = 0;
// Call Question 2
var goToQ2 = function () {
	var WWQ2 = document.querySelector(".question2");
	var WWQ1 = document.querySelector(".question1");
	WWQ2.style.visibility = "visible";
	WWQ1.style.visibility = "hidden";


	var radios = document.getElementsByName('GL1');

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
//Call Question 3

var goToQ3 = function () {
	var WWQ2 = document.querySelector(".question2");
	var WWQ3 = document.querySelector(".question3");
	WWQ3.style.visibility = "visible";
	WWQ2.style.visibility = "hidden";



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

//Call Question4
var goToQ4 = function () {
	var WWQ3 = document.querySelector(".question3");
	var WWQ4 = document.querySelector(".question4");
	WWQ4.style.visibility = "visible";
	WWQ3.style.visibility = "hidden";



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
	var WWQ4 = document.querySelector(".question4");
	var WWQ5 = document.querySelector(".question5");
	WWQ5.style.visibility = "visible";
	WWQ4.style.visibility = "hidden";


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

	var WWQ5 = document.querySelector(".question5");
	var radios = document.getElementsByName('GL5');
	WWQ5.style.visibility = "hidden";


	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			if (radios[i].value == "sinestro") {
				Score += 1;
				console.log(radios[i].value);
			}
			break;
		}
	}

	var Es = document.querySelector(".EndGL");
	Es.style.visibility = "visible";
	document.getElementById("GLScore").innerHTML = Score;
}
