$(document).ready(function () {
    if (typeof localStorage.upgrade1 === "undefined") {
        localStorage.clickcount = 0;
        localStorage.clickmulti = 1;
        localStorage.upgrade1 = 15;
        localStorage.upgrade2 = 150;
        localStorage.upgrade3 = 1500;
    }
    $('#clicks').html(localStorage.clickcount);
    $('#upgrade1').html(localStorage.upgrade1);
    $('#upgrade2').html(localStorage.upgrade2);
    $('#upgrade3').html(localStorage.upgrade3);
    $('#clickme').click(function () {
        localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.clickmulti);
        $('#clicks').html(localStorage.clickcount);
    });
    $('#up1').click(function () {
        if (Number(localStorage.clickcount) - Number(localStorage.upgrade1) >= 0) {
            alert();
            localStorage.clickcount = Number(localStorage.clickcount) - Number(localStorage.upgrade1);
            localStorage.upgrade1 = localStorage.upgrade1 + 15 + round(math.pow(Number(localStorage.upgrade1), 1.50));
            $('#upgrade1').html(localStorage.upgrade1);
            $('#clicks').html(localStorage.clickcount);
            localStorage.clickmulti = Number(localStorage.clickmulti) + .5;
        }
    });
    $('#up2').click(function () {
        if (Number(localStorage.clickcount) - Number(localStorage.upgrade2) >= 0) {
            localStorage.clickcount = Number(localStorage.clickcount) - Number(localStorage.upgrade2);
            localStorage.upgrade2 = localStorage.upgrade2 + 150 + round(math.pow(Number(localStorage.upgrade2), 1.50));
            $('#upgrade2').html(localStorage.upgrade2);
            $('#clicks').html(localStorage.clickcount);
            localStorage.clickmulti = Number(localStorage.clickmulti) + .5;
        }
    });
    $('#up3').click(function () {
        if (Number(localStorage.clickcount) - Number(localStorage.upgrade3) >= 0) {
            localStorage.clickcount = Number(localStorage.clickcount) - Number(localStorage.upgrade3);
            localStorage.upgrade3 = localStorage.upgrade3 + 1500 + round(math.pow(Number(localStorage.upgrade3), 1.50));
            $('#upgrade3').html(localStorage.upgrade3);
            $('#clicks').html(localStorage.clickcount);
            localStorage.clickmulti = Number(localStorage.clickmulti) + .5;
        }
    });
    $('#win').click(function () {
        if (Number(localStorage.clickcount) - 5000000 >= 0) {
            localStorage.clickcount = Number(localStorage.clickcount) - 5000000;
            alert("You Win");
        }
    });
});