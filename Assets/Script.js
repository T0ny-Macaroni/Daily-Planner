$(document).ready(function () {
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    $('.saveBtn').on('click', function() {
        var currentHour = $(this).parent().attr('id');
        var input = $(this).parent().children('textarea').val();
        console.log(currentHour);
        console.log(input);
        
        localStorage.setItem(currentHour, input);
      })
    // TODO: Add code to apply the past, present, or future class to each time
    $('.time-block').each(function() {
        var timeBlock = $(this).attr('id');
        var currentTime = dayjs().format('HH');
        
        if (timeBlock < currentTime) {
          $(this).addClass('past');
        } else if (timeBlock === currentTime) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      })
    // TODO: Add code to get any user input that was saved in localStorage and set
    $(`.time-block`).each(function() {
        var workHour = $(this).attr('id');
        var workTask = localStorage.getItem(workHour);
        $(this).children('textarea').val(workTask);
    })
    // TODO: Add code to display the current date in the header of the page.
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);
  });
});