var times = [
	("9"),
	("10"),
	("11"),
	("12"),
	("13"),
	("14"),
	("15"),
	("16"),
	("17"),
]
var saveBtn = $(".saveBtn")
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

function addColorTheme() {
	var currentHour = moment().format("H")
	for (i = 0; i < times.length; i++) {
	if (parseInt(times[i]) < currentHour) {
		$("#" + times[i]).addClass("past")
	} else 
		if (parseInt(times[i]) == currentHour) {
			$("#" + times[i]).addClass("present")
		} else if (parseInt(times[i]) > currentHour) { 
			$("#" + times[i]).addClass("future")
		}
	}
}
addColorTheme()

saveBtn.on("click", function(event) {
    event.preventDefault()
	var hourOfDay = moment().format("H")
	var textAreaContent = times.value.trim()

    localStorage.setItem("hourOfDay", JSON.stringify(times));
});

addColorTheme();