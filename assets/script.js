// Variable to store the various keys and values for each business hour
var businessHours = [
    {
        id: "0",
        milTime: "09",
        hour: "09",
        timeOfDay: "am",
    },
    {
        id: "1",
        milTime: "10",
        hour: "10",
        timeOfDay: "am",
    },
    {
        id: "2",
        milTime: "11",
        hour: "11",
        timeOfDay: "am",
    },
    {
        id: "3",
        milTime: "12",
        hour: "12",
        timeOfDay: "pm",
    },
    {
        id: "4",
        milTime: "13",
        hour: "01",
        timeOfDay: "pm",
    },
    {
        id: "5",
        milTime: "14",
        hour: "02",
        timeOfDay: "pm",
    },
    {
        id: "6",
        milTime: "15",
        hour: "03",
        timeOfDay: "pm",
    },
    {
        id: "7",
        milTime: "16",
        hour: "04",
        timeOfDay: "pm"
    },
    {
        id: "8",
        milTime: "17",
        hour: "05",
        timeOfDay: "pm",
    },
    
]

// Creates elements for each part of the planner
businessHours.forEach(function(currentHour) {

    // Creates box where the hours show up
    var hoursBox = $("<div>")
        .text(`${currentHour.hour}${currentHour.timeOfDay}`)
        .attr({"class": "col-lg-2 hour" });

    // Makes hours row
    var hoursRow = $("<form>").attr({"class": "row"});
    $(".container").append(hoursRow);

    // Creates space to add text details to your plan for that hour
    var hourInput = $("<div>")
        .attr({"class": "col-lg-9 description p-0"});

    var planData = $("<textarea>");
    hourInput.append(planData);
    planData.attr("id", currentHour.id);

    // Sets styling based on whether the event hour is in the past, present, or future
    if (currentHour.milTime < moment().format("HH")) {
        planData.attr ({"class": "past", })

    } else if (currentHour.milTime === moment().format("HH")) {
        planData.attr({"class": "present"})

    } else if (currentHour.milTime > moment().format("HH")) {
        planData.attr({"class": "future"})

    }

    // Add a save button at the end of each row
    var saveBtn = $("<i class='far fa-save fa-lg'></i>")
    var saveDay = $("<button>")
        .attr({"class": "col-md-1 saveBtn"});
    saveDay.append(saveBtn);
    hoursRow.append(hoursBox, hourInput, saveDay);
})




// Gets the current date, then displays that date in the element ID currentDay
function displayDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// Call function to display date on top
displayDate();

