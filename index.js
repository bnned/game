$(document).ready(function () {
    var clicks = 0;
    $('#clickme').click(function () {
        clicks++;
        $('#clicks').text(clicks);
    });
    function save() {
        alert();
//        if (typeof (Storage) !== "undefined") {
////            if (localStorage.clickcount) {
////                localStorage.clickcount = Number(localStorage.clickcount) + 1;
////            } else {
////                localStorage.clickcount = 1;
////            }
//            localStorage.clickcount = clicks;
//            $("#clicks").text("You have clicked the button " + localStorage.clickcount + " time(s).");
//        } else {
//            $("#clicks").text("Sorry, your browser does not support web storage...");
//        }
    }
});