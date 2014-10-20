$(document).ready(function () {
    var clicks = localStorage.clickcount;
    alert(localStorage.upgrade1);
    if(typeof localStorage.upgrade1 === "undefined") {
        localStorage.upgrade1 = 15;
        localStorage.upgrade2 = 150;
        localStorage.upgrade3 = 1500;
    }
    $('#clicks').text(clicks);
    $('#upgrade1').text(upgrade1);
    $('#upgrade2').text(upgrade2);
    $('#upgrade3').text(upgrade3);
    $('#clickme').click(function () {
        clicks++;
        $('#clicks').text(clicks);
    });
    $('#upgrade1').click(function () {
        upgrade1 = math.pow(upgrade1, 1.01);
        $('#clicks').text(clicks);
    });
    $('#save').click(function () {
        alert("Save Complete");
        localStorage.clickcount = clicks;
    });
});