var times = [
	$("9"),
	$("10"),
	$("11"),
	$("12"),
	$("13"),
	$("14"),
	$("15"),
	$("16"),
	$("17"),
]
var saveBtn = $("saveBtn")
var currentHour = moment().format("H")

function addColorTheme() {
	for (i = 0; i < times.length; i++) {
	if (times[1] < hour) {
		times[i].addClass("past")
	} else 
		if (times[i] == hour) {
			times[i].addClass("present")
		} else { 
			times[i].addClass("future")
		}
	}
}
addColorTheme()

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});