
window.onscroll = function(){navbar()};

function navbar(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "#e66d42";
        document.getElementById('nav1').style.fontSize = "14px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "#e66d42";
        document.getElementById('nav2').style.fontSize = "14px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "#e66d42";
        document.getElementById('nav3').style.fontSize = "14px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "#e66d42";
        document.getElementById('nav4').style.fontSize = "14px";

    }
    else{
        document.getElementById('nav1').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav1').style.color = "white";
        document.getElementById('nav1').style.fontSize = "18px";

        document.getElementById('nav2').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav2').style.color = "white";
        document.getElementById('nav2').style.fontSize = "18px";

        document.getElementById('nav3').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav3').style.color = "white";
        document.getElementById('nav3').style.fontSize = "18px";

        document.getElementById('nav4').style.transition = "color 1s, font-size 1s";
        document.getElementById('nav4').style.color = "white";
        document.getElementById('nav4').style.fontSize = "18px";

    }
}

