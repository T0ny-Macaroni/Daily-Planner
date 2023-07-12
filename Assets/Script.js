$(document).ready(function () {
    $(function () {
        
        $('.saveBtn').on('click', function () {
            var currentHour = $(this).parent().attr('id');
            var input = $(this).parent().children('textarea').val();
            console.log(currentHour);
            console.log(input);

            localStorage.setItem(currentHour, input);
        })
        
        $('.time-block').each(function () {
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
        
        $(`.time-block`).each(function () {
            var workHour = $(this).attr('id');
            var workTask = localStorage.getItem(workHour);
            $(this).children('textarea').val(workTask);
        })
        // TODO: Add code to display the current date in the header of the page.
        var currentDay = dayjs().format('dddd, MMMM D, YYYY');
        $('#currentDay').text(currentDay);
    });
});