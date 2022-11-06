var todayDate = moment().format('dddd, MMM Do YYYY');
var timeNow = moment().hour();
$("#currentDay").html(todayDate);


var calendarBlock = document.getElementById('calendar-block');
var currentDay = document.getElementById('currentDay');
var ninebtm = document.getElementById("9am-btm");
var ninetext = document.getElementById("9am-text");


$(document).ready(function(){

    //Saving Via local storage
    $(".saveBtn").on("click", function () {
        var textArea = $(this).siblings(".textarea").val();
        var id = $(this).parent().attr("id");
        localStorage.setItem(id, textArea);
    })


    //9-5 time blocks for each time
    $("#9am .textarea").val(localStorage.getItem("9am"));
    $("#10am .textarea").val(localStorage.getItem("10am"));
    $("#11am .textarea").val(localStorage.getItem("11am"));
    $("#12pm .textarea").val(localStorage.getItem("12pm"));
    $("#1pm .textarea").val(localStorage.getItem("1pm"));
    $("#2pm .textarea").val(localStorage.getItem("2pm"));
    $("#3pm .textarea").val(localStorage.getItem("3pm"));
    $("#4pm .textarea").val(localStorage.getItem("4pm"));
    $("#5pm .textarea").val(localStorage.getItem("5pm"));


});

