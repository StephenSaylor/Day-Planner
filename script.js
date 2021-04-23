var times = [
	$("#9"),
	$("#10"),
	$("#11"),
	$("#12"),
	$("#13"),
	$("#14"),
	$("#15"),
	$("#16"),
	$("#17"),
]
var saveBtn = $("#saveBtn")
var today = moment().format("MMMM DD YYYY")

$("#currentDay").append(today)

function addColorTheme() {
	var currentHour = moment().format("H")
	for (i = 0; i < times.length; i++) {
	if (times[i] > currentHour) {
		times[i].addClass("past")
	} else 
		if (times[i] == currentHour) {
			times[i].addClass("present")
		} else { 
			times[i].addClass("future")
		}
	}
}
addColorTheme()

saveBtn.on("click", function() {
    var hourOfDay = $(this).parent().attr("id");
    var textAreaContent = $("textarea").val().trim();

    localStorage.setItem(hourOfDay, textAreaContent);
    console.log(hourOfDay, textAreaContent);
});
