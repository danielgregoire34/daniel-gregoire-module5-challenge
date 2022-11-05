var todayDate = moment().format('dddd, MMM Do YYYY');
var timeNow = moment().hour();
$("#currentDay").html(todayDate);


var calendarBlock = document.getElementById('calendar-block');
var currentDay = document.getElementById('currentDay');
var ninebtm = document.getElementById("9am-btm");
var ninetext = document.getElementById("9am-text");


$(document).ready(function(){

    $(".9ambtm").on("click", function () {
        var ninetext = $(this).siblings(".description").val();
        var ninetime = $(this).parent().attr("id");
        localStorage.setItem(ninetime, ninetext);
    })

    $("#9am .description").val(localStorage.getItem("9am"));



});

