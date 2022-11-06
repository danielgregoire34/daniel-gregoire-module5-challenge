var todayDate = moment().format('dddd, MMM Do YYYY');
var timeNow = moment().hour();
$("#currentDay").html(todayDate);


var calendarBlock = document.getElementById('calendar-block');
var currentDay = document.getElementById('currentDay');
var ninebtm = document.getElementById("9am-btm");
var ninetext = document.getElementById("9am-text");

/*
function saveText() { 
    let demo = document.getElementById("9amtxt").value;
    window.localStorage.textarea = demo;
    var dem = demo; //this is not necessary
    document.getElementById("9amtxt").innerHTML = dem; //use demo instead

} 
*/
$(document).ready(function(){

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saving items via local storage
        localStorage.setItem(time, text);
    })

    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));


});

