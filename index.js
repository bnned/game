$(document).ready(function () {
    if (typeof localStorage.upgrade1 === "undefined") {
        localStorage.clickcount = 0;
        localStorage.clickmulti = 1;
        localStorage.upgrade1 = 15;
        localStorage.upgrade2 = 150;
        localStorage.upgrade3 = 1500;
    }
    $('#clicks').text(localStorage.clickcount);
    $('#upgrade1').text(localStorage.upgrade1);
    $('#upgrade2').text(localStorage.upgrade2);
    $('#upgrade3').text(localStorage.upgrade3);
    $('#clickme').click(function () {
        localStorage.clickcount += localStorage.clickmulti;
        $('#clicks').text(localStorage.clickcount);
    });
    $('#up1').click(function () {
        if (localStorage.clickcount - localStorage.upgrade1 >= 0) {
            localStorage.clickcount -= localStorage.upgrade1;
            localStorage.upgrade1 = 15 + round(math.pow(localStorage.upgrade1, 1.50));
            $('#upgrade1').text(localStorage.upgrade1);
            localStorage.clickmulti += .5;
        }
    });
    $('#up2').click(function () {
        if (localStorage.clickcount - localStorage.upgrade2 >= 0) {
            localStorage.clickcount -= localStorage.upgrade2;
            localStorage.upgrade2 = 150 + round(math.pow(localStorage.upgrade2, 1.25));
            $('#upgrade2').text(localStorage.upgrade2);
            localStorage.clickmulti += 1;
        }
    });
    $('#up3').click(function () {
        if (localStorage.clickcount - localStorage.upgrade3 >= 0) {
            localStorage.clickcount -= localStorage.upgrade3;
            localStorage.upgrade3 = 1500 + round(math.pow(localStorage.upgrade3, 1.17));
            $('#upgrade3').text(localStorage.upgrade3);
            localStorage.clickmulti += 2;
        }
    });
    $('#win').click(function () {
        if (localStorage.clickcount - 5000000 >= 0) {
            localStorage.clickcount -= 5000000;
            alert("You Win");
        }
    });
});