$(document).ready(function () {
    var clicks = 0;
    $('#clickme').click(function (){
        clicks++;
        $('#clicks').text(clicks);
        
    });
});
