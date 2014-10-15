$(document).ready(function () {
    var clicks = 0;
    $('#clickme').click(function () {
        clicks++;
        $('#clicks').text(clicks);
    });
    $('#save').click(function (){
        alert();
        localStorage.clickcount = clicks;
        $("#clicks").text("You have clicked the button " + localStorage.clickcount + " time(s).");
    });
});