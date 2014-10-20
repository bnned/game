$(document).ready(function () {
    var clicks = localStorage.clickcount;
    $('#clicks').text(clicks);
    $('#clickme').click(function () {
        clicks++;
        $('#clicks').text(clicks);
    });
    $('#save').click(function () {
        alert("Save Complete");
        localStorage.clickcount = clicks;
    });
});