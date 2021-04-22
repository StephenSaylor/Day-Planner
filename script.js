var 
var saveBtn = $("saveBtn")
var currentHour = moment()

function addColorTheme() {
	current time = currentHour.hours()
	if (hour < current time) {
		textarea.addClass("past")
	} else 
		if (hour == current time) {
			textarea.addClass("present")
		} else { 
			textarea.addClass("future")
		}
	}



saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();


var textareaDisplay = 
var timeBlocks = [
	{ 
		time: 8,
		topic: "dynamically rendering with jquery",
		duration: "1 hour"

	}...
]

function renderTimeblocks() {
	console.log("rendering timeblocks")
	timeBlocks.forEach(function(timeblock) {
		var textareaDiv = $('div class="col-4-textarea">')
		var topicDiv = $("apointment topic")
		var timeDiv = $("subtitle")
		var duration = $("duration")
		timeblockDiv.text("textarea")
		textareDisplayDiv.append(textareaDiv)
//add topic time and duration
		})

}
